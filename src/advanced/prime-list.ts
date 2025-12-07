/**
 * Returns list of prime numbers up to n
 * @param n - Upper limit
 * @returns Array of primes up to n
 */
export function primeList(n: number): number[] {
  if (n < 2) return []
  const sieve = Array(n + 1).fill(true)
  sieve[0] = sieve[1] = false
  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= n; j += i) sieve[j] = false
    }
  }
  return sieve.map((v, i) => (v ? i : null)).filter((v) => v !== null) as number[]
}
