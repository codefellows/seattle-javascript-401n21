// Your linked list from earlier labs
class LinkedList<V> {}

export class HashTable<V> {
  private data: Array<LinkedList<[string, V]>>;

  constructor(readonly capacity: number) {
    this.data = new Array(this.capacity);
  }

  get(key: string): V | never {
    // |never means this will throw if the key is not present
    throw new Error("Unimplemented");
  }

  set(key: string, value: V): void {
    throw new Error("Unimplemented");
  }

  has(key: string): boolean {
    throw new Error("Unimplemented");
  }

  keys(): string[] {
    throw new Error("Unimplemented");
  }

  hash(key: string): number {
    throw new Error("Unimplemented");
  }
}
