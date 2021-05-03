import { useBuilderSelectionState } from '@codelab/frontend/builder'
import { CytoscapeService } from '@codelab/frontend/cytoscape'
import { MainPaneTemplate } from '@codelab/frontend/layout'
import {
  ActionType,
  AppContext,
  AtomType,
  CrudModal,
  EntityType,
  NodeBase,
} from '@codelab/frontend/shared'
import { Empty, Tree } from 'antd'
import { DataNode } from 'antd/lib/tree'
import React, { useContext } from 'react'
import {
  CreatePageElementButton,
  CreatePageElementForm,
} from '../pageElement/createPageElement'

export const PaneMainTree = () => {
  const { setSelected, setHovering, resetHovering } = useBuilderSelectionState()
  const { page } = useContext(AppContext)
  let data: DataNode | undefined

  if (page && page.elements && page.elements.length) {
    const cy = CytoscapeService.fromPage(page)
    data = CytoscapeService.antdTree(cy)
  }

  const onDrop = ({ dragNode, node: targetNode }: any) => {
    // Disable drag
    if (dragNode.type !== AtomType.ReactRglItem) {
      console.log(dragNode.id, targetNode.id)
    }
  }

  return (
    <MainPaneTemplate title="Tree" header={<CreatePageElementButton key={1} />}>
      {data ? (
        <Tree
          className="draggable-tree"
          // defaultExpandedKeys={this.state.expandedKeys}
          blockNode
          onMouseEnter={({ node }) => {
            setHovering(((node as any) as NodeBase).id)
          }}
          onMouseLeave={() => {
            resetHovering()
          }}
          onSelect={([id], { node }) => {
            setSelected(((node as any) as NodeBase).id)
          }}
          titleRender={(node) => {
            const label = (node as any).label

            return <>{label}</>
          }}
          onDrop={onDrop}
          treeData={[data]}
        />
      ) : (
        <Empty />
      )}

      <CrudModal
        entityType={EntityType.PageElement}
        actionType={ActionType.Create}
        okText={'Create'}
        renderForm={() => <CreatePageElementForm />}
      />
    </MainPaneTemplate>
  )
}
