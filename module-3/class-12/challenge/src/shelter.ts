interface Animal {
  name: string;
  type: "cat" | "dog";
  prev?: Animal;
  next?: Animal;
}

export class Shelter {
  newestFriend: Animal | undefined;
  oldestFriend: Animal | undefined;

  enqueue(name: string, type: "cat" | "dog"): void {
    this.newestFriend = { name, type, next: this.newestFriend };
    if (!this.oldestFriend) {
      this.oldestFriend = this.newestFriend;
    } else {
      this.newestFriend.next!.prev = this.newestFriend;
    }
  }

  dequeue(type?: "cat" | "dog"): string | undefined {
    let friend = this.oldestFriend;
    if (type !== undefined) {
      while (friend && friend?.type !== type) {
        friend = friend?.prev;
      }
    }
    if (friend === undefined) {
      return undefined;
    }
    if (friend?.prev) {
      friend.prev.next = friend.next;
    } else {
      this.newestFriend = friend.next;
    }
    if (friend?.next) {
      friend.next.prev = friend.prev;
    } else {
      this.oldestFriend = friend.prev;
    }
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
