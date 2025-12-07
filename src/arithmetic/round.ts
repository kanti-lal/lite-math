/**
 * Rounds a number to specified decimal places
 * @param value - The number to round
 * @param decimals - Number of decimal places (default: 0)
 * @returns Rounded number
 */
export function round(value: number, decimals = 0): number {
  const multiplier = Math.pow(10, decimals)
  return Math.round(value * multiplier) / multiplier
}
