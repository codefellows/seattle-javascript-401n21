export interface Tree<V = number> {
  v: V;
  children?: Tree<V>[];
}

/**
 * WITHOUT USING RECURSION, implement the below function.
 * It should return the total number of tree nodes in this tree.
 * That is, a tree with no children would return 1.
 *
 * Yes, the challenge here is using another data structure!
 * This will track "where" in the tree the algorithm is.
 * You have seen _two_ data structures that work for this.
 *
 * HINT: You have seen: Linked Lists, Stacks, Queues, Trees, and Binary Trees.
 */
export function treeCount<V>(tree: Tree<V>): number {
  let count = 0;

  // This is traversal!
  // It _always_ looks like this:
  // Start with a queue or a stack.
  // We start looking at the input value(s).
  const queue = [tree];

  // So long as we have more things to look at, keep iterating!
  while (queue.length > 0) {
    // Get the "next" thing (pop/dequeue, shift/pop js)
    const next = queue.shift()!;

    // Find the neighbors, or the things we haven't looked at yet.
    // In a tree, that's the children.
    // In graph, it's the neighbors of a node that we haven't seen _yet_.
    let children = next.children ?? [];
    // Add those things to our collection of "where do we go"
    queue.push(...children);

    count += 1;
  }

  return count;
  // return 1 + (tree.children ?? []).map(treeCount).reduce((a, b) => a + b, 0);
}

test("treeCount", () => {
  const tree: Tree = {
    v: 1,
    children: [
      { v: 1, children: [{ v: 1 }, { v: 1 }, { v: 1 }] },
      { v: 1, children: [{ v: 1 }, { v: 1, children: [{ v: 1 }] }] },
    ],
  };

  expect(treeCount(tree)).toBe(9);
});
