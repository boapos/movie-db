import React from 'react'
import LoginButton from '../auth/LoginButton'
import LogoutButton from '../auth/LogoutButton'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import SignupButton from '../auth/SignupButton'
import { BiCameraMovie } from 'react-icons/bi'

interface Props {
  query: string;
  setQuery: (s: string) => void;
}

const NavBar = (props: Props) => {
  const { user, isAuthenticated } = useAuth0()
  const [open, setOpen] = React.useState(false)

  const toggleDropdown = () => {
    setOpen(!open)
  }

  const clearQuery = () => {
    props.setQuery('')
  }

  return (
    <nav>
      <div className="navbar">
        <Link className="link" to="/"><h1>MovieDB <BiCameraMovie className='logo' /></h1></Link>
        <SearchBox query={props.query} setQuery={props.setQuery} />
        {isAuthenticated &&
        <div className="user-options">
          <Link className="link nav-item" to="/">Home</Link>
          <Link onClick={clearQuery} className="link nav-item" to="/browse/page=1">Browse</Link>
          <img className="profile" src={user.picture} alt={user.name} onClick={toggleDropdown} />
          {open && (<div className="dropdown">
              <Link className='link dropdown-item' to='/profile'>Profile</Link>
              <Link className='link dropdown-item' to='/profile'>Favorites</Link>
              <LogoutButton />
              <hr/>
              <p className='dropdown-item'>Dark Mode</p>
          </div>)}
        </div>
        }{!isAuthenticated && (
          <div className="auth">
            <LoginButton />
            <SignupButton />
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
