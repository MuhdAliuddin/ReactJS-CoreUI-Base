import React from 'react'
import { CHeaderToggler } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'

import { useSelector, useDispatch } from 'react-redux'

const ToolbarSidebarToggler = () => {
  const dispatch = useDispatch()

  const sidebarShow = useSelector((store) => store.layout.sidebarShow)
  const onSidebarToggler = () => {
    dispatch({ type: 'set', sidebarShow: !sidebarShow })
  }

  return (
    <CHeaderToggler className="ps-1" onClick={onSidebarToggler}>
      <CIcon icon={cilMenu} size="lg" />
    </CHeaderToggler>
  )
}

export default ToolbarSidebarToggler
