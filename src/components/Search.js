import '../styles/Search.css';
import React, {useState} from 'react';

const Search = () => {
  const [value, setValue] = useState();

  return <>
    <form className="search-form">
      <input 
        className="search-input"
        type="text"
        placeholder="Search"
        data-testid="search-input"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="search-button"
        type="submit"
      >
        GO
      </button>
    </form> 
  </>
}

export default Search;