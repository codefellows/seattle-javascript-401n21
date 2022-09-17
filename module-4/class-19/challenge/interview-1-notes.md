# Sum of Odds in Tree

> Find the sum of all the odd numbers in a binary search tree.

- What is a Binary Search Tree?
  - A binary tree where all values in the left-descendants are less than the node's value, and all values in the right-descendants are greater than the node's value.
- What is an odd number?
  - An odd number is a number that is not divisible by 2, that is, `n % 2 === 1` or `n % 2 !== 0`.
- Example: `[8 [3 [1 [6 [4 7]]]] [10 [14 [13]]]]` -> 3 + 1 + 7 + 13 = 24
- Some potential solutions:
  - Walk & Sum. Create a sum variable, walk the tree iteratively, and add to the sum for each odd value.
    - Time complexity O(n), visits each node once. Space complexity O(1), a single 'sum' variabe.
  - Recursive Sum. The sum of odd nodes is the sum of left odd nodes + sum of right odd nodes + current node (if current node is odd).
    - Time complexity O(n), visits each node once. Space complexity O(h) (where h is the height of the tree), for the recursive calls.
  - Traverse, Filter, Sum (flatten & sum). Nothing about the output depends on the properties of a binary tree, a search tree, or a binary search tree. This solution could be as simple as `tree.inOrder().filter(n => n % 2 === 1).reduce((a, b) => a + b, 0)`.
    - Time complexity O(n), each node visited once. Space complexity O(n), need an entire flat copy of the tree.
