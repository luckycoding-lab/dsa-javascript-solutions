/**
 * Module: String Manipulation & Character Hashing
 * Patterns: Two-Pointers (Inward Scan), Fixed-Size ASCII Frequency Mapping
 * LeetCode Reference: #125 (Valid Palindrome)
 */

/**
 * Problem: Valid Palindrome (In-Place / Two-Pointer)
 * LeetCode: #125
 * Complexity: Time O(N) | Space O(1)
 *
 * @param {string} s
 * @returns {boolean}
 */
export function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s.charAt(left) !== s.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

/**
 * Reverses a string using backward iteration
 * Complexity: Time O(N) | Space O(N)
 *
 * @param {string} s
 * @returns {string}
 */
export function reverseString(s) {
  let reversed = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s.charAt(i);
  }
  return reversed;
}

/**
 * Toggles ASCII letter case (Uppercase <-> Lowercase)
 * Demonstrates character code arithmetic (+32 / -32 offset)
 * Complexity: Time O(N) | Space O(N)
 *
 * @param {string} s
 * @returns {string}
 */
export function toggleCase(s) {
  let toggled = "";

  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      // Uppercase to Lowercase
      toggled += String.fromCharCode(code + 32);
    } else if (code >= 97 && code <= 122) {
      // Lowercase to Uppercase
      toggled += String.fromCharCode(code - 32);
    } else {
      toggled += s.charAt(i);
    }
  }

  return toggled;
}

/**
 * Computes frequency of ASCII characters using a fixed-size frequency array
 * Precursor to Hash Table / Map frequency counters
 * Complexity: Time O(N) | Space O(1) (fixed 128-byte array)
 *
 * @param {string} s
 * @returns {Record<string, number>} Character count map
 */
export function getCharacterFrequencies(s) {
  const freqTable = new Array(128).fill(0);

  // Count frequencies
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    freqTable[charCode]++;
  }

  // Build clean dictionary output
  const result = {};
  for (let code = 0; code < freqTable.length; code++) {
    if (freqTable[code] > 0) {
      result[String.fromCharCode(code)] = freqTable[code];
    }
  }

  return result;
}