import React, { useContext } from 'react'
import { AppContext, ComponentItemType } from '@codelab/frontend/shared'
import { CytoscapeService } from '@codelab/frontend/cytoscape'
import { NodeRenderer } from '@codelab/frontend/builder'
import { RootAppGql, useAddPageElementMutation } from '@codelab/hasura'
import { ComponentDropHandler } from '@codelab/frontend/builder'
import { App__PageFragment } from '@codelab/hasura'

type GetPageLayoutProps = {
  page: App__PageFragment
}

export const PageRenderer = ({ page }: GetPageLayoutProps) => {
  const { pageId, appId } = useContext(AppContext)

  const [addPageElement] = useAddPageElementMutation({
    refetchQueries: [
      {
        query: RootAppGql,
        variables: {
          appId,
          pageId,
        },
      },
    ],
  })

  const cy = CytoscapeService.fromPage(page)
  const root = CytoscapeService.componentTree(cy)

  const handleDroppedComponent = ({ key, label }: ComponentItemType) => {
    addPageElement({
      variables: {
        input: {
          page_id: page.id,
          component_id: key,
          name: `${label}`,
        },
      },
    })
  }

  return (
    <>
      <ComponentDropHandler onDropped={handleDroppedComponent} root={root}>
        <NodeRenderer node={root} />
      </ComponentDropHandler>

      {/*<Button*/}
      {/*  icon={<PlusOutlined />}*/}
      {/*  type="primary"*/}
      {/*  onClick={() => {*/}
      {/*    if (!gridContainerId) {*/}
      {/*      return*/}
      {/*    }*/}

      {/*    addChildVertex({*/}
      {/*      refetchQueries: [*/}
      {/*        { query: GetPageGql, variables: { input: { pageId } } },*/}
      {/*      ],*/}
      {/*      variables: {*/}
      {/*        input: {*/}
      {/*          parentVertexId: gridContainerId,*/}
      {/*          vertex: {*/}
      {/*            type: AtomType.ReactRglItem,*/}
      {/*          },*/}
      {/*        },*/}
      {/*      },*/}
      {/*    })*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Add Grid*/}
      {/*</Button>*/}
      {/* <D3Graph {...makeD3(graph)} onNodeClick={onNodeClick} /> */}
    </>
  )
}