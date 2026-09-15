/**
 * Module: Logarithmic Search Foundations
 * Pattern: Binary Search (Divide & Conquer interval halving)
 * Reference: LeetCode #704 - Binary Search
 */

/**
 * Problem: Standard Binary Search
 * LeetCode: #704
 * Complexity: Time O(log N) | Space O(1)
 *
 * @param {number[]} arr - Sorted array of numbers
 * @param {number} target - Element to locate
 * @returns {number} Index of target if found, otherwise -1
 */
export function binarySearch(arr, target) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    // Avoids integer overflow: Math.floor(first + (last - first) / 2)
    const mid = Math.floor((first + last) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }

  return -1;
}

// Example Execution
const sampleArray = [2, 5, 8, 9, 12, 25, 67, 101, 125];
const targetVal = 67;
const resultIndex = binarySearch(sampleArray, targetVal);
console.log(`Target found at index: ${resultIndex}`); // Output: 6