/**
 * Calculates midpoint between two points
 * @param x1 - X coordinate of point 1
 * @param y1 - Y coordinate of point 1
 * @param x2 - X coordinate of point 2
 * @param y2 - Y coordinate of point 2
 * @returns Midpoint coordinates
 */
export function midpoint(x1: number, y1: number, x2: number, y2: number): [number, number] {
  return [(x1 + x2) / 2, (y1 + y2) / 2]
}
