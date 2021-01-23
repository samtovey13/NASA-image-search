import SearchResults from '../components/SearchResults';
import React from 'react';
import { render } from '@testing-library/react';

const mockSearchResults = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg"
];

describe("SearchResults", () => {
  it ("renders correctly with no results", () => {
    const { asFragment } = render( <SearchResults results={[]}/>);

    expect(asFragment()).toMatchSnapshot();
  });

  it ("renders correctly with results", () => {
    const { asFragment } = render( <SearchResults results={mockSearchResults}/>);

    expect(asFragment()).toMatchSnapshot();
  });

  it ("renders the correct components", () => {
    const { getByTestId, getByText } = render(<SearchResults results={mockSearchResults}/>);

    expect(getByText("Search Results")).toHaveClass("search-results-header");
    expect(getByTestId("search-results-images")).toBeInTheDocument();
    expect(getByTestId("image-result-0")).toBeInTheDocument();
    expect(getByTestId("image-result-1")).toBeInTheDocument();
    expect(getByTestId("image-result-2")).toBeInTheDocument();
  });

  describe ("handles bad requests to the API", () => {
    it("handles a 400 response", () => {
      const {getByText} = render(<SearchResults results={[400]} />);
      expect(getByText("Invalid search term")).toHaveClass("error-message");
    });

    it("handles a 404 response", () => {
      const {getByText} = render(<SearchResults results={[404]} />);
      expect(getByText("No results")).toHaveClass("error-message");
    });
    
    it("handles a 500 response", () => {
    const {getByText} = render(<SearchResults results={[500]} />);
    expect(getByText("Server error, try again later")).toHaveClass("error-message");      
    })
  })
});