import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import MovieCard from './MovieCard'
import { fetchMovies } from '../service'
import BrowsePagination from './BrowsePagination'
import { RouteComponentProps } from 'react-router-dom'
import PageCounter from './PageCounter'

interface Props extends RouteComponentProps<{ page: string }>{}

const MovieList = ( props: Props ) => {
  const { isAuthenticated } = useAuth0()
  const [movies, setMovies] = React.useState<any>([])
  const [total, setTotal] = React.useState(0)
  const [currPage, setCurrPage] = React.useState(1)
  const [loading, setLoading] = React.useState(true)
  const page = props.match.params.page

  React.useEffect(() => {
    setLoading(true)
    setMovies([])
    fetchMovies(page).then(moviesData => {
      setMovies(moviesData.moviePost)
      setTotal(moviesData.totalPages)
      setCurrPage(Number(moviesData.currentPage))
      setLoading(false)
    })
  }, [page])

  if(loading){
    return <div>Loading...</div>
  } else if(!loading && !movies.length) {
    return <div>No movies found.</div>
  }
  return (
    <>
      {(isAuthenticated && movies !== undefined) && (
      <>
      <div className="list-header">
        <PageCounter currPage={currPage} total={total} />
      </div>
      <hr className='list-divider'/>
      <div className="movie-list">
        {movies.map((movie: any) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
      <BrowsePagination total={total} currPage={currPage} />
      </>
      )}
    </>
  )
}

export default MovieList