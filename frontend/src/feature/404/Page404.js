import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilMagnifyingGlass } from '@coreui/icons'

const Page404 = () => {
  const [query, setQuery] = useState('')

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <div className="clearfix">
              <h1 className="float-start display-3 me-4">404</h1>
              <h4 className="pt-3">Oops! You{"'"}re lost.</h4>
              <p className="text-medium-emphasis float-start">
                The page you are looking for was not found.
              </p>
            </div>
            <CInputGroup className="input-prepend">
              <CInputGroupText>
                <CIcon icon={cilMagnifyingGlass} />
              </CInputGroupText>
              <CFormInput
                type="text"
                placeholder="What are you looking for?"
                value={query}
                onChange={(ev) => {
                  ev.preventDefault()
                  setQuery(ev.target.value)
                }}
              />
              <CButton
                color="info"
                onClick={() => {
                  window.open(
                    `https://www.google.com?q=${encodeURIComponent(query)}`,
                    '_blank',
                    'noopener,noreferrer',
                  )
                }}
              >
                Search
              </CButton>
            </CInputGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404
