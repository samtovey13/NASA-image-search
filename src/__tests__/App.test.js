import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

describe ("App", () => {
  it ("renders correctly", () => {
    const { asFragment } = render( <App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it ("renders the correct components", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("NASA-logo")).toHaveClass("logo");
    expect(getByTestId("search-input")).toBeInTheDocument();
  });
});