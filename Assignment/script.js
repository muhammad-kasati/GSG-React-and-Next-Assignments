// Task 2: Calculate sum and average
const numbers = [10, 20, 30, 40];
const calculateSumAndAverage = (arr) => {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  return { sum, average };
};
console.log(calculateSumAndAverage(numbers));

// Task 3: Remove duplicates from array
const removeDuplicates = (arr) => {
  const uniqueSet = new Set(arr);
  return Array.from(uniqueSet);
};
const stringArray = ["apple", "banana", "apple", "orange", "banana"];
console.log(removeDuplicates(stringArray));
