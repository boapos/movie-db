import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { BiCameraMovie } from 'react-icons/bi'

interface Props {
  
}

const LandingPage = (props: Props) => {
  const { isAuthenticated } = useAuth0()
  return (
     <>
     {!isAuthenticated && (
      <div className="landing-page">
        <h1>MovieDB 
          <BiCameraMovie className='cam' />
        </h1>
      </div>
     )} 
   </>
  )
}

export default LandingPage
