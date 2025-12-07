# lite-math

A comprehensive, production-ready TypeScript NPM package providing 40+ mathematical utility functions with full CLI support. Built with strict TypeScript, ESM/CJS support, and ready for immediate publication.

## Features

- **40+ Math Functions** organized in 6 categories
- **Full TypeScript Support** with strict type checking and JSDoc comments
- **Dual Module Output** (ESM & CommonJS)
- **CLI Tool** (`lite-math`) with 40+ commands
- **Zero Dependencies** - Pure JavaScript/TypeScript implementation
- **Production Ready** - Fully tested and documented

## Installation

```bash
npm install lite-math
# or
yarn add lite-math
# or
pnpm add lite-math
```

## Usage

### ES Module

```typescript
import { add, subtract, factorial, primeCheck } from 'lite-math'

console.log(add(10, 20))              // 30
console.log(factorial(5))              // 120
console.log(primeCheck(17))            // true
\`\`\`

### CommonJS

\`\`\`javascript
const math = require('lite-math')

console.log(math.add(10, 20))         // 30
console.log(math.factorial(5))        // 120
console.log(math.primeCheck(17))      // true
\`\`\`

## CLI Usage

Install globally to use the CLI:

\`\`\`bash
npm install -g lite-math
\`\`\`

Then use the `lite-math` command:

\`\`\`bash
lite-math add 10 20                    # 30
lite-math factorial 5                  # 120
lite-math primeCheck 17                # true
lite-math solveQuadratic 1 -3 2        # [2, 1]
lite-math mean 10 20 30 40 50          # 30
lite-math randomInt 1 100              # Random number between 1 and 100
\`\`\`

## Function Reference

### Arithmetic Operations

| Function     | Parameters                           | Returns  | Example                      |
| ------------ | ------------------------------------ | -------- | ---------------------------- |
| `add`        | `(a: number, b: number)`             | `number` | `add(5, 3)` → `8`            |
| `subtract`   | `(a: number, b: number)`             | `number` | `subtract(10, 3)` → `7`      |
| `multiply`   | `(a: number, b: number)`             | `number` | `multiply(4, 5)` → `20`      |
| `divide`     | `(a: number, b: number)`             | `number` | `divide(20, 4)` → `5`        |
| `modulo`     | `(a: number, b: number)`             | `number` | `modulo(10, 3)` → `1`        |
| `percentage` | `(value: number, percent: number)`   | `number` | `percentage(100, 25)` → `25` |
| `clamp`      | `(value, min, max)`                  | `number` | `clamp(15, 0, 10)` → `10`    |
| `round`      | `(value: number, decimals?: number)` | `number` | `round(3.14159, 2)` → `3.14` |
| `ceil`       | `(value: number)`                    | `number` | `ceil(3.14)` → `4`           |
| `floor`      | `(value: number)`                    | `number` | `floor(3.99)` → `3`          |

### Advanced Mathematics

| Function     | Parameters                         | Returns    | Example                                          |
| ------------ | ---------------------------------- | ---------- | ------------------------------------------------ |
| `factorial`  | `(n: number)`                      | `number`   | `factorial(5)` → `120`                           |
| `fibonacci`  | `(n: number)`                      | `number`   | `fibonacci(10)` → `55`                           |
| `gcd`        | `(a: number, b: number)`           | `number`   | `gcd(48, 18)` → `6`                              |
| `lcm`        | `(a: number, b: number)`           | `number`   | `lcm(12, 18)` → `36`                             |
| `primeCheck` | `(n: number)`                      | `boolean`  | `primeCheck(17)` → `true`                        |
| `primeList`  | `(n: number)`                      | `number[]` | `primeList(20)` → `[2, 3, 5, 7, 11, 13, 17, 19]` |
| `power`      | `(base: number, exponent: number)` | `number`   | `power(2, 8)` → `256`                            |
| `sqrt`       | `(n: number)`                      | `number`   | `sqrt(16)` → `4`                                 |
| `cubeRoot`   | `(n: number)`                      | `number`   | `cubeRoot(27)` → `3`                             |

### Statistics

| Function       | Parameters            | Returns    | Example                                |
| -------------- | --------------------- | ---------- | -------------------------------------- |
| `mean`         | `(numbers: number[])` | `number`   | `mean([1, 2, 3, 4, 5])` → `3`          |
| `median`       | `(numbers: number[])` | `number`   | `median([1, 2, 3, 4, 5])` → `3`        |
| `mode`         | `(numbers: number[])` | `number[]` | `mode([1, 1, 2, 3, 3, 3])` → `[3]`     |
| `variance`     | `(numbers: number[])` | `number`   | `variance([1, 2, 3, 4, 5])` → `2`      |
| `stdDev`       | `(numbers: number[])` | `number`   | `stdDev([1, 2, 3, 4, 5])` → `1.414...` |
| `range`        | `(numbers: number[])` | `number`   | `range([1, 5, 3])` → `4`               |
| `sumArray`     | `(numbers: number[])` | `number`   | `sumArray([1, 2, 3])` → `6`            |
| `productArray` | `(numbers: number[])` | `number`   | `productArray([1, 2, 3])` → `6`        |

### Random Number Generation

| Function          | Parameters                   | Returns    | Example                                     |
| ----------------- | ---------------------------- | ---------- | ------------------------------------------- |
| `randomInt`       | `(min: number, max: number)` | `number`   | `randomInt(1, 100)` → `42`                  |
| `randomFloat`     | `(min: number, max: number)` | `number`   | `randomFloat(0, 1)` → `0.735...`            |
| `randomFromArray` | `(array: T[])`               | `T`        | `randomFromArray([1, 2, 3])` → `2`          |
| `randomArray`     | `(length, min, max)`         | `number[]` | `randomArray(5, 1, 10)` → `[3, 7, 2, 9, 4]` |

### Algebra

| Function         | Parameters               | Returns            | Example                               |
| ---------------- | ------------------------ | ------------------ | ------------------------------------- |
| `solveLinear`    | `(a: number, b: number)` | `number`           | `solveLinear(2, -4)` → `2`            |
| `solveQuadratic` | `(a, b, c)`              | `number[]`         | `solveQuadratic(1, -3, 2)` → `[2, 1]` |
| `distance`       | `(x1, y1, x2, y2)`       | `number`           | `distance(0, 0, 3, 4)` → `5`          |
| `slope`          | `(x1, y1, x2, y2)`       | `number`           | `slope(0, 0, 2, 4)` → `2`             |
| `midpoint`       | `(x1, y1, x2, y2)`       | `[number, number]` | `midpoint(0, 0, 4, 4)` → `[2, 2]`     |
| `triangleArea`   | `(a, b, c)`              | `number`           | `triangleArea(3, 4, 5)` → `6`         |
| `circleArea`     | `(radius: number)`       | `number`           | `circleArea(5)` → `78.54...`          |

### Unit Conversion

| Function    | Parameters             | Returns  | Example                        |
| ----------- | ---------------------- | -------- | ------------------------------ |
| `degToRad`  | `(degrees: number)`    | `number` | `degToRad(180)` → `3.14159...` |
| `radToDeg`  | `(radians: number)`    | `number` | `radToDeg(3.14159)` → `180`    |
| `kmToMiles` | `(km: number)`         | `number` | `kmToMiles(1)` → `0.621...`    |
| `milesToKm` | `(miles: number)`      | `number` | `milesToKm(1)` → `1.609...`    |
| `cToF`      | `(celsius: number)`    | `number` | `cToF(0)` → `32`               |
| `fToC`      | `(fahrenheit: number)` | `number` | `fToC(32)` → `0`               |

## Build & Publish

### Build the package

\`\`\`bash
npm run build
\`\`\`

This creates:
- `dist/index.esm.js` - ES Module version
- `dist/index.cjs.js` - CommonJS version
- `dist/index.d.ts` - TypeScript definitions
- `dist/cli.cjs.js` - CLI executable

### Publish to NPM

\`\`\`bash
npm publish --access public
\`\`\`

## Development

\`\`\`bash
# Install dependencies
npm install

# Build the package
npm run build

# Run tests
npm test

# Build CLI
npm run build:cli

# Type checking
npm run type-check
\`\`\`

## Project Structure

\`\`\`
.
├── src/
│   ├── arithmetic/          # Basic arithmetic operations
│   ├── advanced/            # Advanced math functions
│   ├── statistics/          # Statistical functions
│   ├── random/              # Random number generation
│   ├── algebra/             # Algebraic operations
│   ├── convert/             # Unit conversions
│   ├── index.ts             # Main export file
│   └── cli.ts               # CLI interface
├── dist/                    # Compiled output
├── examples/                # Usage examples
├── package.json
├── tsconfig.json
├── tsup.config.ts
├── .gitignore
└── README.md
\`\`\`

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

**Kanti Lal**
- GitHub: https://github.com/kanti-lal

---

Built with ❤️ using TypeScript
