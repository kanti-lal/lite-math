import { mean, median, mode, variance, stdDev, range } from "../src/index"

console.log("=== Statistics Examples ===")

const data = [10, 20, 30, 40, 50]
const data2 = [1, 1, 2, 2, 2, 3, 4, 5]

// Mean
console.log("\n=== Mean (Average) ===")
console.log("mean([10, 20, 30, 40, 50]):", mean(data)) // 30

// Median
console.log("\n=== Median ===")
console.log("median([10, 20, 30, 40, 50]):", median(data)) // 30
console.log("median([1, 2, 3, 4]):", median([1, 2, 3, 4])) // 2.5

// Mode
console.log("\n=== Mode ===")
console.log("mode([1, 1, 2, 2, 2, 3, 4, 5]):", mode(data2)) // [2]

// Variance & Standard Deviation
console.log("\n=== Variance & Std Dev ===")
console.log("variance([10, 20, 30, 40, 50]):", variance(data)) // 200
console.log("stdDev([10, 20, 30, 40, 50]):", stdDev(data)) // 14.14...

// Range
console.log("\n=== Range ===")
console.log("range([10, 20, 30, 40, 50]):", range(data)) // 40
console.log("range([5, 2, 8, 1]):", range([5, 2, 8, 1])) // 7
