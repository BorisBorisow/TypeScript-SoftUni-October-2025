@addCreatedOn
class User {
  constructor(public name: string, public age: number) {}

  displayUserInfo() {
    console.log(`${this.name}, Age: ${this.age}`);
  }
}

function addCreatedOn(constructor: { new (...args: any[]): User }) {
  return class extends constructor {
    createdOn = new Date().toString();
  };
}
const user1 = new User("John Doe", 30);
user1.displayUserInfo();
console.log(user1);
console.log((user1 as any).createdOn);

export {};
