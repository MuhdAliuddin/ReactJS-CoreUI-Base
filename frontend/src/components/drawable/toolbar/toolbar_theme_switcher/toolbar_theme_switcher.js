import React from 'react'

import { CButtonGroup, CFormCheck, CHeaderNav } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilMoon, cilSun } from '@coreui/icons'
import { useSelector, useDispatch } from 'react-redux'

const ToolbarThemeSwitcher = () => {
  const dispatch = useDispatch()

  const theme = useSelector((store) => store.layout.theme)

  theme === 'dark'
    ? document.body.classList.add('dark-theme')
    : document.body.classList.remove('dark-theme')

  const onThemeSwitch = (mode) => {
    if (mode === 'dark') {
      dispatch({ type: 'set', theme: 'dark' })
    }
    if (mode === 'light') {
      dispatch({ type: 'set', theme: 'light' })
    }
  }

  return (
    <CHeaderNav className="ms-auto me-4">
      <CButtonGroup aria-label="Theme switch">
        <CFormCheck
          type="radio"
          button={{ color: 'primary' }}
          name="theme-switch"
          id="btn-light-theme"
          autoComplete="off"
          label={<CIcon icon={cilSun} />}
          checked={theme === 'default'}
          onChange={() => onThemeSwitch('light')}
        />
        <CFormCheck
          type="radio"
          button={{ color: 'primary' }}
          name="theme-switch"
          id="btn-dark-theme"
          autoComplete="off"
          label={<CIcon icon={cilMoon} />}
          checked={theme === 'dark'}
          onChange={() => onThemeSwitch('dark')}
        />
      </CButtonGroup>
    </CHeaderNav>
  )
}

export default ToolbarThemeSwitcher
