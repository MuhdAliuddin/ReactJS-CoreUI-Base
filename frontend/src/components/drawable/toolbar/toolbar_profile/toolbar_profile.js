import React from 'react'
import PropTypes from 'prop-types'

import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeaderNav,
} from '@coreui/react-pro'
import {
  cilLockLocked,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const ToolbarProfile = ({ avatar }) => {
  return (
    <CHeaderNav className="ms-3 me-4">
      <CDropdown variant="nav-item" alignment="end">
        <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
          <CAvatar src={avatar} size="md" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0">
          <CDropdownItem href="./profile">
            <CIcon icon={cilUser} className="me-2" />
            Profile
          </CDropdownItem>

          <CDropdownDivider />
          <CDropdownItem href="/logout">
            <div>
              <CIcon icon={cilLockLocked} className="me-2" />
              Logout
            </div>
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </CHeaderNav>
  )
}

ToolbarProfile.propTypes = {
  avatar: PropTypes.any,
}

export default ToolbarProfile
