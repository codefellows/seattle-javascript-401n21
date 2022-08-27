const { BinaryTree, Node } = require("./binary_tree.js");

describe("Binary Tree", () => {
  //          1
  //        /  \
  //       7    9
  //      / \    \
  //     2   6    9
  //        / \   /
  //       11  5 5
  const tree = new BinaryTree(
    new Node(
      1,
      new Node(7, new Node(2), new Node(6, new Node(5), new Node(11))),
      new Node(9, undefined, new Node(9, new Node(5)))
    )
  );

  it("does an pre-order traversal (root, left, right)", () => {
    expect(tree.inOrder()).toEqual([1, 7, 2, 6, 5, 11, 9, 9, 5]);
  });

  it("does an post-order traversal (left, right, root)", () => {
    expect(tree.inOrder()).toEqual([2, 3, 11, 6, 7, 5, 9, 9, 1]);
  });

  it("does an in-order traversal (left, root, right)", () => {
    expect(tree.inOrder()).toEqual([2, 7, 5, 6, 11, 1, 9, 9, 5]);
  });
});
