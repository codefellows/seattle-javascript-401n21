import { Shelter } from "./shelter.ts";

describe("Animal Shelter", () => {
  it("gets the next cat", () => {
    const shelter = new Shelter();

    shelter.enqueue("Pippin", "cat");
    shelter.enqueue("Oliver", "dog");
    shelter.enqueue("Greylien", "cat");

    expect(shelter.dequeue("cat")).toBe("Pippin");
    expect(shelter.dequeue("cat")).toBe("Greylien");
    expect(shelter.dequeue("cat")).toBe(undefined);
    expect(shelter.dequeue("cat")).toBe(undefined);
  });

  it("gets the next dog", () => {
    const shelter = new Shelter();

    shelter.enqueue("Pippin", "cat");
    shelter.enqueue("Oliver", "dog");
    shelter.enqueue("Greylien", "cat");

    expect(shelter.dequeue("dog")).toBe("Oliver");
    expect(shelter.dequeue("dog")).toBe(undefined);
    expect(shelter.dequeue("dog")).toBe(undefined);
  });

  it("gets the next friend", () => {
    const shelter = new Shelter();

    shelter.enqueue("Pippin", "cat");
    shelter.enqueue("Oliver", "dog");
    shelter.enqueue("Greylien", "cat");

    expect(shelter.dequeue()).toBe("Pippin");
    expect(shelter.dequeue()).toBe("Oliver");
    expect(shelter.dequeue()).toBe("Greylien");
    expect(shelter.dequeue()).toBe(undefined);
  });

  it("recovers after empty", () => {
    const shelter = new Shelter();

    shelter.enqueue("Pippin", "cat");
    shelter.enqueue("Oliver", "dog");
    shelter.enqueue("Greylien", "cat");

    expect(shelter.dequeue()).toBe("Pippin");
    expect(shelter.dequeue()).toBe("Oliver");
    expect(shelter.dequeue()).toBe("Greylien");
    expect(shelter.dequeue()).toBe(undefined);

    shelter.enqueue("Puffinus", "cat");
    expect(shelter.dequeue("dog")).toBe(undefined);
    expect(shelter.dequeue()).toBe("Puffinus");
    expect(shelter.dequeue()).toBe(undefined);
  });
});
