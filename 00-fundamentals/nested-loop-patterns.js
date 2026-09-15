/**
 * Module: Loop Control & Coordinate Pattern Programming
 * Purpose: Mastering nested iteration, inner loop limits, and 2D grid logic
 */

/**
 * Prints a square box of size n x n
 * @param {number} n
 */
export function printBox(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" * ".repeat(n));
  }
}

/**
 * Prints a right-angled triangle of height n
 * @param {number} n
 */
export function printRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" * ".repeat(i));
  }
}

/**
 * Prints an inverted right-angled triangle
 * @param {number} n
 */
export function printInvertedTriangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log(" * ".repeat(n - i + 1));
  }
}

/**
 * Prints a centered pyramid of height n
 * @param {number} n
 */
export function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const stars = "* ".repeat(i);
    console.log(spaces + stars);
  }
}

/**
 * Prints an X diagonal pattern
 * @param {number} n
 */
export function printXPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i === j || i + j === n + 1) {
        row += " *";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}

/**
 * Prints a K-shape pattern
 * @param {number} n
 */
export function printKPattern(n) {
  // Upper decreasing half
  for (let i = 1; i <= n; i++) {
    console.log(" *".repeat(n - i + 1));
  }
  // Lower increasing half
  for (let i = 2; i <= n; i++) {
    console.log(" *".repeat(i));
  }
}