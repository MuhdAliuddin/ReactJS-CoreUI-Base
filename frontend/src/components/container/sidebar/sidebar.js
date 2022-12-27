import React from 'react'
import PropTypes from 'prop-types'

import { CSidebar, CSidebarBrand, CSidebarToggler } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'

import { useSelector, useDispatch } from 'react-redux'

const Sidebar = ({ logoNegative, sygnet, colorScheme, children }) => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((store) => store.layout.sidebarUnfoldable)
  const sidebarShow = useSelector((store) => store.layout.sidebarShow)

  const onSidebarVisibleChange = (visible) => {
    dispatch({ type: 'set', sidebarShow: visible })
  }
  const onSidebarUnfoldable = () => {
    dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })
  }

  return (
    <CSidebar
      colorScheme={colorScheme}
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        onSidebarVisibleChange(visible)
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/" style={{ backgroundColor:'#003768'}}>
        Wait for new Icon
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} /> */}
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      {children}
      <CSidebarToggler className="d-none d-lg-flex" onClick={onSidebarUnfoldable} style={{ backgroundColor:'#003768'}}/>
    </CSidebar>
  )
}

Sidebar.propTypes = {
  logoNegative: PropTypes.any,
  sygnet: PropTypes.any,
  colorScheme: PropTypes.string,
  children: PropTypes.any,
}

export default React.memo(Sidebar)
