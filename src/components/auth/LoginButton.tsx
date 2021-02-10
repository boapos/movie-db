import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  
}

const LoginButton = (props: Props) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  return (
    <>
      {!isAuthenticated && (<p className='auth-btn nav-item link' onClick={() => loginWithRedirect()}>
        Log In
      </p>
      )}
    </>
  )
}

export default LoginButton
