import React from 'react'
import { useRecoilState } from 'recoil'
import { UpdateLambdaForm } from './UpdateLambdaForm'
import { updateLambdaState } from './UpdateLambdaState'
import { ModalForm } from '@codelab/frontend/shared'
import { useGetLambdaByIdQuery } from '@codelab/hasura'
import { AutoFields } from 'uniforms-antd'
import { Lambda } from '@codelab/hasura'

export const UpdateLambdaModal = () => {
  const [updateLambda, setUpdateLambda] = useRecoilState(updateLambdaState)

  const { data, loading } = useGetLambdaByIdQuery({
    variables: {
      id: updateLambda.lambdaId,
    },
  })

  return (
    <ModalForm
      modalProps={{
        visible: updateLambda.visible,
        onCancel: () =>
          setUpdateLambda({
            visible: false,
            lambdaId: updateLambda.lambdaId,
            name: updateLambda.name,
            body: updateLambda.body,
          }),
      }}
      renderForm={() => (
        <UpdateLambdaForm
          lambda={data?.lambda[0] as Lambda}
          onSubmitSuccess={() =>
            setUpdateLambda({
              visible: false,
              lambdaId: updateLambda.lambdaId,
              name: updateLambda.name,
              body: updateLambda.body,
            })
          }
        >
          <AutoFields />
        </UpdateLambdaForm>
      )}
    />
  )
}
