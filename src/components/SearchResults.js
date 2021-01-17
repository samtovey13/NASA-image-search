import '../styles/SearchResults.css';
import React from 'react';

const SearchResults = ({searchResults}) => {
  return <>
    <p className="search-results-header">Search Results</p>
    <div className="search-results-images" data-testid="search-results-images">
      {
        searchResults.map((image, index) => (
          <span className="image-wrapper"><img
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

export default SearchResults;