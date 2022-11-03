import React from "react";
import { render } from "@testing-library/react";
import { When } from "./functions";

const renderWhen = (condition: boolean) =>
  render(
    <When condition={condition}>
      <p>Hello!</p>
    </When>
  );

test("When True", () => {
  const whenTrue = renderWhen(true);
  expect(whenTrue.queryByText("Hello!")).toBeTruthy();
});

test("When False", () => {
  const whenFalse = renderWhen(false);
  expect(whenFalse.queryByText("Hello!")).toBeFalsy();
});
