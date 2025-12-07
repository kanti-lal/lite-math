/**
 * Sums all numbers in array
 * @param numbers - Array of numbers
 * @returns Sum of all numbers
 */
export function sumArray(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0)
}
