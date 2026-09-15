/**
 * Module: Comparison Sorting Algorithms
 * Algorithms: Bubble Sort, Selection Sort, Insertion Sort
 * Topics: In-Place Swapping, Partial Invariants, Worst vs Best Case Analysis
 */

/**
 * Bubble Sort (Optimized with early termination flag)
 * Complexity: Time O(N^2) worst/avg, O(N) best | Space O(1)
 *
 * @param {number[]} arr
 * @returns {number[]} Mutated sorted array
 */
export function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // Array is already sorted
  }
  return arr;
}

/**
 * Selection Sort (Finds minimum element and places at boundary)
 * Complexity: Time O(N^2) | Space O(1)
 *
 * @param {number[]} arr
 * @returns {number[]} Mutated sorted array
 */
export function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

/**
 * Insertion Sort (Shifts elements backward to insert key in sorted prefix)
 * Complexity: Time O(N^2) worst/avg, O(N) best | Space O(1)
 *
 * @param {number[]} arr
 * @returns {number[]} Mutated sorted array
 */
export function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}