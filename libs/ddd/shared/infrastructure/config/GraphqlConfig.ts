import { IncomingMessage } from 'http'
import { Injectable } from '@nestjs/common'
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql'
import { GraphQLRequest } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
import { GraphQLError, GraphQLSchema } from 'graphql'
import {
  introspectSchema,
  makeRemoteExecutableSchema,
  mergeSchemas,
} from 'graphql-tools'
import nodeFetch from 'node-fetch'
import { HasuraConfig } from './HasuraConfig'

export interface IGraphqlContext {
  req: IncomingMessage
}

export interface IPrevContext {
  graphqlContext: IGraphqlContext
}

@Injectable()
export class GraphqlConfig implements GqlOptionsFactory {
  async createGqlOptions(): Promise<GqlModuleOptions> {
    let remoteExecutableSchema: any = null

    try {
      remoteExecutableSchema = await this.createRemoteSchema()
    } catch (e) {
      console.log(e)
    }

    return {
      autoSchemaFile: true,
      installSubscriptionHandlers: false,
      transformSchema: async (schema: GraphQLSchema) => {
        return mergeSchemas({
          schemas: [schema, remoteExecutableSchema],
        })
      },
      transformAutoSchemaFile: true,
      path: '/graphql',
      debug: true,
      tracing: true,
      playground: true,
      context: ({ req }) => ({ req }),
      formatError: (err: GraphQLError) => {
        // Don't give the specific errors to the client.
        // const a = err;
        // if (err.message.startsWith("Nothing was")) {
        //
        // }
        // return new Error('Internal server error');
        // Otherwise return the original error.  The error can also
        // be manipulated in other ways, so long as it's returned.
        return err
      },
    }
  }

  /**
   * https://hasura.io/blog/hasura-authentication-explained/
   * (1) Admin secret - access to all resources
   * (2) JWT
   * (3) Webhook
   * (4) Unauthenticated
   */
  private async createRemoteSchema(): Promise<GraphQLSchema> {
    try {
      const httpLink = new HttpLink({
        uri: HasuraConfig.HASURA_GRAPHQL_URI,
        fetch: nodeFetch as any,
      })

      /**
       * HttpLink with Hasura admin secret set, allows access to all hasura resources.
       *
       * We only use this for server-to-server access in order to build remote schema
       */
      const adminAccessLink = setContext(() => ({
        headers: {
          'x-hasura-admin-secret': HasuraConfig.HASURA_GRAPHQL_ADMIN_SECRET,
        },
      })).concat(httpLink)

      /**
       *  This will trigger every time there is a graphql request through this server to hasura
       *
       * we will use it to pass JWT to Hasura
       *
       * Issue with `setContext`
       *
       * https://github.com/apollographql/apollo-link/issues/630
       */
      const jwtAccessLink = setContext(
        (_request: GraphQLRequest, prevContext: IPrevContext) => {
          const { authorization } = prevContext?.graphqlContext?.req?.headers

          return {
            ...prevContext,
            headers: authorization
              ? {
                  Authorization: authorization,
                }
              : {},
          }
        },
      ).concat(httpLink)

      // First we get the schema using our hasura admin key
      const remoteIntrospectedSchema = await this.getHasuraSchema(
        adminAccessLink as HttpLink,
      )

      /**
       * Need to be using graphql-tools@4 for stitching
       * But here we pass our JWT token to execute the queries that are
       * forwarded to Hasura through our server
       */
      const remoteExecutableSchema = makeRemoteExecutableSchema({
        schema: remoteIntrospectedSchema,
        link: jwtAccessLink,
      })

      return Promise.resolve(remoteExecutableSchema)
    } catch (err) {
      console.log(err)

      return Promise.reject(err)
    }
  }

  private async getHasuraSchema(link: HttpLink): Promise<GraphQLSchema> {
    return introspectSchema(link)
  }
}