import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty'

interface Props {
  
}

const Profile = (props: Props) => {
  const { user, isAuthenticated } = useAuth0()
  return (
    <>
      {isAuthenticated && (
        <div className='user-profile'>
          <img src={user.picture} alt={user.name} />
          <div>
            <h1>Hi, {user.given_name}!</h1>
            <p>{user.email}</p>
          </div>
          <h1></h1>
          {/* <JSONPretty data={user} /> */}
          </div>
      )} 
    </>
  )
}

export default Profile
