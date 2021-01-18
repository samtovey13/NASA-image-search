import '../styles/Search.css';
import React from 'react';
import '../requests/getImages';
import PropTypes from 'prop-types';

const Search = ({ setValue, handleSubmit }) => {

  return <>
    <form className="search-form" onSubmit={handleSubmit} data-testid="search-form">
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
        data-testid="search-button"
      >
        GO
      </button>
    </form> 
  </>
}

Search.propTypes = {
  setValue: PropTypes.func,
  handleSubmit: PropTypes.func
}

export default Search;