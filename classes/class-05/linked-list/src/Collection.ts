export interface Collection<T> {
  insert(t: T): void;
  includes(t: T): boolean;
  toString(): string;
}
