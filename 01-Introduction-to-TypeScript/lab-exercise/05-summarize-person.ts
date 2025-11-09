function summarizePerson(
  id: number,
  firstName: string,
  lastName: string,
  age: number,
  middleName?: string,
  hobbies?: string[],
  workinfo?: [string, number]
): [number, string, number, string, string] {
  const fullName =
    middleName && middleName.trim()
      ? `${firstName} ${middleName} ${lastName}`
      : `${firstName} ${lastName}`;

  const hobbiesSummary =
    hobbies && hobbies.length > 0 ? hobbies.join(", ") : "-";

  const workinfoSummary = workinfo ? `${workinfo[0]} -> ${workinfo[1]}` : "-";

  return [id, fullName, age, hobbiesSummary, workinfoSummary];
}
console.log(
  summarizePerson(
    12,
    "Eliot",
    "Des",
    20,
    "Braylen",
    ["tennis", "football", "hiking"],
    ["Sales Consultant", 2500]
  )
);

console.log(
  summarizePerson(20, "Mary", "Trent", 25, undefined, ["fitness", "rowing"])
);
console.log(summarizePerson(21, "Joseph", "Angler", 28));
console.log(summarizePerson(21, "Kristine", "Neva", 23, ""));
