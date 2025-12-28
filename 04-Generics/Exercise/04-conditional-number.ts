type stringOrNumber<T> = T extends number ? number : string;

function conditionalNumber<T>(param: stringOrNumber<T>) {
  console.log(typeof param === "number" ? param.toFixed(2) : param);
}

conditionalNumber<number>(20.3555);
conditionalNumber<string>("wow");
conditionalNumber<boolean>("a string");

// conditionalNumber<boolean>(30);
// conditionalNumber<number>("test"); //TS error: type 'number' is not assignable to parameter of type 'string'
// //TS error: type 'string' is not assignable to parameter of type 'number'
