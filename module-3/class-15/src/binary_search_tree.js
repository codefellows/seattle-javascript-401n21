const { Node, BinaryTree } = require("./binary_tree.js");

class BinarySearchTreeNode extends Node {
  constructor(value, level, left, right) {
    super(value, left, right);
    this.level = level ?? 1;
  }

  skew() {
    if (this.left?.level !== this.level) return this;
    const l = this.left;
    this.left = l.left;
    l.left = this;
    return l;
  }

  split() {
    if (this.right?.right?.level !== this.level) return this;
    let r = this.right;
    this.right = r.left;
    r.left = this;
    r.level += 1;
    return r;
  }

  add(number) {
    if (number === this.value) {
      // Nothing, we already have this number!
    } else if (number > this.value) {
      if (!this.right) {
        this.right = new BinarySearchTreeNode(number);
      } else {
        this.right = this.right.add(number);
      }
    } else if (number < this.value) {
      if (!this.left) {
        this.left = new BinarySearchTreeNode(number);
      } else {
        this.left = this.left.add(number);
      }
    }

    return this.skew().split();
  }

  depth() {
    return 1 + Math.max(this.left?.depth() ?? 0, this.right?.depth() ?? 0);
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
      this.root = this.root.add(number);
    }
  }

  depth() {
    return this.root?.depth() ?? 0;
  }

  contains(number) {
    if (!this.root) {
      return false;
    }
    return this.root.contains(number);
  }
}

module.exports = { BinarySearchTree };
