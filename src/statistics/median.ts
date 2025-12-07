/**
 * Calculates median
 * @param numbers - Array of numbers
 * @returns Median value
 */
export function median(numbers: number[]): number {
  if (numbers.length === 0) throw new Error("Array cannot be empty")
  const sorted = [...numbers].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2
}
