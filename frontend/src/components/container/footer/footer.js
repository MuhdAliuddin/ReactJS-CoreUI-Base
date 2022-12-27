import React from 'react'
import { CFooter } from '@coreui/react-pro'

const Footer = () => {
  return (
    <CFooter>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          COREUI
        </a>
        <span className="ms-1">&nbsp; 2022</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          REACTJS
        </a>
        &nbsp; &copy;
      </div>
    </CFooter>
  )
}

export default React.memo(Footer)
