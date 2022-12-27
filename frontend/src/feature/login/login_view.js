import React from 'react'
import PropTypes from 'prop-types'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CInputGroupText,
  CForm,
  CFormInput,
  CInputGroup,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CRow,
  CAlert,
  CFormLabel,
} from '@coreui/react-pro'
import image from './wooden-bridge-flooded-rain-forest-645371.jpg'
import CIcon from '@coreui/icons-react';
import { cilEnvelopeLetter, cilLockLocked } from '@coreui/icons';

const LoginView = ({ state, callback }) => {
  return (
    // <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
    // <CContainer>
        // <CRow >
        //   <CCol>
        <CCardGroup style={{ height: "100vh", width: '100%' }}>
      <CCard >
        <img src={image} alt="Logo" style={{ height: '100%', width: '100%', filter:' brightness(35%)' }} />
        <div style={{position:'absolute',color:'white',margin:'10%'}}>A CGS Logo will be here</div>
        <div style={{ position: 'absolute', color: 'white', top: '45%', margin: '10%', fontSize: '73px' }}><strong>Together We Can Restore The Planet</strong></div>
      </CCard>
              <CCard className="p-4" >
                <CCardBody>
                  <CForm
                    noValidate
                    validated={state.formValidated}
                    onSubmit={(ev) => {
                      const form = ev.currentTarget
                      ev.preventDefault()
                      if (form.checkValidity() === false) {
                        ev.stopPropagation()
                      }
                      callback.onLogin(form.checkValidity())
                    }}
                  >
                    <h2 style={{ textAlign: 'center', paddingTop: '20%', paddingBottom: '10%' }}>Sign In</h2>
            <CFormLabel style={{ width: '50%', position: 'relative', left: '25%' }}><h6>Email</h6></CFormLabel>
                    <CInputGroup className="mb-3" style={{width:'50%',position:'relative',left:'25%'}}>
              <CInputGroupText id="inputGroup-sizing-default"><CIcon icon={cilEnvelopeLetter} /></CInputGroupText>
                      <CFormInput style={{color: 'white'}}
                        type="email"
                        placeholder="syafiqah1654@gmail.com"
                        autoComplete="current-email"
                        value={state.email}
                        valid={state.emailValid}
                        invalid={state.emailInvalid}
                        onChange={(ev) => {
                          ev.preventDefault()
                          callback.onEmailChange(ev.target.value)
                        }}
                        feedbackInvalid={state.emailInvalidFeedback}
                        required
                      />
                    </CInputGroup>
            <CFormLabel style={{ width: '50%', position: 'relative', left: '25%' }}><h6>Password</h6></CFormLabel>
                    <CInputGroup className="mb-3" style={{ width: '50%', position: 'relative', left: '25%' }}>
              <CInputGroupText id="inputGroup-sizing-default"><CIcon icon={cilLockLocked} /></CInputGroupText>
                      <CFormInput style={{ placeholder: 'white' }}
                        type="password"
                        placeholder="************"
                        autoComplete="current-password"
                        value={state.password}
                        valid={state.passwordValid}
                        invalid={state.passwordInvalid}
                        onChange={(ev) => {
                          ev.preventDefault()
                          callback.onPasswordChange(ev.target.value)
                        }}
                        feedbackInvalid={state.passwordInvalidFeedback}
                        required
                      />
                    </CInputGroup>
                    <CRow style={{ position: 'center'}}>
                      <CCol>

                <CDropdown variant="btn-group" style={{ width: '30%', position: 'relative', left: '35%', marginTop: '2%' }}>
                  <CDropdownToggle color="secondary" size="sm" style={{ color: 'white', backgroundColor: 'darkBlue', borderRadius: '10px', height: '20px', width: '30px', paddingBottom: '28px'}}>{state.user}   </CDropdownToggle>
                            <CDropdownMenu>
                    <CDropdownItem href="#" value='Admin' onClick={(event)=>callback.setUser('Admin')}>Admin</CDropdownItem>
                    <CDropdownItem href="#" value='User' onClick={(event) => callback.setUser('User')}>User</CDropdownItem>
                            </CDropdownMenu>
                          </CDropdown>
                      </CCol>
                    </CRow>
                    <CRow style={{ position: 'center' }}>
                      <CCol>
                <CButton type="submit" className="px-4" style={{ width: '50%', position: 'relative', left: '25%', marginTop: '2%', backgroundColor: 'darkBlue',borderRadius:'10px' }}>
                          Login<br/>
                        </CButton>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol className="text-right" style={{ paddingLeft: '25%', paddingTop: '2%' }}>
                        <CButton color="link" className="px-0" style={{ fontSize:'12px', textDecoration: 'none', marginLeft:'20px' }}>
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                    <CRow>
                      {state.formInvalid && (
                        <CCardBody style={{ marginTop: '10px' }}>
                          <CAlert color="danger" dismissible>
                            {state.formInvalidFeedback}
                          </CAlert>
                        </CCardBody>
                      )}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
        //   </CCol>
        // </CRow>
      // </CContainer>
   
  )
}

LoginView.propTypes = {
  state: PropTypes.shape({
    email: PropTypes.string,
    emailValid: PropTypes.bool,
    emailInvalid: PropTypes.bool,
    emailInvalidFeedback: PropTypes.string,
    password: PropTypes.string,
    passwordValid: PropTypes.bool,
    passwordInvalid: PropTypes.bool,
    passwordInvalidFeedback: PropTypes.string,
    formValidated: PropTypes.bool,
    formInvalid: PropTypes.bool,
    formInvalidFeedback: PropTypes.string,
    user:PropTypes.string
  }).isRequired,
  callback: PropTypes.shape({
    onLogin: PropTypes.func,
    onEmailChange: PropTypes.func,
    onPasswordChange: PropTypes.func,
    onForgotPassword: PropTypes.func,
    setUser:PropTypes.func
  }).isRequired,
}

export default LoginView
