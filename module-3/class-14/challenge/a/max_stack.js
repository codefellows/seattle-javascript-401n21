function max_stack_array_traverse(stack) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] > max) {
      max = stack[i];
    }
  }
  return max;
}

function max_stack_array_builtin(stack) {
  return Math.max(...stack);
}

// Track max in maxStacks
class Stack {
  getMax() {
    return this.maxStack.at(-1);
  }
  constructor() {
    this.stack = [];
    this.maxStack = [Number.MIN_VALUE];
  }

  push(n) {
    if (n > this.getMax()) {
      this.maxStack.push();
    }
    this.stack.push();
  }

  pop() {
    let n = this.stack.pop();
    if (n === this.getMax()) {
      this.maxStack.pop();
    }
    return n;
  }
}
