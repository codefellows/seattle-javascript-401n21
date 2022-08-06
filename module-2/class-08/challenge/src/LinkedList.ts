import { Collection, display } from "./Collection";

export class LinkedList<T> implements Collection<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;
  size = 0;

  static zip<T>(ll1: LinkedList<T>, ll2: LinkedList<T>): LinkedList<T> {
    const zipped = new LinkedList<T>();

    let ll1h = ll1.head;
    let ll2h = ll2.head;

    while (ll1h || ll2h) {
      if (ll1h) {
        zipped.append(ll1h.item);
        ll1h = ll1h.next;
      }
      if (ll2h) {
        zipped.append(ll2h.item);
        ll2h = ll2h.next;
      }
    }

    return zipped;
  }

  insert(item: T) {
    this.head = {
      item: item,
      next: this.head,
    };
    if (this.tail === undefined) {
      this.tail = this.head;
    }
    this.size += 1;
  }

  includes(item: T): boolean {
    let tracker = this.head;

    while (tracker !== undefined) {
      if (tracker.item === item) {
        return true;
      }
      // move forward
      tracker = tracker.next;
    }

    return false;
  }

  toString(): string {
    let str = "";

    let tracker = this.head;
    while (tracker !== undefined) {
      // Add this node to the string
      const strItem = display(tracker.item);
      str += `{ ${strItem} } -> `;
      tracker = tracker.next;
    }

    str += "NULL";

    return str;
  }

  append(item: T): void {
    if (this.tail === undefined) {
      this.insert(item);
    } else {
      this.tail = this.tail.next = { item };
      this.size += 1;
    }
  }

  insertBefore(needle: T, item: T) {
    let tracker = this.head;
    while (tracker?.next !== undefined) {
      if (tracker.next.item === needle) {
        tracker.next = {
          item,
          next: tracker.next,
        };
        this.size += 1;
        return;
      }
      tracker = tracker.next;
    }
  }

  insertAfter(needle: T, item: T) {
    let tracker = this.head;
    while (tracker !== undefined) {
      if (tracker.item === needle) {
        tracker.next = {
          item,
          next: tracker.next,
        };
        this.size += 1;
        return;
      }
      tracker = tracker.next;
    }
  }

  kth(k: number): T {
    let tracker = this.head;
    while (tracker !== undefined) {
      if (k === 0) {
        return tracker.item;
      }
      k -= 1;
      tracker = tracker.next;
    }
    throw new Error("Went off end of list");
  }

  kthFromEnd(k: number): T {
    return this.kth(this.size - k - 1);
  }
}

interface Node<T> {
  item: T;
  next?: Node<T> | undefined;
}
