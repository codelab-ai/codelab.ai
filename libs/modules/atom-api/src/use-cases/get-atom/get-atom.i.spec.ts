import { ApolloQueryResult } from '@apollo/client'
import {
  ApiResponse,
  Auth0Service,
  request,
  setupTestModule,
  teardownTestModule,
} from '@codelab/backend'
import { GetAtomGql, GetAtomQueryResult } from '@codelab/codegen/graphql'
import { INestApplication } from '@nestjs/common'
import { print } from 'graphql'
import { AtomModule } from '../../atom.module'
import { createAtom } from '../create-atom/create-atom.i.spec'

describe('GetAtom', () => {
  let app: INestApplication
  let accessToken = ''
  let atom: any

  beforeAll(async () => {
    app = await setupTestModule(app, AtomModule)

    const auth0Service = app.get(Auth0Service)
    accessToken = await auth0Service.getAccessToken()
    atom = await createAtom(accessToken, app)
  })

  afterAll(async () => {
    await teardownTestModule(app)
  })

  it('should not get atom for a guest', async () => {
    await request(app.getHttpServer())
      .send({
        query: print(GetAtomGql),
        variables: {
          input: {
            atomId: atom.id,
          },
        },
      })

      .expect(200)
      .expect((res: ApiResponse<ApolloQueryResult<any>>) => {
        expect(res?.body?.errors).toMatchObject([{ message: 'Unauthorized' }])
      })
  })

  it('should get atom for authorized user', async () => {
    await request(app.getHttpServer())
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        query: print(GetAtomGql),
        variables: {
          input: {
            atomId: atom.id,
          },
        },
      })
      .expect(200)
      .expect((res: ApiResponse<GetAtomQueryResult>) => {
        const responseAtom = res.body.data?.atom

        expect(responseAtom).toMatchObject({
          id: atom.id,
          label: 'Button (Ant Design)',
          type: 'AntDesignButton',
        })

        expect(responseAtom?.propTypes).toBeTruthy()
        expect(responseAtom?.propTypes.name).toBeTruthy()
        expect(responseAtom?.propTypes.id).toBeTruthy()
      })
  })
})
