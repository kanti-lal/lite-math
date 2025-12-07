/**
 * Solves linear equation ax + b = 0
 * @param a - Coefficient of x
 * @param b - Constant term
 * @returns Solution x
 */
export function solveLinear(a: number, b: number): number {
  if (a === 0) throw new Error("Not a linear equation")
  return -b / a
}
