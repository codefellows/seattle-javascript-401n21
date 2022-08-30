const { BinarySearchTree } = require("./binary_search_tree.js");
const { default: BST } = require("./bst");

describe("Binary Search Tree", () => {
  const tree = new BinarySearchTree();
  for (const i of [2, 3, 11, 6, 9, 7, 5, 1]) {
    tree.add(i);
  }

  it("looks up whether an item is in the tree", () => {
    expect(tree.contains(3)).toBe(true);
    expect(tree.contains(8)).toBe(false);
  });

  it("keeps balance", () => {
    const t2 = new BinarySearchTree();
    for (let i = 0; i < 100; i++) {
      t2.add(i);
    }
    expect(t2.depth()).toBe(9);
  });
});

describe("BST", () => {
  it("keeps balance", () => {
    let t = BST.add(0);
    for (let i = 0; i < 100; i++) {
      t = BST.add(i, t);
    }
    expect(BST.depth(t)).toBe(9);
  });
});
