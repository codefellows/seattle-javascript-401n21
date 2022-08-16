export class SetOfStacks<T> {
  // Must use the below Stack class internally.
  // When you need to create a new stack, do so with:
  //
  //    let stack = new Stack<T>(this.maxHeight);
  //
  constructor(private readonly maxHeight: number) {}

  push(t: T): void {
    throw new Error("TODO(you)");
  }

  pop(): T {
    throw new Error("TODO(you)");
  }

  get peek(): T {
    throw new Error("TODO(you)");
  }

  // BONUS QUESTION
  get size(): number {
    throw new Error("TODO(you)");
  }
}

class Stack<T> {
  readonly _arr: T[] = [];

  constructor(private readonly maxHeight: number) {}

  push(t: T) {
    if (this._arr.length > this.maxHeight) {
      throw new Error("Stack toppled over!");
    }
    this._arr.push(t);
  }

  pop() {
    return this._arr.pop();
  }

  get peek(): T | undefined {
    return this._arr.at(-1);
  }

  get size(): number {
    return this._arr.length;
  }
}
