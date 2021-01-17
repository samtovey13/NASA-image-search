import '../styles/Search.css';
import React, {useState} from 'react';
import '../requests/getImages';
import getImages from '../requests/getImages';

const Search = () => {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
  }

  return <>
    <form className="search-form" onSubmit={handleSubmit}>
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