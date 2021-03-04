import { Layout } from 'antd'
import React from 'react'
import { HomeMenuHeader } from './Home-menu--header'
import { contentStyle } from '@codelab/frontend'

const { Content, Header, Footer } = Layout

export const HomeLayout: React.FunctionComponent<any> = ({ children }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Layout>
        <Header>
          <HomeMenuHeader />
        </Header>
        <Content style={contentStyle}>{children}</Content>
        <Footer>
          <span>Codelab.ai ©2020</span>
        </Footer>
      </Layout>
    </Layout>
  )
}