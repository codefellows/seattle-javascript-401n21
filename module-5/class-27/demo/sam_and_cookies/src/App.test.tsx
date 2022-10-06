import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  // .getBy -> returns element OR throws error if not found
  // .queryBy -> returns the first element, or null
  // .findBy -> returns a promise, waits up to 1000ms, and then does getBy

  // getAllBy -> Array or throw error if none
  // queryAllBy -> Array or empty array if non
  // findAllBy -> Promise, then getAllBy

  // https://testing-library.com/docs/queries/about
  // byRole
  // ByLabelText - inputs, etc
  // ByPlaceholderText -> input
  // etc
  // ByText -> Literal displayed text
  // ByTestId -> Looks for data-testid things in your code.

  const linkElement = screen.getByText(/Pat's Sam/i);
  expect(linkElement).toBeInTheDocument();
});
