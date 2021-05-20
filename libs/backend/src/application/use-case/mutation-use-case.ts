import { FetchResult } from '@apollo/client/link/core'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { DocumentNode } from 'graphql'
import { ApolloClientService } from '../../infrastructure'
import { GraphqlUseCase } from './graphql-use-case'

export abstract class MutationUseCase<
  TUseCaseRequestPort,
  TUseCaseDtoResponse,
  TMutation,
  TMutationVariables,
> extends GraphqlUseCase<
  TUseCaseRequestPort,
  TUseCaseDtoResponse,
  TMutation,
  TMutationVariables,
  true
> {
  protected constructor(protected apollo: ApolloClientService) {
    super(apollo)
  }

  protected isMutation(): true {
    return true
  }

  protected abstract getGql():
    | DocumentNode
    | TypedDocumentNode<TMutation, TMutationVariables>

  protected abstract getVariables(
    request: TUseCaseRequestPort,
  ): TMutationVariables

  protected abstract extractDataFromResult(
    result: FetchResult<TMutation>,
  ): TUseCaseDtoResponse
}
