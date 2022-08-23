function balancedBrackets(str) {
  // The stack of expected closing braces, in order
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let c = str[i];

    if (c === stack[stack.length - 1]) {
      // c is an expected closing character
      stack.pop();
      continue;
    }

    if (c === "]" || c === "}" || c === ")") {
      // c is an unexpected closing character, so we are unbalanced.
      return false;
    }

    if (c === "[") {
      stack.push("]");
    } else if (c === "{") {
      stack.push("}");
    } else if (c === "(") {
      stack.push(")");
    }
    // Pushed the appropriate close characters for the opening characters
  }

  // Made it through the entire string. It's balanced if the stack is empty!
  return stack.length === 0;
}

module.exports = balancedBrackets;
