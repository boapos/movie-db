import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'


interface Props {
  
}

const SignupButton = (props: Props) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  return (
    <>
      {!isAuthenticated && (<p className='signup auth-btn nav-item link' onClick={() => 
      loginWithRedirect({screen_hint: 'signup'})}>
        Sign up
      </p>
      )}
    </>
  )
}

export default SignupButton
