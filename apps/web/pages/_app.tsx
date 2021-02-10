import '../src/wdyr'
import { ApolloProvider } from '@apollo/client'
import { css } from '@emotion/react'
import { AppProps } from 'next/app'
import { WithRouterProps } from 'next/dist/client/with-router'
import React from 'react'
import { DndProvider as DndMultiProvider } from 'react-dnd-multi-backend'
import HTML5toTouch from 'react-dnd-multi-backend/dist/cjs/HTML5toTouch'
import { RecoilRoot } from 'recoil'
import { LayoutFactory } from '../src/layout/Layout'
import { LoginUserModal, RegisterUserModal } from '../src/useCases/user'
import { Page, useApollo } from '@codelab/frontend'
import './App.scss'

require('highlight.js/styles/monokai-sublime.css')
require('antd/dist/antd.css')
require('react-grid-layout/css/styles.css')
require('react-resizable/css/styles.css')

const App: React.FunctionComponent<WithRouterProps> = ({
  children,
  router,
}) => {
  return (
    <>
      <RegisterUserModal />
      <LoginUserModal />
      <LayoutFactory router={router}>{children}</LayoutFactory>
    </>
  )
}

const RootProviders = ({
  pageProps,
  children,
}: React.PropsWithChildren<{ pageProps: any }>) => (
  <RecoilRoot>
    <ApolloProvider client={useApollo(pageProps)}>
      {/* The Provider from react-dnd-multi-backend allows us to use both click and touch for drag and dropping */}
      <DndMultiProvider options={HTML5toTouch}>{children}</DndMultiProvider>
    </ApolloProvider>
  </RecoilRoot>
)

const AppContainer: React.FC<AppProps> = ({ pageProps, Component, router }) => {
  return (
    <RootProviders pageProps={pageProps}>
      <App router={router}>
        <Component
          {...pageProps}
          css={css({
            '#__next': {
              height: '100%',
            },
            body: {
              overflow:
                router.pathname === Page.PAGE_DETAIL.url ? 'hidden' : 'auto',
            },
          })}
        />
      </App>
    </RootProviders>
  )
}

;(AppContainer as any).whyDidYouRender = true
;(App as any).whyDidYouRender = true

export default AppContainer
