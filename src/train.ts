// N-task

function palindromCheck(input: string): boolean {
    const reverseInput = input.toLowerCase().split("").reverse().join("");
    if (input.toLowerCase() === reverseInput) {
        return true;
    }
    return false;

}

console.log(palindromCheck("non"))



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
