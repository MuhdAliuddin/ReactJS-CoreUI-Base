import React from 'react'
import PropTypes from 'prop-types'

import { CContainer, CRow } from '@coreui/react-pro'
import { Bars } from 'react-loader-spinner'
const Loading = ({ message }) => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <div style={{ textAlign: 'center' }}>
            <p>{message ? message : 'Please Wait ...'}</p>
            <Bars heigth="200" width="5000" color="maroon" ariaLabel="loading-indicator" />
          </div>
        </CRow>
      </CContainer>
    </div>
  )
}
Loading.propTypes = {
  message: PropTypes.string,
}
export default Loading
