/**
 * Calculates mean (average)
 * @param numbers - Array of numbers
 * @returns Mean value
 */
export function mean(numbers: number[]): number {
  if (numbers.length === 0) throw new Error("Array cannot be empty")
  return numbers.reduce((a, b) => a + b, 0) / numbers.length
}
