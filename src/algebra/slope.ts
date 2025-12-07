/**
 * Calculates slope between two points
 * @param x1 - X coordinate of point 1
 * @param y1 - Y coordinate of point 1
 * @param x2 - X coordinate of point 2
 * @param y2 - Y coordinate of point 2
 * @returns Slope value
 */
export function slope(x1: number, y1: number, x2: number, y2: number): number {
  if (x2 === x1) throw new Error("Vertical line - undefined slope")
  return (y2 - y1) / (x2 - x1)
}
