import { DeleteOutlined } from '@ant-design/icons'
import { useBuilderSelectionState } from '@codelab/frontend/builder'
import {
  ActionType,
  CrudModal,
  EntityType,
  useCRUDModalForm,
} from '@codelab/frontend/shared'
import { useGetComponentElementQuery } from '@codelab/hasura'
import { Empty, Spin } from 'antd'
import React from 'react'
import { CreateLinkedComponentElementButton } from '../createLinked/CreateLinkedComponentElementButton'
import { CreateLinkedComponentElementForm } from '../createLinked/CreateLinkedComponentElementForm'
import { DeleteComponentElementButton } from '../deleteComponentElement/DeleteComponentElementButton'
import { DeleteComponentElementForm } from '../deleteComponentElement/DeleteComponentElementForm'
import { UpdateComponentElementForm } from '../updateComponentElement/UpdateComponentElementForm'

interface Props {
  componentElementId: string
}

export const PaneConfigComponentElement = ({ componentElementId }: Props) => {
  const { resetSelected } = useBuilderSelectionState()
  const { reset } = useCRUDModalForm(EntityType.ComponentElement)

  const { data, loading } = useGetComponentElementQuery({
    variables: {
      componentElementId,
    },
  })

  const element = data?.component_element_by_pk

  if (loading) {
    return <Spin />
  }

  if (element) {
    return (
      <>
        <UpdateComponentElementForm
          key={componentElementId}
          componentElement={element}
        />

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <CreateLinkedComponentElementButton>
            Insert child element
          </CreateLinkedComponentElementButton>
          <DeleteComponentElementButton
            componentElementId={element.id}
            icon={<DeleteOutlined />}
            danger={true}
          />
        </div>

        <CrudModal
          modalProps={{
            className: 'create-linked-component-element-modal',
          }}
          entityType={EntityType.LinkedComponentElement}
          actionType={ActionType.Create}
          okText="Create"
          renderForm={() => (
            <CreateLinkedComponentElementForm
              sourceComponentElementId={componentElementId}
            />
          )}
        />

        <CrudModal
          modalProps={{
            className: 'delete-component-element-modal',
          }}
          entityType={EntityType.ComponentElement}
          actionType={ActionType.Delete}
          okText="Delete"
          renderForm={() => (
            <DeleteComponentElementForm
              onSubmitSuccess={() => {
                resetSelected()
                reset()
              }}
            />
          )}
        />
      </>
    )
  }

  return <Empty />
}