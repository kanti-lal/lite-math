/**
 * Generates array of random integers
 * @param length - Length of array
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Array of random numbers
 */
export function randomArray(length: number, min: number, max: number): number[] {
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min)
}
