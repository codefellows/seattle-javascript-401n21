export class LinkedList<T> {
  reverse(): this {
    let next = undefined;
    let node = this.head;
    let prev = undefined;
    while (node) {
      next = node.next; // Keep track of where we are going to go
      node.next = prev; // Make the current next point backwards
      prev = node; // But keep track of the current node for next time
      node = next; // Move the node forward
    }
    this.head = prev; // Update the LL's head pointer to the last node seen
    // For this specifically, the challenge wants the code to modify the LL
    // in-place, that is, not to create a new linked list or create new nodes.
    // We need to modify each node - that's the extra challenge!
    return this;
  }

  // ASSUME Everything below is available to the candidate.
  // They ONLY need to write the above isPalindrome method.
  head: Node<T> | undefined;

  insert(t: T) {
    this.head = { item: t, next: this.head };
  }

  toString(): string {
    let node = this.head;

    let str = "";
    while (node) {
      str += `{ ${node.item} } -> `;
      node = node.next;
    }
    str += "NULL";
    return str;
  }
}

// A node tracks one item and the next node
export interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
