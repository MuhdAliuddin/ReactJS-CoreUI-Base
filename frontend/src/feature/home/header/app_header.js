import React from 'react'

import { Header } from '../../../components/container/header'
import { AppToolbarMenu, AppToolbarProfile } from './toolbar'
import {
  ToolbarSidebarToggler,
  ToolbarMobileLogo,
} from '../../../components/drawable/toolbar'
import { Breadcrumb } from '../../../components/drawable/breadcrumb'

import { logo } from 'src/components/resources/assets/brand/logo'
import routes from '../content/routes'

const AppHeader = () => {
  return (
    <Header
      sidebarToggler={<ToolbarSidebarToggler />}
      mobileLogo={<ToolbarMobileLogo logo={logo} />}
      menu={<AppToolbarMenu />}
      // themeSwitcher={<ToolbarThemeSwitcher />}
      profile={<AppToolbarProfile />}
      // asideToggler={<ToolbarAsideToggler />}
      breadcrumb={<Breadcrumb routes={routes} />}
    />
  )
}

export default AppHeader
