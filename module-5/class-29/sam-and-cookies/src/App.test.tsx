import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App, { setBodyIfNotGet } from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("updates method state", async () => {
  render(<App />);
  // NOthing I can do to get method or setMethod

  await fireEvent.select(screen.getByTestId("method-selector"), "POST");

  expect(screen.getByText("POST")).toBeInTheDocument();
});

test("updateBodyIfNotGet", async () => {
  render(<App />);
  await fireEvent.select(screen.getByTestId("method-selector"), "GET");
  await fireEvent.change(screen.getByTestId("body"), JSON.stringify("{}"));
  // etc
});

test("setBodyIfNotGet", () => {
  const state = { method: "GET" };
  const state2 = setBodyIfNotGet(state, {});
  expect(state2.body).toBeUndefined();
});
