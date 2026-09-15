/**
 * Module: Divide and Conquer Sorting
 * Problem: Merge Sort
 * LeetCode Reference: #912 (Sort an Array)
 * Complexity: Time O(N log N) | Space O(N)
 */

/**
 * Merges two sorted contiguous subarrays: arr[first..mid] and arr[mid+1..last]
 * @param {number[]} arr - Target array to mutate
 * @param {number} first - Start index
 * @param {number} mid - Middle divider index
 * @param {number} last - End index
 */
function merge(arr, first, mid, last) {
  const temp = new Array(last - first + 1);
  let i = first;
  let j = mid + 1;
  let k = 0;

  // Merge smaller elements from both halves into temp
  while (i <= mid && j <= last) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  // Copy remaining elements from left half
  while (i <= mid) {
    temp[k++] = arr[i++];
  }

  // Copy remaining elements from right half
  while (j <= last) {
    temp[k++] = arr[j++];
  }

  // Transfer sorted elements back to original array slice
  let p = 0;
  let t = first;
  while (p < temp.length) {
    arr[t++] = temp[p++];
  }
}

/**
 * Recursively splits array into halves and merges them
 * @param {number[]} arr - Array to sort
 * @param {number} first - Lower index boundary
 * @param {number} last - Upper index boundary
 */
export function mergeSort(arr, first = 0, last = arr.length - 1) {
  if (first >= last) return;

  const mid = Math.floor((first + last) / 2);
  mergeSort(arr, first, mid);
  mergeSort(arr, mid + 1, last);
  merge(arr, first, mid, last);
}

// Verification
const mergeSample = [8, 2, 1, 9, 5, 12, 4, 20];
mergeSort(mergeSample);
console.log("Merge Sorted:", mergeSample); // [1, 2, 4, 5, 8, 9, 12, 20]