import '../styles/SearchResults.css';
import React from 'react';
import PropTypes from 'prop-types';

const SearchResults = ({results}) => {
  if ((results.length === 1 && results[0] === 404) || (!results.length)) {
    return <p className="error-message">No results</p>
  } else if (results.length === 1 && results[0] === 500) {
    return <p className="error-message">Server error, try again later</p>
  } else if (results.length === 1 && results[0] === 400) {
    return <p className="error-message">Invalid search term</p>
  } else {
    return <>
      <p className="search-results-header">Search Results</p>
      <div className="search-results-images" data-testid="search-results-images">
        {
          results.map((image, index) => (
            <span className="image-wrapper" key={`image-wrapper-${index}`}><img
              className="results-image"
              src={image} 
              alt="NASA" 
              key={`result-${index}`}
              data-testid={`image-result-${index}`}
            /></span>
          ))
        }
        <span className="last-child"></span>
      </div>
    </>
  }
}

SearchResults.propTypes = {
  results: PropTypes.array
}

export default SearchResults;