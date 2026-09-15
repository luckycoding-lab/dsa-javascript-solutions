/**
 * Module: Array Rotations & Multi-Array Operations
 * Patterns: Three-Reverse Technique, Circular Modulo Mapping, 3-Pointer Merge
 */

/**
 * Helper: Reverses an array slice in-place
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 */
function reverseRange(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

/**
 * Problem: Rotate Array (Left Rotation by K)
 * LeetCode: #189 (Left Rotation adaptation)
 * Algorithm: Three-Reverse Technique
 * Complexity: Time O(N) | Space O(1)
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
export function rotateLeftInPlace(nums, k) {
  const n = nums.length;
  if (n === 0) return nums;

  k = k % n;
  reverseRange(nums, 0, k - 1);
  reverseRange(nums, k, n - 1);
  reverseRange(nums, 0, n - 1);

  return nums;
}

/**
 * Problem: Merge Sorted Array
 * LeetCode: #88
 * Pattern: Three Pointers
 * Complexity: Time O(N + M) | Space O(N + M)
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
export function mergeSortedArrays(arr1, arr2) {
  const merged = new Array(arr1.length + arr2.length);
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged[k++] = arr1[i++];
    } else {
      merged[k++] = arr2[j++];
    }
  }

  while (i < arr1.length) {
    merged[k++] = arr1[i++];
  }

  while (j < arr2.length) {
    merged[k++] = arr2[j++];
  }

  return merged;
}