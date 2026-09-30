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

// P-Task

function obyektBorArrayga<T>(obj: Record<string, T>): [string, T][] {
  return Object.entries(obj);
}
const result = obyektBorArrayga({ c: 17, v: 43 });
console.log(result);

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
