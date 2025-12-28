function swap<T>(a: T[], aIndex: number, b: T[], bIndex: number) {
  const original = a[aIndex];
  a[aIndex] = b[bIndex];
  b[bIndex] = original;
}

let a = ["test", "123"];
let b = ["a", "b", "c"];
swap<string>(a, 0, b, 2);
console.log(a);
console.log(b);
