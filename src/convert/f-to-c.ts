/**
 * Converts Fahrenheit to Celsius
 * @param fahrenheit - Temperature in Fahrenheit
 * @returns Temperature in Celsius
 */
export function fToC(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9
}
