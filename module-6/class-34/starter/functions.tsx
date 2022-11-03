import React, { ReactElement } from "react";
// export { When } from "react-if";

/**
 * Write a react component named `When`.
 * `When` takes one property, `condition`, a `boolean` value.
 * It also takes `children`, which is a `ReactElement`.
 * Finally, the return type of a JSX Component in TypeScript is also `ReactElement`.
 * The component should render the children when condition is true.
 */
export function When({
  condition,
  children,
}: {
  condition: boolean;
  children: ReactElement;
}): ReactElement /*| null*/ {
  return condition ? children : <></>;
  // if (condition) return children;
  // // No ending `return` returns undefined
  // // return null;
  // return <></>;
}
