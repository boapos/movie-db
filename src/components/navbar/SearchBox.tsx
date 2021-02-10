import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useHistory } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

interface Props {
  query: string;
  setQuery: (s: string) => void;
}


const SearchBox = ({query, setQuery}: Props) => {
  const { isAuthenticated } = useAuth0()

  const history = useHistory()
  const searchHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    history.push(`/browse/query=${query}/page=1`)
  }

  return (
    <>
      {isAuthenticated && (
        <form onSubmit={searchHandler}>
          <div className="search-box">
            <input type="text" placeholder="Search" onChange={e => setQuery(e.target.value)} value={query} />
            <BsSearch className="search-btn" onClick={searchHandler} />
          </div>
        </form>
      )} 
    </>
  )
}

export default SearchBox
