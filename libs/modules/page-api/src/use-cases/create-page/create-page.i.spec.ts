import { INestApplication } from '@nestjs/common';
import { ApiResponse, request, setupTestModule, teardownTestModule } from '@codelab/backend';
import { Auth0Service } from '@codelab/modules/auth-api';
import { PageModule } from '../../page.module';
import { print } from 'graphql';
import {
  __AppFragment,
  CreatePageGql,
  CreatePageMutation,
  CreatePageMutationVariables,
  PageBaseFragment
} from '@codelab/codegen/graphql';
import { ApolloQueryResult } from '@apollo/client';
import { createApp } from '../testHelpers';

export const createPage = async (accessToken: string,
                                 nestApplication: INestApplication): Promise<{ app: __AppFragment, page: PageBaseFragment }> => {
  const app: __AppFragment = await createApp(accessToken, nestApplication)
  const variables: CreatePageMutationVariables  = {
    input: {
      appId: app.id,
      name: 'Test Page'
    }
  }

  const page = await request(nestApplication.getHttpServer())
    .set('Authorization', `Bearer ${accessToken}`)
    .send({
      query: print(CreatePageGql),
      variables
    })
    .expect(200)
    .then((res) => (res.body.data as CreatePageMutation)?.createPage)

  return {
    app, page
  }
}

describe('CreatePage', () => {
  let nestApplication: INestApplication
  let accessToken = ''
  let app: any

  beforeAll(async () => {
    nestApplication = await setupTestModule(nestApplication, PageModule)

    const auth0Service = nestApplication.get(Auth0Service)
    accessToken = await auth0Service.getAccessToken()
    app = await createApp(accessToken, nestApplication)
  })

  afterAll(async () => {
    await teardownTestModule(nestApplication)
  })

  it('should fail to create page for guest', async () => {
    const variables: CreatePageMutationVariables = {
      input: {
        appId: app.id,
        name: 'Test Page'
      }
    }
    await request(nestApplication.getHttpServer())
      .send({
        query: print(CreatePageGql),
        variables
      })
      .expect(200)
      .expect((res: ApiResponse<ApolloQueryResult<any>>) => {
        expect(res?.body?.errors).toMatchObject([{ message: 'Unauthorized' }])
      })
  })

  it('should create page for authorized user', async () => {
    const result: { app: __AppFragment, page: PageBaseFragment } = await createPage(accessToken, nestApplication)
    expect(result.page.id).toBeDefined()
    expect(result.page.name).toEqual('Test Page')
    expect(result.page.app).toMatchObject(result.app)
  })
})
