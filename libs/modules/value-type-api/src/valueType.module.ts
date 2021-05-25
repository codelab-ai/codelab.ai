import { ApolloClientModule, AuthModule, DGraphModule } from '@codelab/backend'
import { Module } from '@nestjs/common'
import { GetValueTypesService } from './use-cases'
import { ValueTypeResolver } from './valueType.resolver'

@Module({
  imports: [DGraphModule, AuthModule, ApolloClientModule],
  providers: [GetValueTypesService, ValueTypeResolver],
  exports: [],
})
export class ValueTypeModule {}
