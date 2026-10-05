/* Project Standarts:
- Logging standarts
- Naming standart:
    function, method, variable => CAMEL
    class => PASCAL
    folder file => KEBAB
    css => SNAKE
- Error handling

*/

/*
Traditional API
Rest API
GraphQL API
...
*/

/*
Traditional Frontend => SSR => EJS
Modern Frontend => SPA => React, Vue, Angular
*/

// R-TASK

function calculate(str: string): number {
    return str
        .split('+')
        .reduce((sum, num) => sum + Number(num.trim()), 0);
}

console.log(calculate("1+3"));      // 4
console.log(calculate("10+20"));    // 30
console.log(calculate("1+2+3+4"));  // 10

// Q-TASK

// interface Car {
//     name: string;
//     model: string;
// }

// const car: Car = { name: "BMW", model: "M3" };

// console.log(hasProperty(car, "model"));
// console.log(hasProperty(car, "year"));

// const propertyName = "model";

// if (hasProperty(car, propertyName)) {
//     console.log(car[propertyName]); //
// }

// function hasProperty(car: Car, arg1: string): boolean {
//     return arg1 in car;
// }


// function hasProperty(obj, str) {
//     return str in obj;
// }

// console.log(hasProperty({name: "BMW", model: "M3"}, "model")); // true
// console.log(hasProperty({name: "BMW", model: "M3"}, "year"));  // false

// // P-Task

// function obyektBorArrayga<T>(obj: Record<string, T>): [string, T][] {
//   return Object.entries(obj);
// }
// const result = obyektBorArrayga({ c: 17, v: 43 });
// console.log(result);

//  O-TASK

// function calculateSumOfNumbers(arr: unknown[]): number {
//   return arr.reduce<number>((sum, item) => {
//     if (typeof item === "number" && !Number.isNaN(item)) {
//       return sum + item;
//     }
//     return sum;
//   }, 0);
// }

// const result: number = calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]);
// console.log(result); // Natija: 45

// N-task

// function palindromCheck(input: string): boolean {
//     const reverseInput = input.toLowerCase().split("").reverse().join("");
//     if (input.toLowerCase() === reverseInput) {
//         return true;
//     }
//     return false;

// }

// console.log(palindromCheck("non"))

// M-Task

// interface SquareResult {
//   number: number;
//   square: number;
// }

// function getSquareNumbers(numbers: number[]): SquareResult[] {
//   return numbers.map((num: number): SquareResult => ({
//     number: num,
//     square: num * num
//   }));
// }

// console.log(getSquareNumbers([1, 2, 3]));
