type User = {
  id: number | string;
  username: string;
  passwordHash: string | string[];
  status: "Locked" | "Unlocked" | "Deleted";
  email?: string;
};

function validateUser(data: object): data is User {
  const isIdValid =
    "id" in data &&
    ((typeof data.id === "number" && data.id > 100) ||
      (typeof data.id === "string" && data.id.length === 14));

  const isUsernameValid =
    "username" in data &&
    typeof data.username === "string" &&
    data.username.length >= 5 &&
    data.username.length <= 10;

  const isPasswordHashValid =
    "passwordHash" in data &&
    ((typeof data.passwordHash === "string" &&
      data.passwordHash.length === 20) ||
      (Array.isArray(data.passwordHash) &&
        data.passwordHash.length === 4 &&
        data.passwordHash.every((el) => typeof el === "string") &&
        data.passwordHash.every((el) => el.length === 8)));

  const isStatusOK =
    "status" in data &&
    typeof data.status === "string" &&
    ["Locked", "Unlocked"].includes(data.status);

  return isIdValid && isUsernameValid && isPasswordHashValid && isStatusOK;
}

console.log(
  validateUser({
    id: 120,
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Deleted",
    email: "something",
  })
);
console.log(
  validateUser({
    id: "1234-abcd-5678",
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Unlocked",
  })
);
console.log(
  validateUser({
    id: "20",
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Deleted",
    email: "something",
  })
);
console.log(
  validateUser({
    id: 255,
    username: "Pesho",
    passwordHash: ["asdf1245", "qrqweggw", "123-4567", "98765432"],
    status: "Locked",
    email: "something",
  })
);
console.log(
  validateUser({
    id: "qwwe-azfg-ey38",
    username: "Someone",
    passwordHash: ["qwezz8jg", "asdg-444", "12-34-56"],
    status: "Unlocked",
  })
);
console.log(
  validateUser({
    id: 1344,
    username: "wow123",
    passwordHash: "123456-123456-1234567",
    status: "Locked",
    email: "something@abv.bg",
  })
);
