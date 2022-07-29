import { Node } from '@babel/traverse';
import { Collection, display } from './Collection';

// ES5 prototype
// const LinkedList = function() {};
// LinkedList.prototype.insert(item) {};

// class
// interface

// Three parts of a variable:
// let name: type = value;

export class LinkedList<T> implements Collection<T> {
  start: Node<T> | undefined; // or head

  insert(item: T) {
    const newNode = {
      item: item,
      next: this.start,
    };
    this.start = newNode;
  }
}

// A node tracks one item and the next node
interface Node<T> {
  item: T;
  next: Node<T> | undefined;
}
