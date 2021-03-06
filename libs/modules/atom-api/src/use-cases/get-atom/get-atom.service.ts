import { FetchResult } from '@apollo/client'
import { QueryUseCase } from '@codelab/backend'
import {
  GetAtomGql,
  GetAtomQuery,
  GetAtomQueryVariables,
} from '@codelab/codegen/dgraph'
import { Injectable } from '@nestjs/common'
import { Atom, atomSchema } from '../../atom.model'
import { GetAtomInput } from './get-atom.input'

@Injectable()
export class GetAtomService extends QueryUseCase<
  GetAtomInput,
  Atom | null,
  GetAtomQuery,
  GetAtomQueryVariables
> {
  protected getGql() {
    return GetAtomGql
  }

  protected extractDataFromResult(result: FetchResult<GetAtomQuery>) {
    return atomSchema.nullable().parse(result?.data?.atom || null)
  }

  protected mapVariables(request: GetAtomInput): GetAtomQueryVariables {
    return {
      id: request.atomId,
    }
  }
}
