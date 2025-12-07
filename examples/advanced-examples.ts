import { factorial, fibonacci, gcd, lcm, primeCheck, primeList, power, sqrt } from "../src/index"

console.log("=== Advanced Math Examples ===")

// Factorial
console.log("\n=== Factorial ===")
console.log("factorial(5):", factorial(5)) // 120
console.log("factorial(10):", factorial(10)) // 3628800

// Fibonacci
console.log("\n=== Fibonacci ===")
console.log("fibonacci(10):", fibonacci(10)) // 55
console.log("fibonacci(15):", fibonacci(15)) // 610

// GCD & LCM
console.log("\n=== GCD & LCM ===")
console.log("gcd(48, 18):", gcd(48, 18)) // 6
console.log("lcm(12, 18):", lcm(12, 18)) // 36

// Prime checking
console.log("\n=== Prime Numbers ===")
console.log("primeCheck(17):", primeCheck(17)) // true
console.log("primeCheck(20):", primeCheck(20)) // false
console.log("primeList(30):", primeList(30)) // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

// Power & roots
console.log("\n=== Powers & Roots ===")
console.log("power(2, 8):", power(2, 8)) // 256
console.log("power(3, 4):", power(3, 4)) // 81
console.log("sqrt(144):", sqrt(144)) // 12
console.log("sqrt(2):", sqrt(2)) // 1.414...
