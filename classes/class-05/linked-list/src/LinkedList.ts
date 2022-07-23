import { Collection, display } from "./Collection";

export class LinkedList<T> implements Collection<T> {
  private head?: LinkedListNode<T>;

  insert(value: T) {
    this.head = { value, next: this.head };
  }

  includes(value: T): boolean {
    let node = this.head;
    while (node) {
      if (node.value === value) return true;
      node = node.next;
    }
    return false;
  }

  toString(): string {
    const str = [];
    let node = this.head;
    while (node) {
      str.push(`{ ${display(node.value)} }`);
      node = node.next;
    }
    str.push("NULL");
    return str.join(" -> ");
  }
}

interface LinkedListNode<T> {
  value: T;
  next?: LinkedListNode<T>;
}
