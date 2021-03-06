import {
  DynamicModule,
  ForwardReference,
  INestApplication,
  Type,
} from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { InfrastructureModule } from '../infrastructure'
import { DgraphProvider, DgraphTokens } from '../infrastructure/dgraph'

type NestModule =
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference

export const setupTestModule = async (
  app: INestApplication,
  ...nestModules: Array<NestModule>
): Promise<INestApplication> => {
  const testModule = await Test.createTestingModule({
    imports: [InfrastructureModule, ...nestModules],
  }).compile()

  app = testModule.createNestApplication()
  await app.init()

  await getDgraphProviderFromTestModule(app).resetDb()

  return app
}

export const getDgraphProviderFromTestModule = (app: INestApplication) => {
  return app.get<DgraphProvider>(DgraphTokens.DgraphProvider)
}

export const teardownTestModule = async (app: INestApplication) => {
  await app.close()
}
