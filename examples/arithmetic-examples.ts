import { add, subtract, multiply, divide, modulo, percentage, clamp, round } from "../src/index"

// Basic arithmetic
console.log("=== Arithmetic Examples ===")
console.log("add(10, 5):", add(10, 5)) // 15
console.log("subtract(10, 5):", subtract(10, 5)) // 5
console.log("multiply(10, 5):", multiply(10, 5)) // 50
console.log("divide(10, 5):", divide(10, 5)) // 2
console.log("modulo(17, 5):", modulo(17, 5)) // 2

// Percentage
console.log("\n=== Percentage ===")
console.log("percentage(200, 15):", percentage(200, 15)) // 30 (15% of 200)

// Clamping values
console.log("\n=== Clamping ===")
console.log("clamp(150, 0, 100):", clamp(150, 0, 100)) // 100
console.log("clamp(50, 0, 100):", clamp(50, 0, 100)) // 50
console.log("clamp(-10, 0, 100):", clamp(-10, 0, 100)) // 0

// Rounding
console.log("\n=== Rounding ===")
console.log("round(3.14159, 2):", round(3.14159, 2)) // 3.14
console.log("round(9.876, 1):", round(9.876, 1)) // 9.9
