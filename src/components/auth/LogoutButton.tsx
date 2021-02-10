import React from 'react'
import { useAuth0 }  from '@auth0/auth0-react'
import { GrLogout } from 'react-icons/gr'

interface Props {
  
}

const LogoutButton = (props: Props) => {
  const { logout, isAuthenticated } = useAuth0()

  return (
    <>
      {isAuthenticated && (<p className='auth-btn dropdown-item logout' onClick={() => logout()}>
        Log Out &nbsp;&nbsp;&nbsp;<GrLogout />
      </p>
      )}
    </>
  )
}

export default LogoutButton
