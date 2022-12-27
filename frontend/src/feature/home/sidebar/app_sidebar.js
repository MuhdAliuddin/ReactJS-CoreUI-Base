import React from 'react'

import SimpleBar from 'simplebar-react'
import { CSidebarNav } from '@coreui/react-pro'
import { Sidebar } from 'src/components/container/sidebar'
import { SidebarNav } from 'src/components/drawable/sidebar_nav'
import { logoNegative } from 'src/components/resources/assets/brand/logo-negative'
import { sygnet } from 'src/components/resources/assets/brand/sygnet'
import appNav from './app_nav'
import 'simplebar/dist/simplebar.min.css'

const AppSidebar = () => {
  return (
    <Sidebar logoNegative={logoNegative} sygnet={sygnet}>
      <CSidebarNav>
        <SimpleBar>
          <SidebarNav items={appNav} />
        </SimpleBar>
      </CSidebarNav>
    </Sidebar>
  )
}

export default React.memo(AppSidebar)
