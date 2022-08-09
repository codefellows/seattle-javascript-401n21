import { LinkedList } from "./LinkedList02";

describe("Linked List", () => {
  it("checks if it is a palindrom", () => {
    const ll = new LinkedList<number>();

    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);

    expect(ll.isPalindrome()).toBe(true);
  });
});
