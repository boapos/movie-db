import React from 'react'
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

interface Props {
  toggleFilter: boolean;
  query: string;
  years: Array<number>;
  genres: Array<string>;
  languages: Array<string>;
}

const FilterOptions = ({ toggleFilter, query, years, genres, languages }: Props) => {

  const [value, setValue] = React.useState<number[]>([0, 10]);
  const [year, setYear] = React.useState<any>()
  const [genre, setGenre] = React.useState<any>()
  const [lang, setLang] = React.useState<any>()

  function valuetext(value: any) {
    return `${value}`;
  }
  const handleChange = (e: any, newValue: number | number[]) => {
    console.log(newValue)
    setValue(newValue as number[])
  }

  const history = useHistory()
  const filterHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    
    const [from, to] = value
    if(query === '') {
      history.push(`/browse/query=${undefined}/year=${year}/genre=${genre}/lang=${lang}/from=${from}/to=${to}/page=1`)
    } else {
      history.push(`/browse/query=${query}/year=${year}/genre=${genre}/lang=${lang}/from=${from}/to=${to}/page=1`)
    }
  }
  
  return (<>{toggleFilter &&(
    <form className='filter-form' onSubmit={filterHandler}>
      <div className='filter-options'>
        <div>
          <h3>Year</h3>
          <select onChange={e => setYear(e.target.value)}>
            <option value='undefined'>Select Year</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div>
          <h3>Genre</h3>
          <select onChange={e => setGenre(e.target.value)}>
            <option value='undefined'>Select Genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
        <div>
          <h3>Rating</h3>
            <Slider
              className="slider"
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              min={0}
              max={10}
              step={0.1}
            />
        </div>
        <div>
          <h3>Language</h3>
          <select onChange={e => setLang(e.target.value)}>
            <option value='undefined'>Select Language</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
      </div>
      <Button onClick={filterHandler} className="apply-btn" variant="contained">
        Apply
      </Button>
    </form>
  )}</>
  )
}

export default FilterOptions
