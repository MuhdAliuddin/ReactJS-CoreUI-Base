import React from 'react'
import PropTypes from 'prop-types'
import { CHeaderBrand } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'

const ToolbarMobileLogo = ({ logo }) => {
  return (
    <CHeaderBrand className="mx-auto d-md-none" to="/">
      <CIcon icon={logo} height={48} alt="Logo" />
    </CHeaderBrand>
  )
}

ToolbarMobileLogo.propTypes = {
  logo: PropTypes.any,
}

export default ToolbarMobileLogo
