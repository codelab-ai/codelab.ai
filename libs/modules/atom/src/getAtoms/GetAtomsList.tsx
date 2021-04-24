import { List, Space } from 'antd'
import React from 'react'
import { useGetAtomsListQuery } from '@codelab/hasura'
import { DeleteOutlined, SettingOutlined } from '@ant-design/icons'
import { EntityType, useCRUDModalForm } from '@codelab/frontend/shared'

export const GetAtomsList = () => {
  const { data } = useGetAtomsListQuery({})
  const { openDeleteModal, openUpdateModal } = useCRUDModalForm(EntityType.Atom)

  return (
    <List
      size="small"
      dataSource={data?.atom}
      renderItem={(atom: any) => (
        <List.Item onMouseOver={() => null} style={{ paddingLeft: 0 }}>
          <div
            data-test-id="get-atoms-list-item"
            data-test-atom-type={atom.type}
          >
            <Space style={{ width: '100%' }}>{atom.type}</Space>
            <Space>
              <SettingOutlined
                data-test-id="atom-update-button"
                onClick={() => openUpdateModal(atom.id)}
              />
              <DeleteOutlined
                data-test-id="atom-delete-button"
                onClick={() => openDeleteModal(atom.id)}
              />
            </Space>
          </div>
        </List.Item>
      )}
    />
  )
}
