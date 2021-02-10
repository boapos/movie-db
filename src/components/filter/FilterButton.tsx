import React from 'react'
import { BiSlider } from 'react-icons/bi'
import PageCounter from '../PageCounter'

interface Props {
  toggleFilter: boolean;
  setToggleFilter: (v: boolean) => void;

}

const FilterButton = ({ toggleFilter, setToggleFilter }: Props) => {
  const toggleFilterHandler = () => {
    setToggleFilter(!toggleFilter)
  }

  return (
      <div className='filter-btn' onClick={toggleFilterHandler}>
        <h3>Filter</h3>
        <BiSlider />
      </div>
  )
}

export default FilterButton
