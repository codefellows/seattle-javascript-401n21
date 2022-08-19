interface Animal {
  name: string;
  type: "cat" | "dog";
  prev?: Animal;
  next?: Animal;
}

export class Shelter {
  next: Animal | undefined;
  prev: Animal | undefined;

  enqueue(name: string, type: "cat" | "dog"): void {
    this.next = { name, type, next: this.next };
    (!this.prev ? this : this.next.next!).prev = this.next;
  }

  dequeue(type?: "cat" | "dog"): string | undefined {
    let friend = this.prev;
    if (type !== undefined) {
      while (friend && friend?.type !== type) {
        friend = friend?.prev;
      }
    }
    if (friend === undefined) {
      return undefined;
    }
    (friend.prev ? friend.prev : this).next = friend.next;
    (friend.next ? friend.next : this).prev = friend.prev;
    return friend.name;
  }
}

export class ShelterArray {
  friends: Animal[] = [];

  enqueue(name: string, type: "cat" | "dog"): void {
    this.friends.push({ name, type });
  }

  dequeue(type?: "cat" | "dog"): string | undefined {
    if (type === undefined) {
      const friend = this.friends.shift();
      return friend?.name;
    } else {
      const idx = this.friends.findIndex((f) => f.type === type);
      const friend = this.friends[idx];
      this.friends.splice(idx, 1);
      return friend.name;
    }
  }
}
