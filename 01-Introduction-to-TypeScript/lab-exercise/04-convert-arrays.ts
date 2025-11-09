function convertArrays(arr: string[]): [string, number] {
  const concatText = arr.join("");
  const lengthText = concatText.length;
  return [concatText, lengthText];
}

console.log(
  convertArrays(["Today", " is", " a ", "nice", " ", "day for ", "TypeScript"])
);
console.log(["Today is a nice day for TypeScript", 34]);
