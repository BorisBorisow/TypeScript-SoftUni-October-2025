// -----------Unions--------
function printMessage(text: string | string[]) {
  console.log(text.length);
  if (typeof text === "string") {
    console.log(text);
  } else {
    console.log(text.join(" "));
  }
}

printMessage("Some Text 2025");
printMessage(["Some Text 2025", "thirty"]);

// -------- Interfaces ----------
let sucessStatus: 200 | boolean | string;

sucessStatus = 200;
// sucessStatus = 500; - error
sucessStatus = true;

// -------- Type Aliases ----------
// type User = {
//   firstName: string;
//   lastName: string;
//   email: string;
// };

const user1: User = {
  firstName: "Sis",
  lastName: "Borisova",
  email: "s.borisova@abv.bg",
};
const user2: User = {
  firstName: "Bo",
  lastName: "Borisov",
  email: "b.borisov@abv.bg",
};

type Address = {
  country: string;
  city?: string;
};

const address1: Address = {
  country: "Bulgaria",
  city: "Montana",
};

const address2: Address = {
  country: "Germany",
};

type Person = User & Address;

const person1: Person = {
  firstName: "Ivan",
  lastName: "Ivanov",
  email: "i.ivanov@test.com",
  country: "Bulgaria",
  city: "Sofia",
};

// -------- "keyof" Operator ----------
type AddressKeys = keyof Address;

function printCity(arg: User | Person) {
  if ("city" in arg) {
    console.log(arg.city);
  }
}

printCity(person1);

// -------------- as const
const person = {
  name: "Alice",
  age: 25,
} as const;

// person.age = 26; //- error

console.log(person);

// -------- satisfies Usage

const nextUser = {
  firstName: "Marta",
  lastName: "Vanchova",
  email: "m.vanchova@test.com",
  role: "it",
};

nextUser satisfies User;

// -------- Mapped types

type Point = {
  x: number;
  y: number;
  z: number;
};

type optionalPoint = {
  [key in keyof Point]?: Point[key];
};

const point1: Point = {
  x: 5,
  y: 10,
  z: -3,
};

// -------- Recursive types
type TreeNode = {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
};
