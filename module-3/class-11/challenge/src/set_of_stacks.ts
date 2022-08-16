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

export class SetOfStacks<T> {
  // Must use the above Stack class internally
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
}
