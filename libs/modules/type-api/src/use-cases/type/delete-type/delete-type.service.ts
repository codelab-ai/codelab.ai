import {
  ApolloClient,
  FetchResult,
  NormalizedCacheObject,
} from '@apollo/client'
import {
  ApolloClientTokens,
  BaseDgraphFields,
  DeleteResponse,
  instanceOfDgraphModel,
  MutationUseCase,
} from '@codelab/backend'
import {
  DeleteTypeGql,
  DeleteTypeMutation,
  DeleteTypeMutationVariables,
} from '@codelab/codegen/dgraph'
import { Inject, Injectable } from '@nestjs/common'
import { DgraphInterface, InterfaceDgraphFields } from '../../../models'
import { GetDgraphTypeService } from '../get-dgraph-type'
import { GetFieldsByTypeService } from '../get-fields-by-type'
import { DeleteTypeInput } from './delete-type.input'

type GqlVariablesType = DeleteTypeMutationVariables
type GqlOperationType = DeleteTypeMutation

interface ValidationContext {
  foundInterface?: DgraphInterface
}

@Injectable()
export class DeleteTypeService extends MutationUseCase<
  DeleteTypeInput,
  DeleteResponse,
  GqlOperationType,
  GqlVariablesType,
  ValidationContext
> {
  constructor(
    @Inject(ApolloClientTokens.ApolloClientProvider)
    protected apolloClient: ApolloClient<NormalizedCacheObject>,
    private getDgraphTypeService: GetDgraphTypeService,
    private getFieldsByTypeService: GetFieldsByTypeService,
  ) {
    super(apolloClient)
  }

  protected getGql() {
    return DeleteTypeGql
  }

  protected extractDataFromResult(result: FetchResult<GqlOperationType>) {
    return {
      affected: result?.data?.deleteType?.numUids || 0,
    }
  }

  protected mapVariables(
    { typeId }: DeleteTypeInput,
    { foundInterface }: ValidationContext,
  ): GqlVariablesType {
    // If the type is an interface, delete its fields too, they're useless without an interface
    const fieldIds =
      foundInterface && foundInterface[InterfaceDgraphFields.Fields]
        ? foundInterface[InterfaceDgraphFields.Fields]?.map(
            (f) => f[BaseDgraphFields.uid],
          ) || []
        : []

    return {
      filter: { id: [typeId] },
      fieldFilter: {
        id: fieldIds,
      },
    }
  }

  protected async validate(
    request: DeleteTypeInput,
  ): Promise<ValidationContext> {
    // Check if the deleted type exists
    const type = await this.getDgraphTypeService.execute({
      typeId: request.typeId,
    })

    if (!type) {
      throw new Error('Type not found')
    }

    // If the deleted type is the propTypes of an atom, return an Error
    // the user needs to delete the atom first, otherwise our data will be corrupt (propTypes is a required field of Atom)
    if (instanceOfDgraphModel(type, DgraphInterface.Metadata.modelName)) {
      const atom = (type as DgraphInterface)[InterfaceDgraphFields.Atom] as any

      if (atom) {
        throw new Error(
          `Can't delete interface, because it's the prop types to the atom ${
            (atom['Atom.label'] as string) || ''
          }`,
        )
      }

      // The type is an interface, but it doesn't belong to an atom. We can safely delete it
      // Return the foundInterface as context in case we need it
      return { foundInterface: type as DgraphInterface }
    }

    // The type is not an interface
    // Check if any fields reference it. If there are any - prevent deleting it
    const fields = await this.getFieldsByTypeService.execute({
      typeId: request.typeId,
    })

    if (fields && fields.length) {
      throw new Error(
        'Cannot delete type, the field(s) ' +
          fields.map((f) => `${f.interface.name}.${f.name}`).join(',') +
          ' depend on it',
      )
    }

    return {}
  }
}
