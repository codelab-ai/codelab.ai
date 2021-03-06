import { registerAs } from '@nestjs/config'
import { get } from 'env-var'
import path from 'path'
import { DgraphTokens } from './dgraph.tokens'

export interface DgraphConfig {
  grpcEndpoint: string
  endpoint: string
  apiKey?: string
  /**
   * This is the user maintained schema file
   */
  schemaFile: string
  /**
   * This is generated by appending api enums to the `schemaFile` above
   */
  schemaGeneratedFile: string
  graphqlEndpoint: string
}

export const dgraphConfig = registerAs<() => DgraphConfig>(
  DgraphTokens.DgraphConfig.toString(),
  () => ({
    // This is the hand written Dgraph schema file, we use this file as the source to generate a new schema file
    schemaFile: path.resolve(process.cwd(), 'dgraph/schema.graphql'),
    // This is the generated schema file with Nest.js GrapphQL server enums appended, this is the acutal file used to update Dgraph
    schemaGeneratedFile: path.resolve(
      process.cwd(),
      'dgraph/schema.generated.graphql',
    ),
    grpcEndpoint: get('CODELAB_DGRAPH_GRPC_ENDPOINT').required().asString(),
    endpoint: get('CODELAB_DGRAPH_ENDPOINT').required().asUrlString(),
    graphqlEndpoint: get('CODELAB_DGRAPH_GRAPHQL_ENDPOINT')
      .required()
      .asUrlString(),
    apiKey: get('CODELAB_DGRAPH_API_KEY').asString(),
  }),
)
