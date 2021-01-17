import '../styles/SearchResults.css';
import React from 'react';

const SearchResults = ({searchResults}) => {
  return <>
    <p className="search-results-header">Search Results</p>
    <div className="search-results-images" data-testid="search-results-images">
      {
        searchResults.map((image, index) => (
          <img 
            src={image} 
            alt="NASA" 
            key={`result-${index}`}
            data-testid={`image-result-${index}`}
          />
        ))
      }
    </div>
  </>
}

export default SearchResults;