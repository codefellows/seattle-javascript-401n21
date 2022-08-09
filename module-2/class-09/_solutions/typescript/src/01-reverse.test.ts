import { LinkedList } from "./LinkedList01";

describe("Linked List", () => {
  it("can reverse itself", () => {
    const list = new LinkedList<string>();

    list.insert("c");
    list.insert("b");
    list.insert("a");

    expect(list.toString()).toEqual("{ a } -> { b } -> { c } -> NULL");

    const list2 = list.reverse();

    expect(list2.toString()).toEqual("{ c } -> { b } -> { a } -> NULL");
  });

  it("can reverse in place", () => {
    const list = new LinkedList<string>();

    list.insert("3");
    list.insert("2");
    list.insert("1");

    const list2 = list.reverse();

    const str = list2.toString();
    expect(str).toEqual("{ 3 } -> { 2 } -> { 1 } -> NULL");
    expect(list2).toBe(list);
  });
});
