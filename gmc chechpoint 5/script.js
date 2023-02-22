const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

// Concatenate both arrays
const allElements = set1.concat(set2);

// Use Set to remove duplicates
const distinctElements = new Set(allElements);

// Calculate sum of distinct elements using reduce()
const sumOfElements = [...distinctElements].reduce((acc, curr) => acc + curr, 0);

console.log(sumOfElements); // Output: 13
