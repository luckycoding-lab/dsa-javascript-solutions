/**
 * Module: Cyclic Sort & Index Mapping
 * Pattern: In-place cyclic placement when elements fall in range [0, N] or [1, N]
 * References: LeetCode #268 (Missing Number), LeetCode #448 (Find All Numbers Disappeared)
 */

/**
 * Helper: Swap two values in an array in-place
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

/**
 * Problem: Basic Cyclic Sort (Range 1 to N)
 * Sorts array of numbers 1 to N in O(N) time with O(1) space
 * Complexity: Time O(N) | Space O(1)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
export function cyclicSort1ToN(arr) {
  let i = 0;

  while (i < arr.length) {
    const correctIdx = arr[i] - 1;

    // Check if the current number is already in its correct index
    if (arr[i] !== arr[correctIdx]) {
      swap(arr, i, correctIdx);
    } else {
      i++;
    }
  }

  return arr;
}

/**
 * Problem: Missing Number (Range 0 to N)
 * LeetCode: #268
 * Complexity: Time O(N) | Space O(1)
 *
 * @param {number[]} nums
 * @returns {number} The missing number in sequence [0, N]
 */
export function findMissingNumber(nums) {
  let i = 0;
  const n = nums.length;

  while (i < n) {
    const correctIdx = nums[i];

    // Check bounds (nums[i] < n) and prevent swapping identical numbers
    if (nums[i] < n && nums[i] !== nums[correctIdx]) {
      swap(nums, i, correctIdx);
    } else {
      i++;
    }
  }

  // Find the first index that doesn't match its value
  for (let j = 0; j < n; j++) {
    if (nums[j] !== j) {
      return j;
    }
  }

  return n;
}

/**
 * Problem: Find All Numbers Disappeared in an Array (Range 1 to N)
 * LeetCode: #448
 * Complexity: Time O(N) | Space O(1) auxiliary (excluding return array)
 *
 * @param {number[]} nums
 * @returns {number[]} Array of missing numbers
 */
export function findDisappearedNumbers(nums) {
  let i = 0;
  const n = nums.length;

  while (i < n) {
    const correctIdx = nums[i] - 1;

    // Swap if not at correct index and not a duplicate
    if (nums[i] !== nums[correctIdx]) {
      swap(nums, i, correctIdx);
    } else {
      i++;
    }
  }

  const missingNumbers = [];

  // Identify missing indices
  for (let j = 0; j < n; j++) {
    if (nums[j] !== j + 1) {
      missingNumbers.push(j + 1);
    }
  }

  return missingNumbers;
}