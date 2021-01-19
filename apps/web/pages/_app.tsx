import { AppProps } from 'next/app'
import { WithRouterProps } from 'next/dist/client/with-router'
import { NextRouter, useRouter } from 'next/router'
import * as R from 'ramda'
import React from 'react'
import { DashboardLayout } from '../src/dashboard/Dashboard-layout'
import { HomeLayout } from '../src/home/Home-layout'
import {
  MachineProvider,
  PageType,
  isPage,
  rootMachine,
} from '@codelab/frontend'
import { CreateAppModal, EditAppModal } from '@codelab/modules/app-stories'
import {
  LoginUserModal,
  RegisterUserModal,
} from '@codelab/modules/user-stories'

import './App.less'
import './App.scss'

require('highlight.js/styles/monokai-sublime.css')
require('react-grid-layout/css/styles.css')
require('react-resizable/css/styles.css')

export interface SharedPageProps {
  router: NextRouter
}

const LayoutFactory: React.FunctionComponent<WithRouterProps> = R.cond<
  any,
  React.ReactElement<WithRouterProps, any> | null
>([
  [isPage(PageType.Home), HomeLayout],
  [R.T, DashboardLayout],
])

const App: React.FunctionComponent<{}> = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <RegisterUserModal />
      <LoginUserModal />
      <CreateAppModal />
      <EditAppModal />
      <LayoutFactory router={router}>{children}</LayoutFactory>
    </>
  )
}

const AppContainer: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <MachineProvider rootMachine={rootMachine}>
      <style jsx global>{`
        #__next {
          height: 100%;
        }
      `}</style>
      <App>
        <Component {...pageProps} />
      </App>
    </MachineProvider>
  )
}

export default AppContainer
