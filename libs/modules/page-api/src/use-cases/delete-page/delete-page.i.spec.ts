import { INestApplication } from '@nestjs/common';
import { ApiResponse, request, setupTestModule, teardownTestModule } from '@codelab/backend';
import { PageModule } from '@codelab/modules/page-api';
import { Auth0Service } from '@codelab/modules/auth-api';
import {
  __AppFragment,
  DeletePageMutationResult,
  DeletePageGql,
  PageBaseFragment,
  DeletePageMutation
} from '@codelab/codegen/graphql';
import { createPage } from '../create-page/create-page.i.spec';
import { print } from 'graphql';
import { ApolloQueryResult } from '@apollo/client';

describe('DeletePage', () => {
  let nestApplication: INestApplication
  let accessToken = ''
  let page: { app: __AppFragment, page: PageBaseFragment }

  beforeAll(async () => {
    nestApplication = await setupTestModule(nestApplication, PageModule)

    const auth0Service = nestApplication.get(Auth0Service)
    accessToken = await auth0Service.getAccessToken()
    page = await createPage(accessToken, nestApplication)
  })

  afterAll(async () => {
    await teardownTestModule(nestApplication)
  })

  it('should fail to delete page for guest', async () => {
    await request(nestApplication.getHttpServer())
      .send({
        query: print(DeletePageGql),
        variables: {
          input: {
            pageId: page.page.id,
          },
        },
      })
      .expect(200)
      .expect((res: ApiResponse<ApolloQueryResult<any>>) => {
        expect(res?.body?.errors).toMatchObject([{ message: 'Unauthorized' }])
      })
  })

  it('should delete page for authorized user', async () => {
    await request(nestApplication.getHttpServer())
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        query: print(DeletePageGql),
        variables: {
          input: {
            pageId: page.page.id,
          },
        },
      })
      .expect(200)
      .expect((res: ApiResponse<DeletePageMutationResult>) => {
        const deletePageResult = (res.body.data as DeletePageMutation)?.deletePage
        expect(deletePageResult).toMatchObject({
          id: page.page.id
        })
      })
  })

})
