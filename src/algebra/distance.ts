/**
 * Calculates distance between two points
 * @param x1 - X coordinate of point 1
 * @param y1 - Y coordinate of point 1
 * @param x2 - X coordinate of point 2
 * @param y2 - Y coordinate of point 2
 * @returns Distance between points
 */
export function distance(x1: number, y1: number, x2: number, y2: number): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}
