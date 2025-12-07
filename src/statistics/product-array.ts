/**
 * Multiplies all numbers in array
 * @param numbers - Array of numbers
 * @returns Product of all numbers
 */
export function productArray(numbers: number[]): number {
  return numbers.reduce((a, b) => a * b, 1)
}
