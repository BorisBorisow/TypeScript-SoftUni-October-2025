// // Generic functions

// // function echo(arg: unknown): unknown{
// //     return arg
// // }

// function echo<T>(arg: T): T {
//   return arg;
// }

// let val = echo(5); //
// console.log(val.toFixed(2));

// function makeTuple<T, V>(a: T, b: V): [T, V] {
//   return [b, a];
// }

// const firstTuple = makeTuple(1, "2");

// // Generic interfaces

// interface GenericConstructor<T, V> {
//   (arg1: T, arg2: V): [T, V];
// }

// const generatedFn: GenericConstructor<string, string> = (arg1, arg2) => {
//   return [arg1, arg2];
// };
// const generatedFn1: GenericConstructor<number, string> = (arg1, arg2) => {
//   return [arg1, arg2];
// };

// const sample = generatedFn("Hello", "World");
// const sample1 = generatedFn1("Hello", "World");

// type Point = { x: number; y: number };
// type Color = { red: string; blue: string };

// // type PartialPoint = { [K in keyof Point]?: Point[K] };
// // type PartialColor = { [K in keyof Color]?: Color[K] };

// type Optional<T> = { [K in keyof T]?: T[K] };

// type PartialPoint = Optional<Point>;
// type PartialColor = Optional<Color>;

// // ----------------------------------------------------------
// // type hasAge
// // - accepts generic type T
// // - hasAge wiil be "yes" if T has prop age: number
// // - hasAge will be "no" if T DOESNT have prop age

// //{name: string, age: number}
// //{name: string, school: string}

// type hasAge<T> = T extends {age: number}? "yes" : "no"

// type validAge = hasAge<{name: string, age: number}>
// type invalidAge = hasAge<{"some"}
