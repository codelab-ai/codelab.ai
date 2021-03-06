import { ActionType, CrudModal, EntityType } from '@codelab/frontend/shared'
import React from 'react'
import { CreatePageForm } from './CreatePageForm'

export const CreatePageModal = () => {
  return (
    <CrudModal
      entityType={EntityType.Page}
      actionType={ActionType.Create}
      okText="Create Page"
      renderForm={() => <CreatePageForm />}
    />
  )
}
