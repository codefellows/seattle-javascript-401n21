// Your linked list from earlier labs
class LinkedList<V> {}

export class HashTable<K, V> {
  private data: Array<LinkedList<[K, V]>>;

  constructor(readonly capacity: number) {
    this.data = new Array(this.capacity);
  }

  get(key: K): V | never {
    // |never means this will throw if the key is not present
    throw new Error("Unimplemented");
  }

  set(key: K, value: V): void {
    throw new Error("Unimplemented");
  }

  has(key: K): boolean {
    throw new Error("Unimplemented");
  }

  keys(): K[] {
    throw new Error("Unimplemented");
  }

  hash(key: K): number {
    throw new Error("Unimplemented");
  }
}
