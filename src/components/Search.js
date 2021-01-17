import '../styles/Search.css';
import React, {useState} from 'react';
import '../requests/getImages';
import getImages from '../requests/getImages';

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const images = await getImages(value);
    setSearchResults(images);
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