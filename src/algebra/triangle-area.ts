/**
 * Calculates area of triangle using Heron's formula
 * @param a - Side a
 * @param b - Side b
 * @param c - Side c
 * @returns Area of triangle
 */
export function triangleArea(a: number, b: number, c: number): number {
  const s = (a + b + c) / 2
  return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}
