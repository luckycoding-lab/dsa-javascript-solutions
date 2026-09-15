/**
 * Module: Binary Search on Answer Space
 * Pattern: Monotonic Predicate Function + Binary Search
 * References:
 *  - LeetCode #875: Koko Eating Bananas
 *  - LeetCode #410: Split Array Largest Sum (Book Allocation Problem)
 */

// ==========================================
// 1. Koko Eating Bananas (LeetCode #875)
// ==========================================

/**
 * Helper to check if Koko can eat all bananas at speed `k` within `h` hours.
 * @param {number[]} piles
 * @param {number} speed
 * @param {number} h
 * @returns {boolean}
 */
function canEatAll(piles, speed, h) {
  let totalHours = 0;
  for (let i = 0; i < piles.length; i++) {
    // Math.ceil(piles[i] / speed)
    totalHours += Math.ceil(piles[i] / speed);
    if (totalHours > h) return false;
  }
  return totalHours <= h;
}

/**
 * LeetCode #875: Koko Eating Bananas
 * Complexity: Time O(N * log(max(piles))) | Space O(1)
 *
 * @param {number[]} piles - Banana piles
 * @param {number} h - Total available hours
 * @returns {number} Minimum integer eating speed k
 */
export function minEatingSpeed(piles, h) {
  let low = 1;
  let high = Math.max(...piles);
  let ans = high;

  while (low <= high) {
    const midSpeed = Math.floor((low + high) / 2);

    if (canEatAll(piles, midSpeed, h)) {
      ans = midSpeed;
      high = midSpeed - 1; // Try finding a slower valid speed
    } else {
      low = midSpeed + 1; // Speed too slow, increase speed
    }
  }

  return ans;
}

// ==========================================
// 2. Book Allocation / Split Array Largest Sum (LeetCode #410)
// ==========================================

/**
 * Helper to check if array can be partitioned into <= k subsets with max sum <= maxAllowedSum
 * @param {number[]} arr
 * @param {number} maxAllowedSum
 * @param {number} k
 * @returns {boolean}
 */
function isAllocationValid(arr, maxAllowedSum, k) {
  let studentCount = 1;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] > maxAllowedSum) {
      studentCount++;
      currentSum = arr[i];
      if (studentCount > k) return false;
    } else {
      currentSum += arr[i];
    }
  }

  return true;
}

/**
 * LeetCode #410: Split Array Largest Sum / Book Allocation
 * Complexity: Time O(N * log(sum - max)) | Space O(1)
 *
 * @param {number[]} arr - Pages in books / array weights
 * @param {number} k - Students / partitions
 * @returns {number} Minimized maximum sum
 */
export function findPages(arr, k) {
  if (k > arr.length) return -1;

  let low = 0;
  let high = 0;
  for (let i = 0; i < arr.length; i++) {
    low = Math.max(low, arr[i]);
    high += arr[i];
  }

  let ans = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (isAllocationValid(arr, mid, k)) {
      ans = mid;
      high = mid - 1; // Search left for a smaller maximum
    } else {
      low = mid + 1; // Search right
    }
  }

  return ans;
}