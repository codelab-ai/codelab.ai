import {
  refetchGetComponentDetailQuery,
  useCreateComponentLinkMutation,
} from '@codelab/codegen/hasura'
import {
  ComponentContext,
  EntityType,
  UniFormUseCaseProps,
  useCrudModalForm,
} from '@codelab/frontend/shared'
import React, { useContext, useEffect } from 'react'
import { DeepPartial } from 'uniforms'
import { CreateComponentElementFormBase } from '../createComponentElement/CreateComponentElementFormBase'
import { CreateComponentElementInput } from '../createComponentElement/createComponentElementSchema'

type CreateLinkedComponentElementFormProps =
  UniFormUseCaseProps<CreateComponentElementInput> & {
    sourceComponentElementId: string
  }

/**
 * Same as CreateComponentElementForm, but links the new element to an existing source element
 */
export const CreateComponentLinkForm = ({
  sourceComponentElementId,
  ...props
}: CreateLinkedComponentElementFormProps) => {
  const { reset, setLoading } = useCrudModalForm(EntityType.ComponentElement)
  const { component } = useContext(ComponentContext)

  const [mutate, { loading: creating }] = useCreateComponentLinkMutation({
    awaitRefetchQueries: true,
    refetchQueries: [refetchGetComponentDetailQuery()],
  })

  useEffect(() => {
    setLoading(creating)
  }, [creating, setLoading])

  const onSubmit = (submitData: DeepPartial<CreateComponentElementInput>) => {
    return mutate({
      variables: {
        input: {
          component_id: component.id,
          source_component_element_id: sourceComponentElementId,
          targetElement: {
            data: {
              component_id: component.id,
              ...submitData,
            },
          },
        },
      },
    })
  }

  return (
    <CreateComponentElementFormBase
      onSubmit={onSubmit}
      onSubmitSuccess={() => reset()}
      {...props}
    />
  )
}
