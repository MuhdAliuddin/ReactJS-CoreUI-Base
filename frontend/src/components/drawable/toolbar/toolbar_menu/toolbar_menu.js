import React from 'react'

import { NavLink } from 'react-router-dom'
import { CHeaderNav, CNavLink, CNavItem } from '@coreui/react-pro'

const ToolbarMenu = () => {
  return (
    <CHeaderNav className="d-none d-md-flex me-auto">
      <CNavItem>
        <CNavLink to="./dashboard" component={NavLink}>
          Dashboard
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href={'./'}>Users</CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink href={'./'}>Settings</CNavLink>
      </CNavItem>
    </CHeaderNav>
  )
}

export default ToolbarMenu
