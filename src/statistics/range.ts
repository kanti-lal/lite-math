/**
 * Calculates range (max - min)
 * @param numbers - Array of numbers
 * @returns Range value
 */
export function range(numbers: number[]): number {
  if (numbers.length === 0) throw new Error("Array cannot be empty")
  return Math.max(...numbers) - Math.min(...numbers)
}
