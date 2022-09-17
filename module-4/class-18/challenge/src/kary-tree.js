class KAryTree {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  addChild(tree) {
    this.children.push(tree);
  }

  inOrder() {
    return [this.value, this.children.map((child) => child.inOrder())].flat();
  }
}

function fizzBuzz(tree) {
  // TODO
  return tree;
}

module.exports = {
  KAryTree,
  fizzBuzz,
};
