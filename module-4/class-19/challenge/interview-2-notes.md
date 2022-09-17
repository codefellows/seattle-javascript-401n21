# Similar Files

> You are working with a file structure with only at most 2 files or folder. Each file directory has either one or two folders/files. Comparing two file different file directories, create a method that takes in 2 directory structures and compares both and determines whether or not they have the same number of individual files.

- While this problem states that there are at most 2 children per folder, we can do better and allow it to be any number of children per folder.
- What is a folder, and what is a file?
  - A folder is any node that has children, a file is a node that does not have children.
- Does this question need to know anything about the files or folders?
  - No, it only needs to count the number of files (nodes without children).
- Potential solutions
  - Iterate & Count. Iteratively walk through the tree, incrementing a counter whenever a node has no children.
    - Runtime O(n), Space O(1).
  - Recurisve Sum. If no children, return 1. Otherwise, recursively get count of both children and return them added together.
    - Runtime O(n), Space O(h).
