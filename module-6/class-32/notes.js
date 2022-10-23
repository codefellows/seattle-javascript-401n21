/** RECURSION */
/* To understand... */

/*
Recurscion is a form of iteration
It needs an initial condition, an end condition (base case), and a recursive case (aka what you do)
*/

// Every recursive function:
const recurse = (initialValue) => {
  if (/* base case */) return /* base value */;

  // One or more recursive call
  // Return calculated value
}


const depth = (node /** initial condition */) => {
  if (node == undefined) return 0; /** base case or end condition */

  // The rest is the recursive case
  let left = depth(node.left);
  let right = depth(node.right);

  return Math.max(left, right) + 1;
};




depth({value /* ... */}); // initial condition
