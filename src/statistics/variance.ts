/**
 * Calculates variance
 * @param numbers - Array of numbers
 * @returns Variance value
 */
export function variance(numbers: number[]): number {
  if (numbers.length === 0) throw new Error("Array cannot be empty")
  const avg = numbers.reduce((a, b) => a + b, 0) / numbers.length
  return numbers.reduce((sum, n) => sum + Math.pow(n - avg, 2), 0) / numbers.length
}
