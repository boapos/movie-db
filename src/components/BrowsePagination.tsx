import React from 'react'
import { Link } from 'react-router-dom'
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs'

interface Props {
  total: number;
  currPage: number;
}

const BrowsePagination = (props: Props) => {
  const [pages, setPages] = React.useState<number[]>([])

  React.useEffect(() => {
    var pages: Array<number> = []
    if(props.currPage <= 5) {
      pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    } else {
      for(let i = -5; i < 5; i++) {
        const pageNum = props.currPage + i
        if(pageNum <= props.total) {pages.push(pageNum)}
      }
    }
    setPages(pages)
  }, [props.currPage])

  return (
    <div className="pagination">
      <ul className="page-ul">
        {(props.currPage !== 1) && (<>
        <li><Link className="link" to={`/browse/page=1`}><BsChevronDoubleLeft /></Link></li>
        <li><Link className="link" to={`/browse/page=${props.currPage - 1}`}><BsChevronLeft /></Link></li>
        </>)}
        
        {pages.map(p =>(
          <li className='nums' key={p}>
            <Link className={p===props.currPage? 'link curr-page' : 'link'} to={`/browse/page=${p}`}>{p}</Link>
          </li>
        ))}
        {(props.currPage !== props.total) && (<>
        <li><Link className="link" to={`/browse/page=${props.currPage + 1}`}><BsChevronRight /></Link></li>
        <li><Link className="link" to={`/browse/page=${props.total}`}><BsChevronDoubleRight /></Link></li>
        </>)}
      </ul>
    </div>
  )
}

export default BrowsePagination
