#!/usr/bin/env node

import {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  percentage,
  clamp,
  round,
  ceil,
  floor,
  factorial,
  fibonacci,
  gcd,
  lcm,
  primeCheck,
  primeList,
  power,
  sqrt,
  cubeRoot,
  mean,
  median,
  mode,
  variance,
  stdDev,
  range,
  randomInt,
  randomFloat,
  randomArray,
  solveLinear,
  solveQuadratic,
  distance,
  slope,
  midpoint,
  triangleArea,
  circleArea,
  degToRad,
  radToDeg,
  kmToMiles,
  milesToKm,
  cToF,
  fToC,
} from "./index"

const args = process.argv.slice(2)

function formatOutput(value: any): string {
  if (Array.isArray(value)) {
    return `[${value.map((v) => (typeof v === "number" ? (Number.isInteger(v) ? v : v.toFixed(4)) : v)).join(", ")}]`
  }
  return typeof value === "number" ? (Number.isInteger(value) ? value.toString() : value.toFixed(4)) : String(value)
}

const commands: { [key: string]: () => void } = {
  add: () => {
    const [a, b] = [Number.parseFloat(args[1]), Number.parseFloat(args[2])]
    console.log(formatOutput(add(a, b)))
  },
  subtract: () => {
    const [a, b] = [Number.parseFloat(args[1]), Number.parseFloat(args[2])]
    console.log(formatOutput(subtract(a, b)))
  },
  multiply: () => {
    const [a, b] = [Number.parseFloat(args[1]), Number.parseFloat(args[2])]
    console.log(formatOutput(multiply(a, b)))
  },
  divide: () => {
    const [a, b] = [Number.parseFloat(args[1]), Number.parseFloat(args[2])]
    console.log(formatOutput(divide(a, b)))
  },
  modulo: () => {
    const [a, b] = [Number.parseFloat(args[1]), Number.parseFloat(args[2])]
    console.log(formatOutput(modulo(a, b)))
  },
  percentage: () => {
    const [value, percent] = [Number.parseFloat(args[1]), Number.parseFloat(args[2])]
    console.log(formatOutput(percentage(value, percent)))
  },
  clamp: () => {
    const [value, min, max] = [Number.parseFloat(args[1]), Number.parseFloat(args[2]), Number.parseFloat(args[3])]
    console.log(formatOutput(clamp(value, min, max)))
  },
  round: () => {
    const value = Number.parseFloat(args[1])
    const decimals = args[2] ? Number.parseInt(args[2]) : 0
    console.log(formatOutput(round(value, decimals)))
  },
  ceil: () => {
    const value = Number.parseFloat(args[1])
    console.log(formatOutput(ceil(value)))
  },
  floor: () => {
    const value = Number.parseFloat(args[1])
    console.log(formatOutput(floor(value)))
  },
  factorial: () => {
    const n = Number.parseInt(args[1])
    console.log(formatOutput(factorial(n)))
  },
  fibonacci: () => {
    const n = Number.parseInt(args[1])
    console.log(formatOutput(fibonacci(n)))
  },
  gcd: () => {
    const [a, b] = [Number.parseInt(args[1]), Number.parseInt(args[2])]
    console.log(formatOutput(gcd(a, b)))
  },
  lcm: () => {
    const [a, b] = [Number.parseInt(args[1]), Number.parseInt(args[2])]
    console.log(formatOutput(lcm(a, b)))
  },
  primeCheck: () => {
    const n = Number.parseInt(args[1])
    console.log(primeCheck(n))
  },
  primeList: () => {
    const n = Number.parseInt(args[1])
    console.log(formatOutput(primeList(n)))
  },
  power: () => {
    const [base, exp] = [Number.parseFloat(args[1]), Number.parseFloat(args[2])]
    console.log(formatOutput(power(base, exp)))
  },
  sqrt: () => {
    const n = Number.parseFloat(args[1])
    console.log(formatOutput(sqrt(n)))
  },
  cbrt: () => {
    const n = Number.parseFloat(args[1])
    console.log(formatOutput(cubeRoot(n)))
  },
  mean: () => {
    const nums = args.slice(1).map(Number.parseFloat)
    console.log(formatOutput(mean(nums)))
  },
  median: () => {
    const nums = args.slice(1).map(Number.parseFloat)
    console.log(formatOutput(median(nums)))
  },
  mode: () => {
    const nums = args.slice(1).map(Number.parseFloat)
    console.log(formatOutput(mode(nums)))
  },
  variance: () => {
    const nums = args.slice(1).map(Number.parseFloat)
    console.log(formatOutput(variance(nums)))
  },
  stddev: () => {
    const nums = args.slice(1).map(Number.parseFloat)
    console.log(formatOutput(stdDev(nums)))
  },
  range: () => {
    const nums = args.slice(1).map(Number.parseFloat)
    console.log(formatOutput(range(nums)))
  },
  randomInt: () => {
    const [min, max] = [Number.parseInt(args[1]), Number.parseInt(args[2])]
    console.log(formatOutput(randomInt(min, max)))
  },
  randomFloat: () => {
    const [min, max] = [Number.parseFloat(args[1]), Number.parseFloat(args[2])]
    console.log(formatOutput(randomFloat(min, max)))
  },
  randomArray: () => {
    const [length, min, max] = [Number.parseInt(args[1]), Number.parseInt(args[2]), Number.parseInt(args[3])]
    console.log(formatOutput(randomArray(length, min, max)))
  },
  solveLinear: () => {
    const [a, b] = [Number.parseFloat(args[1]), Number.parseFloat(args[2])]
    console.log(formatOutput(solveLinear(a, b)))
  },
  solveQuadratic: () => {
    const [a, b, c] = [Number.parseFloat(args[1]), Number.parseFloat(args[2]), Number.parseFloat(args[3])]
    console.log(formatOutput(solveQuadratic(a, b, c)))
  },
  distance: () => {
    const [x1, y1, x2, y2] = [
      Number.parseFloat(args[1]),
      Number.parseFloat(args[2]),
      Number.parseFloat(args[3]),
      Number.parseFloat(args[4]),
    ]
    console.log(formatOutput(distance(x1, y1, x2, y2)))
  },
  slope: () => {
    const [x1, y1, x2, y2] = [
      Number.parseFloat(args[1]),
      Number.parseFloat(args[2]),
      Number.parseFloat(args[3]),
      Number.parseFloat(args[4]),
    ]
    console.log(formatOutput(slope(x1, y1, x2, y2)))
  },
  midpoint: () => {
    const [x1, y1, x2, y2] = [
      Number.parseFloat(args[1]),
      Number.parseFloat(args[2]),
      Number.parseFloat(args[3]),
      Number.parseFloat(args[4]),
    ]
    console.log(formatOutput(midpoint(x1, y1, x2, y2)))
  },
  triangleArea: () => {
    const [a, b, c] = [Number.parseFloat(args[1]), Number.parseFloat(args[2]), Number.parseFloat(args[3])]
    console.log(formatOutput(triangleArea(a, b, c)))
  },
  circleArea: () => {
    const r = Number.parseFloat(args[1])
    console.log(formatOutput(circleArea(r)))
  },
  degToRad: () => {
    const degrees = Number.parseFloat(args[1])
    console.log(formatOutput(degToRad(degrees)))
  },
  radToDeg: () => {
    const radians = Number.parseFloat(args[1])
    console.log(formatOutput(radToDeg(radians)))
  },
  kmToMiles: () => {
    const km = Number.parseFloat(args[1])
    console.log(formatOutput(kmToMiles(km)))
  },
  milesToKm: () => {
    const miles = Number.parseFloat(args[1])
    console.log(formatOutput(milesToKm(miles)))
  },
  cToF: () => {
    const celsius = Number.parseFloat(args[1])
    console.log(formatOutput(cToF(celsius)))
  },
  fToC: () => {
    const fahrenheit = Number.parseFloat(args[1])
    console.log(formatOutput(fToC(fahrenheit)))
  },
  help: () => {
    console.log(`
lite-math - A comprehensive mathematics utility CLI

Usage: lite-math <command> [arguments]

Arithmetic Commands:
  add <a> <b>              - Add two numbers
  subtract <a> <b>         - Subtract two numbers
  multiply <a> <b>         - Multiply two numbers
  divide <a> <b>           - Divide two numbers
  modulo <a> <b>           - Get remainder
  percentage <value> <pct> - Calculate percentage
  clamp <val> <min> <max>  - Clamp value between min and max
  round <value> [decimals] - Round to decimal places
  ceil <value>             - Round up
  floor <value>            - Round down

Advanced Commands:
  factorial <n>            - Calculate factorial
  fibonacci <n>            - Get nth Fibonacci number
  gcd <a> <b>              - Greatest common divisor
  lcm <a> <b>              - Least common multiple
  primeCheck <n>           - Check if number is prime
  primeList <n>            - List all primes up to n
  power <base> <exp>       - Raise to power
  sqrt <n>                 - Square root
  cbrt <n>                 - Cube root

Statistics Commands:
  mean <n1> <n2> ...       - Calculate mean
  median <n1> <n2> ...     - Calculate median
  mode <n1> <n2> ...       - Calculate mode
  variance <n1> <n2> ...   - Calculate variance
  stddev <n1> <n2> ...     - Calculate standard deviation
  range <n1> <n2> ...      - Calculate range

Random Commands:
  randomInt <min> <max>    - Random integer between min and max
  randomFloat <min> <max>  - Random float between min and max
  randomArray <len> <min> <max> - Generate random array

Algebra Commands:
  solveLinear <a> <b>      - Solve ax + b = 0
  solveQuadratic <a> <b> <c> - Solve ax^2 + bx + c = 0
  distance <x1> <y1> <x2> <y2> - Distance between points
  slope <x1> <y1> <x2> <y2>    - Slope between points
  midpoint <x1> <y1> <x2> <y2> - Midpoint between points
  triangleArea <a> <b> <c> - Triangle area (Heron's formula)
  circleArea <r>           - Circle area

Conversion Commands:
  degToRad <degrees>       - Degrees to radians
  radToDeg <radians>       - Radians to degrees
  kmToMiles <km>           - Kilometers to miles
  milesToKm <miles>        - Miles to kilometers
  cToF <celsius>           - Celsius to Fahrenheit
  fToC <fahrenheit>        - Fahrenheit to Celsius

Examples:
  lite-math add 10 20
  lite-math factorial 5
  lite-math primeCheck 17
  lite-math solveQuadratic 1 -3 2
  lite-math mean 10 20 30 40 50
    `)
  },
}

const command = args[0]

if (!command || command === "help") {
  commands.help?.()
} else if (commands[command]) {
  try {
    commands[command]()
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : "Unknown error"}`)
    process.exit(1)
  }
} else {
  console.error(`Unknown command: ${command}`)
  console.log("Run 'lite-math help' for usage information")
  process.exit(1)
}
