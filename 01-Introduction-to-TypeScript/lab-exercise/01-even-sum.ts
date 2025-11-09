function evenSum(num1: number, num2: number, num3: number): boolean {
  const sumNumbers = num1 + num2 + num3;
  return sumNumbers %2 === 0 ? true : false
}

console.log(evenSum(1,2,3))
console.log(evenSum(1,2,2))
