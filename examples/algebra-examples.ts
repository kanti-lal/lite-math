import { solveLinear, solveQuadratic, distance, slope, midpoint, triangleArea, circleArea } from "../src/index"

console.log("=== Algebra Examples ===")

// Linear equations
console.log("\n=== Solve Linear (ax + b = 0) ===")
console.log("solveLinear(2, -4) (2x - 4 = 0):", solveLinear(2, -4)) // 2

// Quadratic equations
console.log("\n=== Solve Quadratic (ax^2 + bx + c = 0) ===")
console.log("solveQuadratic(1, -3, 2) (x^2 - 3x + 2 = 0):", solveQuadratic(1, -3, 2)) // [2, 1]
console.log("solveQuadratic(1, 0, -4) (x^2 - 4 = 0):", solveQuadratic(1, 0, -4)) // [2, -2]

// Geometry
console.log("\n=== Geometry ===")
console.log("distance(0, 0, 3, 4):", distance(0, 0, 3, 4)) // 5
console.log("slope(0, 0, 2, 4):", slope(0, 0, 2, 4)) // 2
console.log("midpoint(0, 0, 4, 4):", midpoint(0, 0, 4, 4)) // [2, 2]

// Areas
console.log("\n=== Areas ===")
console.log("triangleArea(3, 4, 5):", triangleArea(3, 4, 5)) // 6
console.log("circleArea(5):", circleArea(5)) // 78.53...
console.log("circleArea(10):", circleArea(10)) // 314.15...
