function preOrder(root) {
  // Root, Left, Right
  // Return a single array
  let traversal = [];
  traversal.push(root.value); // Root

  if (root.left) {
    // Left
    let leftTraversal = preOrder(root.left);
    traversal = traversal.concat(leftTraversal);
  }

  // Right
  if (root.right) {
    let rightTraversal = preOrder(root.right);
    traversal = traversal.concat(rightTraversal);
  }

  return traversal;
}

const preOrderOneLine = (root) =>
  root ? [root.value, ...preOrder(root.left), ...preOrder(root.right)] : [];

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left; // A Node
    this.right = right; // A Node
  }

  preOrder() {
    // Root, Left, Right
    // Return a single array
    let traversal = [];
    traversal.push(this.value); // Root

    if (this.left) {
      // Left
      let leftTraversal = this.left.preOrder();
      traversal = traversal.concat(leftTraversal);
    }

    // Right
    if (this.right) {
      let rightTraversal = this.right.preOrder();
      traversal = traversal.concat(rightTraversal);
    }

    return traversal;
  }

  inOrder() {}
  postOrder() {}
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  preOrder() {
    // return this.root.preOrder();
    return preOrder(this.root);
  }
  inOrder() {}
  postOrder() {}
}

module.exports = { Node, BinaryTree };
