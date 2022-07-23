import { Collection } from "./Collection";
import { LinkedList } from "./LinkedList";

describe("LinkedList", () => {
  it("checks if an item is included", () => {
    const list: Collection<string> = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");
    list.insert("Pippin");

    expect(list.includes("Sam")).toBe(true);
    expect(list.includes("Bilbo")).toBe(false);
  });

  class Hobbit {
    constructor(public name: string) {}
    toString() {
      return `YM ${this.name}`;
    } // YM - Young Master
  }

  it("creates a string for objects", () => {
    const list: Collection<Hobbit> = new LinkedList<Hobbit>();

    list.insert({ name: "Frodo" });
    list.insert({ name: "Sam" });
    list.insert({ name: "Merry" });
    list.insert({ name: "Pippin" });

    expect(list.toString()).toEqual(
      "{YM Frodo} -> {YM Sam} -> {YM Merry} -> {YM Pippin} -> {}"
    );
  });
});
