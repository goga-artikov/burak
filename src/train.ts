console.log("Training model...");
// M-Task

interface SquareResult {
  number: number;
  square: number;
}

function getSquareNumbers(numbers: number[]): SquareResult[] {
  return numbers.map((num: number): SquareResult => ({
    number: num,
    square: num * num
  }));
}

console.log(getSquareNumbers([1, 2, 3]));
