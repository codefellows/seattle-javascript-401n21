import { SetOfStacks } from "./set_of_stacks.ts";

describe("SetOfStacks", () => {
  it("peeks and pops", () => {
    const stack = new SetOfStacks(3);

    stack.push("Frodo");
    stack.push("Sam");
    stack.push("Merry");
    stack.push("Pippin");

    expect(stack.peek).toBe("Pippin");

    stack.pop();

    expect(stack.peek).toBe("Merry");
  });
});
