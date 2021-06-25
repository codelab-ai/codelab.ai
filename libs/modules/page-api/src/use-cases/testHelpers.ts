import { INestApplication } from '@nestjs/common';
import { __AppFragment, CreateAppGql, CreateAppMutation, CreateAppMutationVariables } from '@codelab/codegen/graphql';
import { request } from '@codelab/backend';
import { print } from 'graphql';

export const createApp = async (accessToken: string,
                                app: INestApplication,) => {
  const variables: CreateAppMutationVariables = {
    input: {
      name: 'Test App'
    }
  }

  const r: __AppFragment = await request(app.getHttpServer())
    .set('Authorization', `Bearer ${accessToken}`)
    .send({
      query: print(CreateAppGql),
      variables,
    })
    .expect(200)
    .then((res: any) => (res.body.data as CreateAppMutation)?.createApp)

  return r
}
