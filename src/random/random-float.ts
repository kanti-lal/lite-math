/**
 * Generates random float between min and max
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Random float
 */
export function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min
}
