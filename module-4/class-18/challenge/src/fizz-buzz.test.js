const {Tree, fizzBuzz} = require("./tree");

describe("FizzBuzzTree", () => {
  it("makes a new tree with all elements fizzbuzzed", () => {
    const tree = new Tree(1, [
      new Tree(2),
      new Tree(3, [new Tree(4, [new Tree(5), new Tree(6)]), new Tree(7)]),
      new Tree(8, [new Tree(9, [new Tree(10), new Tree(11)]), new Tree(12)]),
      new Tree(13, [new Tree(14, [new Tree(15), new Tree(16)])]),
    ]);

    const fizzBuzzTree = fizzBuzz(tree);

    expect(tree).not.toBe(fizzBuzzTree);
    expect(fizzBuzzTree.preOrder()).toStrictEqual([
      1,
      [2],
      ["fizz", [4, ["buzz"], ["fizz"]], [7]],
      [8, ["fizz", ["buzz"], [11]], ["fizz"]],
      [13, [14, ["fizzbuzz"], [16]]],
    ]);
  });
});
