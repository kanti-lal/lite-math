import { degToRad, radToDeg, kmToMiles, milesToKm, cToF, fToC } from "../src/index"

console.log("=== Conversion Examples ===")

// Angle conversions
console.log("\n=== Angle Conversions ===")
console.log("degToRad(180):", degToRad(180)) // 3.14159...
console.log("degToRad(90):", degToRad(90)) // 1.5708...
console.log("radToDeg(3.14159):", radToDeg(3.14159)) // 180
console.log("radToDeg(1.5708):", radToDeg(1.5708)) // 90

// Distance conversions
console.log("\n=== Distance Conversions ===")
console.log("kmToMiles(1):", kmToMiles(1)) // 0.621371
console.log("kmToMiles(100):", kmToMiles(100)) // 62.1371
console.log("milesToKm(1):", milesToKm(1)) // 1.60934
console.log("milesToKm(62.14):", milesToKm(62.14)) // ~100

// Temperature conversions
console.log("\n=== Temperature Conversions ===")
console.log("cToF(0):", cToF(0)) // 32
console.log("cToF(100):", cToF(100)) // 212
console.log("fToC(32):", fToC(32)) // 0
console.log("fToC(98.6):", fToC(98.6)) // 37
