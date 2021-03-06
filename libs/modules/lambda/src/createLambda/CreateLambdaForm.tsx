import {
  refetchGetLambdasByLibraryIdQuery,
  useCreateLambdaMutation,
} from '@codelab/codegen/hasura'
import {
  createNotificationHandler,
  FormUniforms,
  UniFormUseCaseProps,
} from '@codelab/frontend/shared'
import { useSelectedLibrary } from '@codelab/modules/library'
import React from 'react'
import { DeepPartial } from 'uniforms'
import { CreateLambdaInput, createLambdaSchema } from './createLambdaSchema'

export const CreateLambdaForm = (props: UniFormUseCaseProps<any>) => {
  const { library } = useSelectedLibrary()

  const [mutate] = useCreateLambdaMutation({
    refetchQueries: [
      refetchGetLambdasByLibraryIdQuery({
        libraryId: library?.id ?? '',
      }),
    ],
  })

  const onSubmit = (submitData: DeepPartial<CreateLambdaInput>) => {
    return mutate({
      variables: {
        input: {
          name: submitData.name as string,
          body: submitData.body as string,
          libraryId: library?.id,
        },
      },
    })
  }

  return (
    <FormUniforms<CreateLambdaInput>
      onSubmit={onSubmit}
      schema={createLambdaSchema}
      onSubmitError={createNotificationHandler({
        title: 'Error while creating lambda',
      })}
      {...props}
    />
  )
}
