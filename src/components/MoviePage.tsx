import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import noPoster from '../images/no-poster.jpg'
import { fetchComments, fetchMovie } from '../service'
import CommentList from './commentsection/CommentList'

interface Props extends RouteComponentProps<{ id: string }> {}

const MoviePage = (props: Props) => {
  const movieId = props.match.params.id
  const [movie, setMovie] = React.useState<any>({})
  const [comments, setComments] = React.useState<any>([])

  React.useEffect(() => {
    fetchComments(movieId).then(commentsData => setComments(commentsData))
      fetchMovie(movieId).then(movieData => setMovie(movieData))
    console.log(movie)
  }, [movieId])

  const addDefaultSrc = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLImageElement
    target.src = `${noPoster}`
  }
  
  return (
    <>
        <div className="movie-page">
          <img src={movie.poster || noPoster} alt={movie.title} onError={addDefaultSrc} />
          <div className="movie-info">
            
          <h2 className='movie-title'>{movie.title}</h2>
          <h3>{movie.year}</h3>
          <h3>{movie.directors}</h3>
          <div className="plot">
            <h4>Plot:</h4>
            <p>{movie.fullplot}</p> 
          </div>

          
            {/* <div className="directors">
              <h4>Directors: </h4>
                {movie.directors.map((d: any) => (
                  <p key={d}>{d}</p>
                ))}
              
            </div>
            <div className="genres">
              <h4>Genre:</h4> 
              {movie.genres.map((genre: string) => (
                <span className='genre' key={genre}>{genre}&nbsp;&nbsp;</span>
              ))}
            </div>
            <div className="plot">
              <h4>Plot:</h4>
              <p>{movie.fullplot}</p> 
            </div>
            <h4>Rated: {movie.rated}</h4>

            <div className="cast">
              <h4>Cast:</h4>
              {movie.cast.map((c: string) => (
                <p key={c}>{c}</p>
              ))}
            </div>

            <div className="awards">
              <h4>Awards:</h4>
              <p>Wins: {movie.awards.wins}</p>
              <p>Nominations: {movie.awards.nominations}</p>
            </div>
            <h4>IMDb Rating: {movie.imdb.rating}</h4>

            <div className="countries">
              <h4>Countries:</h4>
              {movie.countries.map((c: string) => (
                <p key={c}>{c}</p>
              ))}
            </div>   */}

          </div>
        </div>
        <CommentList comments={comments} setComments={setComments} />
      </>
  )
}
export default MoviePage
