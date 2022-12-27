import React from 'react'
import PropTypes from 'prop-types'

import { CContainer, CHeader, CHeaderDivider } from '@coreui/react-pro'

const Header = ({
  sidebarToggler,
  mobileLogo,
  menu,
  themeSwitcher,
  dropdown,
  profile,
  asideToggler,
  breadcrumb,
}) => {
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        {sidebarToggler}
        {mobileLogo}
        {menu}
        {themeSwitcher}
        {dropdown}
        {profile}
        {asideToggler}
      </CContainer>
      <CHeaderDivider />
      {breadcrumb}
    </CHeader>
  )
}

Header.propTypes = {
  sidebarToggler: PropTypes.any,
  mobileLogo: PropTypes.any,
  menu: PropTypes.any,
  themeSwitcher: PropTypes.any,
  dropdown: PropTypes.any,
  profile: PropTypes.any,
  asideToggler: PropTypes.any,
  breadcrumb: PropTypes.any,
}

export default Header
