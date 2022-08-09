export class LinkedList<T> {
  isPalindrome(): boolean {
    // Palindrome is pretty straightforward. We could do back and front indexes,
    // or we can reverse the list and compare each pair of node items!
    let ll1 = this.head;
    let ll2 = this.reverse().head;

    // This should look like a very normal ll traversal, but with two lists at
    // the same time.
    while (ll1 && ll2) {
      // Comparison is strict equality between items
      if (ll1.item !== ll2.item) {
        // The first pair of items that aren't equal, we know it's not a pal
        return false;
      }
      ll1 = ll1.next;
      ll2 = ll2.next;
    }

    // All pairs of forward and reverse matched, so it's a palindrome!
    return true;
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

  reverse(): LinkedList<T> {
    // This is a _DIFFERENT_ algorithm than in the solution to part 1!
    // It is not in place!
    // DO NOT READ IT IF YOU ARE THE FIRST TO GO
    const ll = new LinkedList<T>();
    let node = this.head;
    while (node) {
      ll.insert(node.item);
      node = node.next;
    }

    return ll;
  }
}

// A node tracks one item and the next node
export interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
