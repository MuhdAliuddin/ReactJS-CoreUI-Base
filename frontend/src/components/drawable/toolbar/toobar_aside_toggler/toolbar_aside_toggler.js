import React from 'react'
import { CHeaderToggler } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilApplicationsSettings } from '@coreui/icons'

import { useSelector, useDispatch } from 'react-redux'

const ToolbarAsideToggler = () => {
  const dispatch = useDispatch()
  const asideShow = useSelector((store) => store.layout.asideShow)
  const onAsideToggler = () => {
    dispatch({ type: 'set', asideShow: !asideShow })
  }
  return (
    <CHeaderToggler className="px-md-0 me-md-3" onClick={onAsideToggler}>
      <CIcon icon={cilApplicationsSettings} size="lg" />
    </CHeaderToggler>
  )
}

export default ToolbarAsideToggler
