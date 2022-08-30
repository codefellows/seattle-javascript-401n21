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

  predR = () => (this.right === undefined ? this : predR(this.right));
  pred = () => (this?.left === undefined ? this : predR(this.left));
  succL = () => (this.left === undefined ? this : succL(this.left));
  succ = () => (this?.right === undefined ? this : succL(this.right));

  delete(value) {
    if (value > this.value) {
      this.right = this.right?.delete(value);
    } else if (value < this.value) {
      this.left = this.left?.delete(value);
    } else {
      if (this.left === undefined && this.right === undefined) {
        return undefined;
      } else {
        if (this.left === undefined) {
          this.value = this.succ().value;
          this.right = this.right?.delete(this.value, this.right);
        } else {
          this.value = this.pred().value;
          this.left = this.left?.delete(this.value);
        }
      }
    }

    return this.balance();
  }

  balance() {
    this.decreaseLevel();
    let t = this.skew();
    t.right = t.right?.skew();
    if (t.right) {
      t.right.right = t.right.right?.skew();
    }

    t.split();
    t.right = t.right?.split();
  }

  decreaseLevel() {
    let shouldBe = Math.min(t.left?.level ?? 0, t.right?.level ?? 0);
    if (shouldBe < this.level) {
      this.level = shouldBe;
      if (this.right && shouldBe < this.right.level) {
        this.right.level = shouldBe;
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
