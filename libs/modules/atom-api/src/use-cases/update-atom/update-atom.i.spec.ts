import { ApolloQueryResult } from '@apollo/client'
import {
  ApiResponse,
  Auth0Service,
  request,
  setupTestModule,
  teardownTestModule,
} from '@codelab/backend'
import {
  AtomType,
  UpdateAtomGql,
  UpdateAtomMutationResult,
} from '@codelab/codegen/graphql'
import { INestApplication } from '@nestjs/common'
import { print } from 'graphql'
import { AtomModule } from '../../atom.module'
import { createAtom } from '../create-atom/create-atom.i.spec'

describe('UpdateAtom', () => {
  let app: INestApplication
  let accessToken = ''
  let atom: any
  let updateVariables: any

  beforeAll(async () => {
    app = await setupTestModule(app, AtomModule)

    const auth0Service = app.get(Auth0Service)
    accessToken = await auth0Service.getAccessToken()
    atom = await createAtom(accessToken, app)
    updateVariables = {
      input: {
        id: atom.id,
        data: {
          label: 'Button updated (Ant Design)',
          type: AtomType.AntDesignButton,
        },
      },
    }
  })

  afterAll(async () => {
    await teardownTestModule(app)
  })

  it('should not update atom for a guest', async () => {
    await request(app.getHttpServer())
      .send({
        query: print(UpdateAtomGql),
        variables: updateVariables,
      })
      .expect(200)
      .expect((res: ApiResponse<ApolloQueryResult<any>>) => {
        expect(res?.body?.errors).toMatchObject([{ message: 'Unauthorized' }])
      })
  })

  it('should update atom for authorized user', async () => {
    await request(app.getHttpServer())
      .set('Authorization', `Bearer ${accessToken}`)
      .send({
        query: print(UpdateAtomGql),
        variables: updateVariables,
      })
      .expect(200)
      .expect((res: ApiResponse<UpdateAtomMutationResult>) => {
        expect(res.body.data?.atom).toMatchObject({
          id: atom.id,
          label: 'Button updated (Ant Design)',
          type: AtomType.AntDesignButton,
        })
      })
  })
})
