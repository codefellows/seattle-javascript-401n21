class Tree {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  addChild(tree) {
    this.children.push(tree);
  }

  preOrder() {
    return [
      this.value,
      ...this.children.map((child) => child.preOrder()).flat(),
    ];
  }
}

function fizzBuzz(tree) {
  // TODO
  const newTree = new Tree(tree.value, tree.children);

  let newValue = "";
  if (newTree.value % 3 === 0) {
    newValue += "fizz";
  }
  if (newTree.value % 5 === 0) {
    newValue += "buzz";
  }
  if (newValue !== "") {
    newTree.value = newValue;
  }

  // if (newTree.value % 3 === 0 && newTree.value % 5 === 0) {
  //   newTree.value = "fizzbuzz";
  // }
  // if (newTree.value % 5 === 0 && newTree.value % 3 !== 0) {
  //   newTree.value = "buzz";
  // }
  // if (newTree.value % 3 === 0 && newTree.value % 5 !== 0) {
  //   newTree.value = "fizz";
  // }

  // const nodes = tree.preOrder();
  // nodes = nodes.map(fizzBuzz);
  // Change only the children
  newTree.children = tree.children.map(fizzBuzz);
  // tree.children = storedChildren;

  return newTree;
}

module.exports = {
  Tree,
  fizzBuzz,
};
