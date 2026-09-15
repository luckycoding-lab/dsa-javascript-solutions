/**
 * Module: Recursion & Stack Frame Traversal
 * Topics: Base Cases, Stack Unwinding, Backtracking, Fibonacci Memoization
 * LeetCode Reference: #509 (Fibonacci Number)
 */

/**
 * Demonstrates Call Stack Unwinding (Backtracking order)
 * Prints 1 to N on return phase
 * Complexity: Time O(N) | Space O(N) stack
 *
 * @param {number} n
 */
export function printForwardAndBack(n) {
  if (n === 0) return;
  console.log(`Pre-call (descent): ${n}`);
  printForwardAndBack(n - 1);
  console.log(`Post-call (backtrack): ${n}`);
}

/**
 * Calculates sum of first N natural numbers recursively
 * Complexity: Time O(N) | Space O(N) stack
 *
 * @param {number} n
 * @returns {number}
 */
export function recursiveSum(n) {
  if (n <= 1) return n;
  return n + recursiveSum(n - 1);
}

/**
 * Calculates factorial of N
 * Complexity: Time O(N) | Space O(N) stack
 *
 * @param {number} n
 * @returns {number}
 */
export function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

/**
 * Problem: Fibonacci Number
 * LeetCode: #509
 * Complexity: Time O(2^N) brute-force, O(N) with iterative state
 *
 * @param {number} n
 * @returns {number}
 */
export function fibonacciIterative(n) {
  if (n <= 1) return n;
  let prev2 = 0;
  let prev1 = 1;

  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}