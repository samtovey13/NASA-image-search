import '../styles/Search.css';
import React from 'react';

const Search = () => {
  return <> 
    <input 
      className="search-input"
      type="text"
      placeholder="Search"
      data-testid="search-input"
    />
  </>
}

export default Search;