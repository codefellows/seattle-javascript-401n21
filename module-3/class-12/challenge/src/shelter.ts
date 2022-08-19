interface Animal {
  name: string;
  type: "cat" | "dog";
}

export class Shelter {
  friends: Animal[] = [];

  enqueue(name: string, type: "cat" | "dog"): void {
    this.friends.push({ name, type });
  }

  dequeue(type?: "cat" | "dog"): string {
    if (type === undefined) {
      const friend = this.friends.shift();
      return friend?.name ?? "";
    } else {
      const idx = this.friends.findIndex((f) => f.type === type);
      const friend = this.friends[idx];
      this.friends.splice(idx, 1);
      return friend.name;
    }
  }
}
