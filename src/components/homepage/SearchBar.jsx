import React from 'react'

// Styles
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <input
          type='text'
          placeholder='Find your friends/channels'
        />
    </div>
  )
}

export default SearchBar