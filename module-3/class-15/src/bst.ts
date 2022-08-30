export interface Node<T> {
  value: T;
  level: number;
  left: Node<T> | undefined;
  right: Node<T> | undefined;
}

const makeBST = <T>(value: T, level = 0, left?: Node<T>, right?: Node<T>) => ({
  value,
  level,
  left,
  right,
});

const depthBST = <T>(node: Node<T> | undefined): number =>
  Math.max(depthBST(node?.left) ?? 0, depthBST(node?.right) ?? 0) + 1;

const skewBST = <T>(node: Node<T>): Node<T> =>
  node.left?.level !== node.level
    ? node
    : makeBST(
        node.left!.value,
        node.left!.level,
        node.left!.left,
        makeBST(node.value, node.level, node.left!.right, node.right)
      );

const splitBST = <T>(node: Node<T>): Node<T> =>
  node.right?.right?.level !== node.level
    ? node
    : makeBST(
        node.right.value,
        node.right.level + 1,
        makeBST(node.value, node.level, node.left?.left, node.right.left),
        node.right.right
      );

const skewsplit = <T>(node: Node<T>): Node<T> => splitBST(skewBST(node));

const addBST = <T>(value: T, node: Node<T> | undefined): Node<T> =>
  node === undefined
    ? makeBST(value)
    : skewsplit(addBST(value, node.value > value ? node.left : node.right));

const containsBST = <T>(value: T, node: Node<T> | undefined): boolean =>
  node === undefined
    ? false
    : node.value === value
    ? true
    : containsBST(value, node.value > value ? node.left : node.right);

// const deleteBST = <T>(value: T, node: Node<T> | undefined): Node<T>|undefined =>
//       return node === undefined

function decreaseLevel<T>(node: Node<T>): void {
  const shouldBe = Math.min(node.left?.level ?? 0, node.right?.level ?? 0);
  if (shouldBe < node.level) {
    node.level = shouldBe;
    if (node.right && shouldBe < node.right.level) {
      node.right.level = shouldBe;
    }
  }
}

const predR = <T>(node: Node<T>): Node<T> =>
  node.right === undefined ? node : predR(node.right);
const pred = <T>(node: Node<T>): Node<T> =>
  node?.left === undefined ? node : predR(node.left);

const succL = <T>(node: Node<T>): Node<T> =>
  node.left === undefined ? node : succL(node.left);
const succ = <T>(node: Node<T>): Node<T> =>
  node?.right === undefined ? node : succL(node.right);

function deleteBST<T>(X: T, t: Node<T> | undefined): Node<T> | undefined {
  if (t === undefined) return t;
  if (X > t.value) {
    t.right = deleteBST(X, t.right);
  } else if (X < t.value) {
    t.left = deleteBST(X, t.left);
  } else {
    if (t.left === undefined && t.right === undefined) {
      return undefined;
    } else {
      if (t.left === undefined) {
        t.value = succ(t).value;
        t.right = deleteBST(t.value, t.right);
      } else {
        t.value = pred(t).value;
        t.left = deleteBST(t.value, t.left);
      }
    }
  }

  decreaseLevel(t);
  t = skewBST(t);
  t.right = t.right ? skewBST(t.right) : undefined;
  if (t.right) {
    t.right.right = t.right.right ? skewBST(t.right.right) : undefined;
  }
  t = splitBST(t);
  t.right = t.right ? splitBST(t.right) : undefined;

  return t;
}

export default {
  depth: depthBST,
  add: addBST,
  contains: containsBST,
  delete: deleteBST,
};
