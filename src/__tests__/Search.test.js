import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from '../components/Search';

describe ("Search", () => {
  const mockSetValue = jest.fn()
  const mockHandleSubmit = jest.fn();

  it ("renders correctly", () => {
    const { asFragment } = render( <Search setValue={mockSetValue} handleSubmit={mockHandleSubmit} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it ("renders the correct components", () => {
    const { getByTestId, getByPlaceholderText, getByText } = render(<Search />);

    expect(getByTestId("search-input")).toHaveClass("search-input");
    expect(getByPlaceholderText("Search")).toBeInTheDocument();
    expect(getByText("GO")).toHaveClass("search-button");
  });

  it("calls the submit handler function on submit", () => {
    const { getByTestId } = render( <Search setValue={mockSetValue} handleSubmit={mockHandleSubmit}/>);
    fireEvent.submit(getByTestId("search-form"));
    
    expect(mockHandleSubmit).toHaveBeenCalled();
  })

  it("triggers stateful method setValue on text input change", () => {

    const { getByTestId } = render( <Search setValue={mockSetValue} handleSubmit={mockHandleSubmit}/> );
    const input = getByTestId("search-input");

    fireEvent.change(input, {target: {value: "new search"}});
    expect(input.value).toBe("new search");
    expect(mockSetValue).toHaveBeenCalled();
  })
});