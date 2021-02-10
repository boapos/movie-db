import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import MovieCard from './MovieCard'
import JSONPretty from 'react-json-pretty'
import Analytics from './Analytics'
interface Props {
  
}

const HomePage = (props: Props) => {
  const { user, isAuthenticated } = useAuth0()
  const [newMovies, setNewMovies] = React.useState<any>([])
  const [topMovies, setTopMovies] = React.useState<any>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setLoading(true)
    axios.get('http://178.128.221.77:3000/filter?year=2015').then(res => setNewMovies(res.data.moviePost))
    axios.get('http://178.128.221.77:3000/filter?max=8.5&min=10').then(res => {
      setTopMovies(res.data.moviePost)
      setLoading(false)
    })
  }, [])

  if(loading) { return <div>Loading...</div> }
  return (
    
    <>
      {isAuthenticated && (
        <div className="homepage">
          <h1>New Movies</h1>
          <div className="new-movies">
          {newMovies.map((movie: any) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
          </div>
          <h1>Top Rated Movies</h1>
          <div className="top-movies">
          {topMovies.map((movie: any) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
          </div>
          <h1>Movie Analytics</h1>
          <Analytics />
        {/* <JSONPretty data={newMovies} /> */}
        </div>
      )} 
    </>
  )
}

export default HomePage
