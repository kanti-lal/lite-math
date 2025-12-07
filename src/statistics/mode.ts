/**
 * Calculates mode (most frequent value)
 * @param numbers - Array of numbers
 * @returns Mode value(s)
 */
export function mode(numbers: number[]): number[] {
  if (numbers.length === 0) throw new Error("Array cannot be empty")
  const freq = new Map<number, number>()
  for (const num of numbers) {
    freq.set(num, (freq.get(num) || 0) + 1)
  }
  const maxFreq = Math.max(...freq.values())
  return Array.from(freq.entries())
    .filter(([, f]) => f === maxFreq)
    .map(([n]) => n)
}
