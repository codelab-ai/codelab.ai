import { FileOutlined } from '@ant-design/icons'
import { useGetPagesQuery } from '@codelab/codegen/graphql'
import {
  AppContext,
  EntityType,
  ListItemDeleteButton,
  ListItemSettingsButton,
  PageType,
  useCrudModalForm,
} from '@codelab/frontend/shared'
import { List, Space, Spin } from 'antd'
import Link from 'next/link'
import React, { useContext } from 'react'

export const GetPagesList = () => {
  const { app } = useContext(AppContext)
  const { openDeleteModal, openUpdateModal } = useCrudModalForm(EntityType.Page)

  const { data, loading } = useGetPagesQuery({
    variables: {
      input: { appId: app.id },
    },
  })

  const pages = data?.pages

  return loading ? (
    <Spin />
  ) : (
    <>
      <List
        size="small"
        dataSource={pages}
        renderItem={(page) => (
          <List.Item style={{ paddingLeft: 0 }}>
            <Space style={{ width: '100%' }}>
              <FileOutlined />
              <Link
                href={{
                  pathname: PageType.PageDetail,
                  query: { appId: app.id, pageId: page.id },
                }}
              >
                <a>{page.name}</a>
              </Link>
            </Space>
            <Space>
              <ListItemSettingsButton
                onClick={() => openUpdateModal(page.id)}
              />
              <ListItemDeleteButton
                onClick={() => openDeleteModal([page.id])}
              />
            </Space>
          </List.Item>
        )}
      />
    </>
  )
}
