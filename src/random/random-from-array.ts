/**
 * Returns random element from array
 * @param array - Array to pick from
 * @returns Random element
 */
export function randomFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}
