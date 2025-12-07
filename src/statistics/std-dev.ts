/**
 * Calculates standard deviation
 * @param numbers - Array of numbers
 * @returns Standard deviation
 */
export function stdDev(numbers: number[]): number {
  return Math.sqrt(variance(numbers))
}

function variance(numbers: number[]): number {
  if (numbers.length === 0) throw new Error("Array cannot be empty")
  const avg = numbers.reduce((a, b) => a + b, 0) / numbers.length
  return numbers.reduce((sum, n) => sum + Math.pow(n - avg, 2), 0) / numbers.length
}
