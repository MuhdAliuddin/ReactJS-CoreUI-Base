import React from 'react'
import { CHeaderNav } from '@coreui/react-pro'
import { AppToolbarMessages, AppToolbarNotifications, AppToolbarTasks } from './action'

const AppToolbarDropdown = () => {
  return (
    <CHeaderNav>
      <AppToolbarNotifications />
      <AppToolbarTasks />
      <AppToolbarMessages />
    </CHeaderNav>
  )
}

export default AppToolbarDropdown
