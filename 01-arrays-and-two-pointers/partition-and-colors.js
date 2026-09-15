/**
 * Module: Array Partitioning & Two-Pointer Logic
 * Patterns: Fast/Slow Pointers, Dutch National Flag (3-Way Partitioning)
 * Topics: In-place Swaps, Segregation
 */

/**
 * Problem: Move Zeroes / Partition 0s and 1s
 * LeetCode: #283 (Move Zeroes variant)
 * Complexity: Time O(N) | Space O(1)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
export function partitionZerosAndOnes(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}

/**
 * Problem: Sort Colors (0s, 1s, and 2s)
 * LeetCode: #75
 * Algorithm: Dutch National Flag Algorithm
 * Complexity: Time O(N) | Space O(1)
 *
 * @param {number[]} nums
 * @returns {void} In-place mutation
 */
export function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    } else {
      mid++;
    }
  }
}

/**
 * Problem: Reverse Array In-Place
 * Pattern: Two Pointers (Opposite Ends)
 * Complexity: Time O(N) | Space O(1)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
export function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}