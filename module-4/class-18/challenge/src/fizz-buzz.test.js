const {KAryTree, fizzBuzz} = require("./kary-tree");

describe("FizzBuzzTree", () => {
  it("makes a new tree with all elements fizzbuzzed", () => {
    const tree = new KAryTree(1, [
      new KAryTree(2),
      new KAryTree(3, [
        new KAryTree(4, [new KAryTree(5), new KAryTree(6)]),
        new KAryTree(7),
      ]),
      new KAryTree(8, [
        new KAryTree(9, [new KAryTree(10), new KAryTree(11)]),
        new KAryTree(12),
      ]),
      new KAryTree(13, [
        new KAryTree(14, [new KAryTree(15), new KAryTree(16)]),
      ]),
    ]);

    const fizzBuzzTree = fizzBuzz(tree);

    expect(tree).not.toBe(fizzBuzzTree);
    expect(fizzBuzzTree.inOrder()).toStrictEqual([
      1,
      [2],
      ["fizz", [4, ["buzz"], ["fizz"]], [7]],
      [8, ["fizz", ["buzz"], [11]], ["fizz"]],
      [13, [14, ["fizzbuzz"], [16]]],
    ]);
  });
});
