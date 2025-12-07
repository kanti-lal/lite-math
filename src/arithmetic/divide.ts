/**
 * Divides two numbers
 * @param a - Dividend
 * @param b - Divisor
 * @returns Quotient of a and b
 * @throws Error if b is zero
 */
export function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Division by zero")
  return a / b
}
