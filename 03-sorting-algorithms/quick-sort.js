/**
 * Module: Partitioning & Pivot Allocation
 * Problem: Quick Sort (Hoare-style Partition Variant)
 * LeetCode Reference: #912 (Sort an Array)
 * Complexity: Time O(N log N) average, O(N^2) worst-case | Space O(log N) stack
 */

/**
 * Swaps two indices in-place
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * Partitions array segment around the first element as pivot
 * @param {number[]} arr
 * @param {number} first
 * @param {number} last
 * @returns {number} Final index position of pivot
 */
function partition(arr, first, last) {
  const pivot = arr[first];
  let i = first + 1;
  let j = last;

  while (i <= j) {
    while (i <= last && arr[i] <= pivot) i++;
    while (j >= first && arr[j] > pivot) j--;

    if (i < j) {
      swap(arr, i, j);
    }
  }

  // Place pivot in its sorted final location
  swap(arr, j, first);
  return j;
}

/**
 * Recursive Quick Sort runner
 * @param {number[]} arr
 * @param {number} first
 * @param {number} last
 */
export function quickSort(arr, first = 0, last = arr.length - 1) {
  if (first >= last) return;

  const pivotIndex = partition(arr, first, last);
  quickSort(arr, first, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, last);
}

// Verification
const quickSample = [19, 3, 17, 24, 1, 87, 22];
quickSort(quickSample);
console.log("Quick Sorted:", quickSample); // [1, 3, 17, 19, 22, 24, 87]