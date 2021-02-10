import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface Props {
  currPage: number;
  temp: Array<string>;
  year: string;
  query: string;
  genre: string;
  lang: string;
  from: string;
  to: string;
}

export const FilterPageCounter = ({currPage, year, temp, query, genre, lang, from, to}: Props) => {
  return (
    <div className='page-counter'>
      <h3>page {currPage}&nbsp;
      {currPage !== 1 && <Link className='link' to={`/browse/query=${query}/year=${year}/genre=${genre}/lang=${lang}/from=${from}/to=${to}/page=${currPage - 1}`}><BsChevronLeft /></Link>}
      &nbsp;
      &nbsp;
      {temp.length !== 0 && <Link className='link' to={`/browse/query=${query}/year=${year}/genre=${genre}/lang=${lang}/from=${from}/to=${to}/page=${currPage + 1}`}><BsChevronRight /></Link>}
      </h3>
    </div>
  )
}
