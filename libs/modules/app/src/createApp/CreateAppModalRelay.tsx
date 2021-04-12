import { FormUniformsModal } from '@codelab/frontend/shared'
import React from 'react'
import { useRecoilState } from 'recoil'
import { AutoFields } from 'uniforms-antd'
import { appState } from '../state'
import { CreateAppFormRelay } from './CreateAppFormRelay'

export const CreateAppModalRelay = () => {
  const [state, setAppState] = useRecoilState(appState)
  const { loading, editingApp, modalVisible } = state

  return (
    <FormUniformsModal
      modalProps={{
        okText: 'Create App',
        okButtonProps: {
          loading,
        },
        visible: modalVisible && !editingApp,
        onCancel: () => setAppState({ ...state, modalVisible: false }),
      }}
      renderForm={() => (
        <CreateAppFormRelay
          onSubmitSuccess={() => {
            // Close the modal when the execution finishes
            setAppState({ ...state, modalVisible: false })
          }}
        >
          {/* Providing just the AutoFields hides the Submit button */}
          <AutoFields />
        </CreateAppFormRelay>
      )}
    />
  )
}
