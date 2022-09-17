class Tree {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  addChild(tree) {
    this.children.push(tree);
  }

  preOrder() {
    return [this.value, this.children.map((child) => child.preOrder())];
  }
}

function fizzBuzz(tree) {
  // TODO
  return tree;
}

module.exports = {
  Tree,
  fizzBuzz,
};
