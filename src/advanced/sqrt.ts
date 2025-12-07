/**
 * Calculates square root
 * @param n - Number to find square root of
 * @returns Square root of n
 */
export function sqrt(n: number): number {
  if (n < 0) throw new Error("Square root of negative number")
  return Math.sqrt(n)
}
