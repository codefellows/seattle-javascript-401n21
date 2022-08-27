const { Node, BinaryTree } = require("./binary_tree.js");

class BinarySearchTreeNode extends Node {
  add(number) {
    if (number === this.value) {
      // Nothing, we already have this number!
    } else if (number > this.value) {
      if (!this.right) {
        this.right = new BinarySearchTreeNode(number);
      } else {
        this.right.add(number);
      }
    } else if (number < this.value) {
      if (!this.left) {
        this.left = new BinarySearchTreeNode(number);
      } else {
        this.left.add(number);
      }
    }
  }

  contains(number) {
    if (this.value === number) {
      return true;
    } else if (this.value < number) {
      if (this.right) {
        return this.right.contains(number);
      } else {
        return false;
      }
    } else if (this.value > number) {
      if (this.left) {
        return this.left.contains(number);
      } else {
        return false;
      }
    }
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super(undefined);
  }

  add(number) {
    if (!this.root) {
      this.root = new BinarySearchTreeNode(number);
    } else {
      this.root.add(number);
    }
  }

  contains(number) {
    if (!this.root) {
      return false;
    }
    return this.root.contains(number);
  }
}

module.exports = { BinarySearchTree };
