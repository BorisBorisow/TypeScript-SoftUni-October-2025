function custopTypeGuard(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every((el) => typeof el === "string")
  );
}
console.log(custopTypeGuard({}));
console.log(custopTypeGuard({ test: "one" }));
console.log(custopTypeGuard([]));
console.log(custopTypeGuard(undefined));
console.log(custopTypeGuard(null));
console.log(custopTypeGuard([12, 13]));
console.log(custopTypeGuard(["test", 123]));
console.log(custopTypeGuard(["a", "b", "c"]));
