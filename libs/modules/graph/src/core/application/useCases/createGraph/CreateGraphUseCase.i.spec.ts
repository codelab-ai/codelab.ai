import { INestApplication } from '@nestjs/common'
import { print } from 'graphql'
import request from 'supertest'
import { CreateGraphGql } from './CreateGraph.generated'
import { setupTestModule, teardownTestModule } from '@codelab/backend'
import { GraphModule } from '@codelab/modules/graph'

describe('CreateGraphUseCase', () => {
  let app: INestApplication

  beforeAll(async () => {
    app = await setupTestModule(app, GraphModule)
  })

  afterAll(async () => {
    await teardownTestModule(app)
  })

  it('should create graph with a label', async () => {
    const label = 'Graph 1'

    await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: print(CreateGraphGql),
        variables: {
          input: {
            label,
          },
        },
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.data.createGraph.label).toEqual(label)
        expect(res.body.data.createGraph.id).toBeDefined()
      })
  })
})
