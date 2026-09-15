/**
 * Module: Subarray Optimizations & Dynamic Bounds
 * Algorithms: Kadane's Algorithm, Moore's Voting Algorithm, Trapping Rain Water
 */

/**
 * Problem: Maximum Subarray
 * LeetCode: #53
 * Algorithm: Kadane's Algorithm
 * Complexity: Time O(N) | Space O(1)
 *
 * @param {number[]} nums
 * @returns {number}
 */
export function maxSubArray(nums) {
  let runningSum = 0;
  let maxGlobal = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i];
    if (runningSum > maxGlobal) {
      maxGlobal = runningSum;
    }
    if (runningSum < 0) {
      runningSum = 0;
    }
  }

  return maxGlobal;
}

/**
 * Problem: Majority Element (> n / 2 times)
 * LeetCode: #169
 * Algorithm: Boyer-Moore Voting Algorithm
 * Complexity: Time O(N) | Space O(1)
 *
 * @param {number[]} nums
 * @returns {number}
 */
export function majorityElement(nums) {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
      count = 1;
    } else if (candidate === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}

/**
 * Problem: Trapping Rain Water
 * LeetCode: #42
 * Pattern: Dynamic Left/Right Boundary Caching
 * Complexity: Time O(N) | Space O(N)
 *
 * @param {number[]} height
 * @returns {number}
 */
export function trapRainWater(height) {
  const n = height.length;
  if (n === 0) return 0;

  const leftMax = new Array(n);
  const rightMax = new Array(n);

  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let totalWater = 0;
  for (let i = 0; i < n; i++) {
    totalWater += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return totalWater;
}