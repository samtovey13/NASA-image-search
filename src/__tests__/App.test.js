import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import App from '../components/App';

import getImages from '../requests/getImages';
jest.mock('../requests/getImages');

describe ("App", () => {

  beforeEach(() => {
    getImages.mockResolvedValue(
      [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg"
      ]
    )
  });

  it ("renders correctly", () => {
    const { asFragment } = render( <App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it ("renders the correct components on load", () => {
    const { getByTestId, queryByTestId } = render(<App />);

    expect(getByTestId("NASA-logo")).toHaveClass("logo");
    expect(getByTestId("search-input")).toBeInTheDocument();
    expect(getByTestId("search-form")).toBeInTheDocument();
    expect(queryByTestId("search-results-images")).not.toBeInTheDocument();
  });

  it("renders search results following a successful API call", async () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId("search-input");
    const form = getByTestId("search-form");
    fireEvent.change(input, {target: {value: "new search"}});
    fireEvent.submit(form);

    await waitFor(() => {
      expect(getByTestId("search-results-images")).toBeInTheDocument();
      expect(input.value).toBe("new search");
      expect(getImages).toHaveBeenCalledTimes(1);
      expect(getImages).toHaveBeenCalledWith("new search");
    });
  });

});