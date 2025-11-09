// function unknownRepsponse(data: unknown): string {
//   if (
//     data &&
//     typeof data === "object" &&
//     "value" in data &&
//     typeof data.value === "string"
//   ) {
//     return data.value;
//   }
//   return "-";
// }

function unknownRepsponse(data: unknown): string {
  const res = data as { code: number; text: string; value?: unknown };
  if (typeof res.value === "string") {
    return res.value;
  }
  return "-";
}

console.log(unknownRepsponse({ code: 200, text: "Ok", value: [1, 2, 3] }));
console.log(
  unknownRepsponse({ code: 301, text: "Moved Permanently", value: "New Url" })
);
console.log(
  unknownRepsponse({
    code: 201,
    text: "Created",
    value: { name: "Test", age: 20 },
  })
);
console.log(
  unknownRepsponse({ code: 201, text: "Created", value: "Object Created" })
);
console.log(unknownRepsponse({ code: 404, text: "Not found" }));
console.log(unknownRepsponse({ code: 500, text: "Internal Server Error" }));
