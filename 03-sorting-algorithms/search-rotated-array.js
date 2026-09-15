/**
 * Module: Modified Binary Search
 * Problem: Search in Rotated Sorted Array
 * LeetCode Reference: #33
 * Complexity: Time O(log N) | Space O(1)
 */

/**
 * Finds index of target in a rotated sorted array with distinct values
 * @param {number[]} arr - Rotated sorted array
 * @param {number} target - Numeric value to find
 * @returns {number} Target index if found, else -1
 */
export function searchInRotatedArray(arr, target) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    const mid = Math.floor((first + last) / 2);

    if (arr[mid] === target) return mid;

    // Check if the left half is normally sorted
    if (arr[first] <= arr[mid]) {
      if (target >= arr[first] && target < arr[mid]) {
        last = mid - 1;
      } else {
        first = mid + 1;
      }
    } 
    // Otherwise, the right half must be normally sorted
    else {
      if (target > arr[mid] && target <= arr[last]) {
        first = mid + 1;
      } else {
        last = mid - 1;
      }
    }
  }

  return -1;
}

// Verification
const rotatedSample = [4, 5, 6, 7, 0, 1, 2];
console.log("Index of 0:", searchInRotatedArray(rotatedSample, 0)); // 4
console.log("Index of 3:", searchInRotatedArray(rotatedSample, 3)); // -1