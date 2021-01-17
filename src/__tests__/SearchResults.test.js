import SearchResults from '../components/SearchResults';
import React from 'react';
import { render } from '@testing-library/react';

const mockSearchResults = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg"
];

describe ("SearchResults", () => {
  it ("renders correctly", () => {
    const { asFragment } = render( <SearchResults searchResults={mockSearchResults}/>);

    expect(asFragment()).toMatchSnapshot();
  });

  it ("renders the correct components", () => {
    const { getByTestId, getByText } = render(<SearchResults searchResults={mockSearchResults}/>);

    expect(getByText("Search Results")).toHaveClass("search-results-header");
    expect(getByTestId("search-results-images")).toBeInTheDocument();
    expect(getByTestId("image-result-0")).toBeInTheDocument();
    expect(getByTestId("image-result-1")).toBeInTheDocument();
    expect(getByTestId("image-result-2")).toBeInTheDocument();
  });
});