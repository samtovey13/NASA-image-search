import React from 'react';
import { render } from '@testing-library/react';
import Search from '../components/Search';

describe ("Search", () => {
  it ("renders correctly", () => {
    const { asFragment } = render( <Search />);

    expect(asFragment()).toMatchSnapshot();
  });

  it ("renders the correct components", () => {
    const { getByTestId, getByPlaceholderText, getByText } = render(<Search />);

    expect(getByTestId("search-input")).toHaveClass("search-input");
    expect(getByPlaceholderText("Search")).toBeInTheDocument();
    expect(getByText("GO")).toHaveClass("search-button");
  });
});