/**
 * Gets the nth Fibonacci number
 * @param n - Position in sequence (0-indexed)
 * @returns Fibonacci number at position n
 */
export function fibonacci(n: number): number {
  if (n < 0) throw new Error("Fibonacci index must be non-negative")
  if (n === 0) return 0
  if (n === 1) return 1
  let a = 0,
    b = 1
  for (let i = 2; i <= n; i++) {
    ;[a, b] = [b, a + b]
  }
  return b
}
