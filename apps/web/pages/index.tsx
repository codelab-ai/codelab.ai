import { useActor } from '@xstate/react'
import React, { useContext } from 'react'
import {
  FormNode,
  Layout,
  MachineContext,
  Modal,
  ModalButton,
  NodeFormData,
  Table,
} from '@codelab/ui/component'
import { withSuspense } from '@codelab/ui/hoc'

const isServer = typeof window === 'undefined'

const TableNodeWithSuspense = withSuspense(() => (
  <NodeFormData>
    {(data) => {
      console.log(data)

      return (
        <Table
          data={data}
          // selectnode={() => null}
          // handleedit={() => null}
          // handledelete={() => null}
        />
      )
    }}
  </NodeFormData>
))

// Error: ReactDOMServer does not yet support Suspense.
// https://github.com/coinbase/rest-hooks/issues/172
const Index = (props: any) => {
  const { app, actors } = useContext(MachineContext)
  const [modalState] = useActor(actors.modal)
  const [layoutState] = useActor(actors.layout)

  // <>{!isServer ? <TableNodeWithSuspense /> : null}</>
  return (
    <>
      <Layout
        actor={actors.layout}
        content={
          <>
            <ModalButton actor={actors.modal} />
            <Modal actor={actors.modal}>
              <FormNode
                actor={actors.modal}
                handleSubmit={(values: object) => {
                  console.log(values)
                }}
              />
            </Modal>
            <p>Modal state: {JSON.stringify(modalState.value)}</p>
            <p>Modal context: {JSON.stringify(modalState.context)}</p>
            <p>Layout state: {JSON.stringify(layoutState.value)}</p>
            <p>Layout context: {JSON.stringify(layoutState.context)}</p>
          </>
        }
      />
    </>
  )
}

export default Index
