// Returns any type because no props are required
import {
  makeTree,
  Node,
  traversePostOrder,
  TreeNodeI,
  ReactNodeI,
} from '@codelab/graph'
import { evalPropsWithContext, Props } from '@codelab/props'
import React, { FunctionComponent, PropsWithChildren } from 'react'
import { elementParameterFactory } from './ElementFactory'
import { ElementParameters } from './ElementFactory.interface'
// eslint-disable-next-line import/no-cycle
import { produceReactNodeProps } from '../props/Props-node'

export class TreeDom {
  static render<P extends Props>(
    data: TreeNodeI<P> | ReactNodeI<P>,
    factory: (
      node: Node<P>,
    ) => ElementParameters<any> = elementParameterFactory,
  ): FunctionComponent<any> {
    let hasRootChildren = false
    const root = makeTree(data)

    /**
     * (1) ctx is passed to props
     *
     * (2) RenderProps are passed down
     */
    const buildComponent = (node: Node<P>) => {
      const [Type, props] = factory(node)
      const reactNodeProps = produceReactNodeProps(props)

      /**
       * internalProps is generally AntD internal like Menu to Menu.Item
       */
      /* eslint-disable no-param-reassign */
      node.Component = ({
        children,
        ...internalProps
      }: PropsWithChildren<P>) => {
        // console.debug(
        //   'Component rendered:',
        //   node.type,
        //   node.hasChildren() || hasRootChildren,
        // )

        return node.hasChildren() || hasRootChildren ? (
          <Type {...internalProps} {...reactNodeProps}>
            {children}
          </Type>
        ) : (
          <Type {...internalProps} {...reactNodeProps} />
        )
      }

      if (node.type === 'Select.Option') {
        ;(node.Component as any).isSelectOption = true
      }
    }

    traversePostOrder<P>(root, buildComponent)

    return ({ children: rootChildren }: PropsWithChildren<P>) => {
      if (rootChildren) {
        hasRootChildren = true
      }

      return (
        <root.Component {...evalPropsWithContext(root.props)}>
          {root.Children(rootChildren)}
        </root.Component>
      )
    }
  }
}
