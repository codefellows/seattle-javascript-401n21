interface Animal {
  name: string;
  type: "cat" | "dog";
}

export class Shelter {
  enqueue(name: string, type: "cat" | "dog"): void {
    // TODO(you);
  }

  dequeue(type?: "cat" | "dog"): string {
    // TODO(you);
    // If no type is given (type === undefined), return the next animal.
    // If the type is given, return the next animal of a type.
  }
}
