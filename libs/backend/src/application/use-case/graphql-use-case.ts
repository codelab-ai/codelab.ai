import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import {
  MutationOptions,
  QueryOptions,
} from '@apollo/client/core/watchQueryOptions'
import { FetchResult } from '@apollo/client/link/core'
import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { Inject, Injectable } from '@nestjs/common'
import { DocumentNode } from 'graphql'
import { ApolloClientTokens } from '../../infrastructure'
import { UseCase } from '../index'

@Injectable()
export abstract class GraphqlUseCase<
  TUseCaseRequestPort,
  TUseCaseDtoResponse,
  TOperation,
  TOperationVariables,
  IsMutation extends boolean,
  TValidationContext = Record<string, unknown>,
> implements UseCase<TUseCaseRequestPort, TUseCaseDtoResponse>
{
  constructor(
    @Inject(ApolloClientTokens.ApolloClientProvider)
    protected apolloClient: ApolloClient<NormalizedCacheObject>,
  ) {}

  async execute(request: TUseCaseRequestPort): Promise<TUseCaseDtoResponse> {
    const validationContext = await this.validate(request)
    const variables = await this.mapVariables(request, validationContext)
    const options = this.getOptions(request, validationContext) || {}
    let result: FetchResult<TOperation>

    if (this.isMutation()) {
      result = await this.apolloClient.mutate<TOperation, TOperationVariables>({
        mutation: this.getGql(),
        variables,
        ...options,
      })
    } else {
      result = await this.apolloClient.query<TOperation, TOperationVariables>({
        query: this.getGql(),
        variables,
        ...options,
      })
    }

    return this.extractDataFromResult(result, validationContext, request)
  }

  protected abstract isMutation(): IsMutation

  protected abstract getGql():
    | DocumentNode
    | TypedDocumentNode<TOperation, TOperationVariables>

  protected getOptions(
    request: TUseCaseRequestPort,
    validationContext: TValidationContext,
  ):
    | (IsMutation extends true
        ? Omit<
            QueryOptions<TOperationVariables, TOperation>,
            'query' | 'variables'
          >
        : Omit<
            MutationOptions<TOperation, TOperationVariables>,
            'mutation' | 'variables'
          >)
    | undefined {
    return undefined
  }

  protected abstract mapVariables(
    request: TUseCaseRequestPort,
    validationContext: TValidationContext,
  ): TOperationVariables | Promise<TOperationVariables>

  protected abstract extractDataFromResult(
    result: FetchResult<TOperation>,
    validationContext: TValidationContext,
    request: TUseCaseRequestPort,
  ): TUseCaseDtoResponse | Promise<TUseCaseDtoResponse>

  protected async validate(
    request: TUseCaseRequestPort,
  ): Promise<TValidationContext> {
    return {} as TValidationContext
  }
}
