import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface Props {
  currPage: number;
  total: number;
}

const PageCounter = ({ currPage, total }: Props) => {
  return (
    <div className='page-counter'>
      <h3>page&nbsp;{currPage}&nbsp;of&nbsp;{total}&nbsp;
        {currPage !== 1 && <Link className='link' to={`/browse/page=${currPage - 1}`}><BsChevronLeft /></Link>}&nbsp;
        {currPage !== total && <Link className='link' to={`/browse/page=${currPage + 1}`}><BsChevronRight /></Link>}
      </h3>
    </div>
  )
}

export default PageCounter
