import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Loading } from '../../components/drawable/loading'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authorizing, logout } from '../../modules/repositories/login/actions'
import { LOGIN_STATE } from '../../modules/repositories/login/creator'
import { Navigate } from 'react-router-dom'

const Logout = ({ logon, authorizing, logout }) => {
  useEffect(() => {
    if (logon === LOGIN_STATE.REFRESHED) {
      authorizing()
    }
    if (logon === LOGIN_STATE.AUTHORIZED) {
      logout()
    }
  }, [logon, authorizing, logout])

  if (logon === LOGIN_STATE.UNAUTHORIZED || logon === LOGIN_STATE.ERROR) {
    return <Navigate to="/login" replace={true} />
  }
  return <Loading message="Logging you out ..." />
}

Logout.propTypes = {
  logout: PropTypes.func,
  logon: PropTypes.string,
  authorizing: PropTypes.func,
}

const storeToPropMap = (store) => ({
  logon: store.login.status,
})
const actionToPropMap = (dispatch) => {
  return bindActionCreators(
    {
      authorizing,
      logout,
    },
    dispatch,
  )
}
export default connect(storeToPropMap, actionToPropMap)(Logout)
