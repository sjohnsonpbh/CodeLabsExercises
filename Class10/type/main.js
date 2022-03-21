const addNumbers = (a, b) => a + b;

const sumWithNumbers: number = addNumbers(4, 3);
const sumWithMixed: number = addNumbers(4, "3");
const sumWithStrings: number = addNumbers("4", "3");

console.log("SUM w/ Numbers:", sumWithNumbers, "~>", typeof sumWithNumbers);
console.log("SUM w/ Mixed:", sumWithMixed, "~>", typeof sumWithMixed);
console.log("SUM w/ Strings:", sumWithStrings, "~>", typeof sumWithStrings);
