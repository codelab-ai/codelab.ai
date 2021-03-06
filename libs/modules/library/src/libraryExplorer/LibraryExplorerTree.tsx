import { BookOutlined, DeploymentUnitOutlined } from '@ant-design/icons'
import {
  LibraryExplorer__AtomFragment,
  LibraryExplorer__ComponentFragment,
} from '@codelab/codegen/dgraph'
import { useComponentBuilder } from '@codelab/frontend/builder'
import { CheckedKeys, LibraryContext, PageType } from '@codelab/frontend/shared'
import {
  CreateAtomButtonIcon,
  CreateAtomModal,
  DeleteAtomButton,
  DeleteAtomsModal,
  UpdateAtomButton,
  UpdateAtomModal,
} from '@codelab/modules/atom'
import {
  CreateComponentButton,
  CreateComponentModal,
  DeleteComponentButton,
  DeleteComponentsModal,
  UpdateComponentButton,
  UpdateComponentModal,
} from '@codelab/modules/component'
import { Divider, Space, Tree } from 'antd'
import { DataNode } from 'antd/lib/tree'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import tw from 'twin.macro'

export const LibraryExplorerTree = () => {
  const { libraries } = useContext(LibraryContext)
  // const [
  //   loadComponent,
  //   { called, loading, data },
  // ] = useGetComponentDetailLazyQuery()
  const { setSelectedComponentId, selectedComponentId } = useComponentBuilder()
  // useEffect(() => {
  //   if (data?.component_by_pk) {
  //     setSelected(data?.component_by_pk)
  //   }
  // }, [data])
  const [checkedAtomIds, setCheckedAtomIds] = useState<Array<string>>([])
  const [selectedAtomId, setSelectedAtomId] = useState<string>()
  // const [selectedComponentId, setSelectedComponentId] = useState<string>()

  const [checkedComponentIds, setCheckedComponentIds] = useState<Array<string>>(
    [],
  )

  const atomTreeData: Array<DataNode> = (libraries ?? []).map((library) => {
    return {
      title: `${library.name}`,
      key: library.id,
      icon: <BookOutlined />,
      selectable: false,
      checkable: false,
      children: library?.atoms
        ?.filter((atom): atom is LibraryExplorer__AtomFragment => !!atom)
        .map((atom) => {
          return {
            title: atom?.type,
            key: atom.id,
            icon: <DeploymentUnitOutlined />,
          }
        }),
    }
  })

  const componentTreeData: Array<DataNode> = (libraries ?? []).map(
    (library) => {
      return {
        title: `${library.name}`,
        key: library.id,
        icon: <BookOutlined />,
        selectable: false,
        checkable: false,
        children: library?.components
          ?.filter(
            (component): component is LibraryExplorer__ComponentFragment =>
              !!component,
          )
          .map((component) => {
            return {
              title: component.label,
              key: component.id,
              icon: <DeploymentUnitOutlined />,
            }
          }),
      }
    },
  )

  return (
    <>
      <Space css={tw`w-full justify-between`} align="center">
        <h3>
          <Link href={{ pathname: PageType.AtomList }}>Atoms</Link>
        </h3>
        <Space align="center">
          <CreateAtomButtonIcon />
          <UpdateAtomButton id={selectedAtomId} disabled={!selectedAtomId} />
          <DeleteAtomButton
            disabled={checkedAtomIds?.length === 0}
            ids={checkedAtomIds}
          />
        </Space>
      </Space>
      <CreateAtomModal />
      <UpdateAtomModal />
      <DeleteAtomsModal />
      <Tree
        draggable
        showIcon
        checkable
        checkStrictly
        selectable
        defaultExpandAll
        defaultExpandedKeys={[]}
        autoExpandParent
        treeData={atomTreeData}
        className="draggable-tree"
        onCheck={(checkedKeys, e) => {
          const { checked: _checkedAtomIds, halfChecked } =
            checkedKeys as CheckedKeys

          setCheckedAtomIds([..._checkedAtomIds.map((id) => id.toString())])
        }}
        onSelect={([selectedKey], e) => {
          setSelectedAtomId(selectedKey?.toString())
        }}
      />

      <Divider />
      <Space css={tw`w-full justify-between`} align="center">
        <h3 css={tw`m-0`}>
          <Link href={{}}>Components</Link>
        </h3>
        <Space align="center">
          <CreateComponentButton />
          <UpdateComponentButton
            id={selectedComponentId}
            disabled={!selectedComponentId}
          />
          <DeleteComponentButton
            disabled={checkedComponentIds?.length === 0}
            ids={checkedComponentIds}
          />
        </Space>
      </Space>
      <CreateComponentModal />
      <UpdateComponentModal />
      <DeleteComponentsModal />
      <Tree
        onSelect={([checkedKey], e) => {
          const _selectedComponentId = checkedKey?.toString()

          setSelectedComponentId(_selectedComponentId)
        }}
        onCheck={(checkedKeys, e) => {
          const { checked: _checkedComponentIds, halfChecked } =
            checkedKeys as CheckedKeys

          setCheckedComponentIds([
            ..._checkedComponentIds?.map((id) => id.toString()),
          ])
        }}
        draggable
        showIcon
        checkable
        checkStrictly
        selectable
        defaultExpandAll
        defaultExpandedKeys={[]}
        autoExpandParent
        treeData={componentTreeData}
        className="draggable-tree"
      />
    </>
  )
}
