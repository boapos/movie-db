import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import MovieCard from './MovieCard'
import { fetchMoviesBySearch } from '../service/index'
import { RouteComponentProps } from 'react-router-dom'
import { FilterPageCounter } from './FilterPageCounter'

interface Props extends RouteComponentProps<{ query: string; year: string; genre: string; lang: string; page: string; from: string, to: string  }> {}

const SearchList = (props: Props) => {
  const { isAuthenticated } = useAuth0()
  const [movies, setMovies] = React.useState([])
  const query = props.match.params.query
  const page = props.match.params.page
  const year = props.match.params.year
  const genre = props.match.params.genre
  const lang = props.match.params.lang
  const from = props.match.params.from
  const to = props.match.params.to
  const [loading, setLoading] = React.useState(true)
  const [currPage, setCurrPage] = React.useState(1)
  const [temp, setTemp] = React.useState([])

  React.useEffect(() => {
    setLoading(true)
    setMovies([])
    fetchMoviesBySearch(query, year, genre, lang, from, to, page).then(searchData => {
      setMovies(searchData.moviePost)
      setLoading(false)
      setCurrPage(Number(searchData.currentPage))
    })
    fetchMoviesBySearch(query, year, genre, lang, from, to, `${Number(page)+1}`).then(searchData => {
      setTemp(searchData.moviePost)
    })
    console.log(temp)
  }, [query, page, year, genre, lang, from, to])

  if(loading){
    return <div>Loading...</div>
  } else if(!loading && !movies.length) {
    return <div>No movies found.</div>
  }
    
  return (
    <>
      {isAuthenticated && (<>
        {query !== 'undefined' && (<h2>Search Results for "{query}"</h2>)}
        <div className="list-header">
        <FilterPageCounter currPage={currPage} temp={temp} query={query} year={year} genre={genre} lang={lang} from={from} to={to} />
      </div>
      <hr className='list-divider'/>
      <div className="movie-list search-list">
        {movies.map((movie: any) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
      </>
      )}
    </>
  )
}

export default SearchList