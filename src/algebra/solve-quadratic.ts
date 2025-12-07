/**
 * Solves quadratic equation ax^2 + bx + c = 0
 * @param a - Coefficient of x^2
 * @param b - Coefficient of x
 * @param c - Constant term
 * @returns Array of solutions
 */
export function solveQuadratic(a: number, b: number, c: number): number[] {
  if (a === 0) throw new Error("Not a quadratic equation")
  const discriminant = b * b - 4 * a * c
  if (discriminant < 0) return []
  if (discriminant === 0) return [-b / (2 * a)]
  const sqrtD = Math.sqrt(discriminant)
  return [(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)]
}
