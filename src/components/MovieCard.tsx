import React from 'react'
import noPoster from '../images/no-poster.jpg'
import { Link } from 'react-router-dom'

interface Props {
  movie: any;
}

const MovieCard = ({ movie }: Props) => {

  const addDefaultSrc = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLImageElement
    target.src = `${noPoster}`
  }

  return (
    <Link className="link" to={`/movies/${movie._id}`}>
    <div className="movie-card" title={movie.title}>
      <div className="img-container">
        <img src={movie.poster || noPoster} alt={movie.title} onError={addDefaultSrc} />
      </div>
      <div className="movie-card-details">
        <div className="movie-card-title">
          <h4>{movie.title} <span>&#40;{movie.year}&#41;</span></h4>
        <div className='movie-card-sub-details'>
          </div>  
          {/* <p>Director&#40;s&#41;: {movie.directors.map((director: string) => (
            <span key={director}>{director}.&nbsp;</span>
          ))}</p> */}

          <p>Genre: {movie.genres.map((genre: string) => (
            <span key={genre}>{genre}&nbsp;&nbsp;</span>
            ))}</p>
          <h5>IMDb rating: {movie.imdb.rating}</h5>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default MovieCard
