import { DynamicModule, Global, Logger, Module } from '@nestjs/common'
import { ConfigFactory, ConfigModule } from '@nestjs/config'
import { apolloClientProvider } from './apollo-client.provider'
import { ApolloClientConfig } from './config/apollo-client.config'
import { ApolloClientTokens } from './config/apollo-client.tokens'

// @Global()
@Module({})
export class ApolloClientModule {
  static register(config: ConfigFactory<ApolloClientConfig>): DynamicModule {
    Logger.log(
      `${ApolloClientTokens.ApolloClientConfig.toString()} \n${JSON.stringify(
        config(),
        null,
        '  ',
      )}`,
    )

    return {
      global: true,
      imports: [ConfigModule.forFeature(config)],
      module: ApolloClientModule,
      providers: [apolloClientProvider(config)],
      exports: [ApolloClientTokens.ApolloClientProvider],
    }
  }
}
