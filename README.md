# 🚀 Data Structures & Algorithms Mastery in JavaScript

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Algorithms](https://img.shields.io/badge/Algorithms-O(N)%20|%20O(log%20N)%20Optimal-success?style=for-the-badge)
![LeetCode](https://img.shields.io/badge/LeetCode-Solutions-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

> An enterprise-grade, curated collection of fundamental Data Structures, Classic Algorithms, and LeetCode problem solutions implemented natively in modern **JavaScript (ES6+)**. Every solution is built without external utility packages, targeting $O(1)$ auxiliary space optimization, predictable linear/logarithmic bounds, and direct applicability to Full-Stack (MERN) performance engineering.

---

## 📌 Repository Architecture

The monorepo is divided strictly by algorithmic paradigm and data layout to maintain clear separation of concerns:

```text
dsa-javascript-solutions/
├── 00-fundamentals/
│   └── nested-loop-patterns.js       # Coordinate arithmetic & 2D loop mechanics
├── 01-arrays-and-two-pointers/
│   ├── partition-and-colors.js       # Fast/slow pointer swaps & 3-way partitioning
│   ├── rotations-and-merge.js        # Three-reverse technique & pointer merging
│   └── subarray-and-water.js         # Prefix tracking, Kadane's algorithm, boundary scans
├── 02-searching-and-intervals/
│   ├── binary-search.js              # Classic midpoint reduction
│   ├── binary-search-on-answer.js    # Monotonic predicate spaces (Koko / Allocation)
│   └── cyclic-sort-patterns.js       # O(N) index-bounded value placement
├── 03-sorting-algorithms/
│   ├── merge-sort.js                 # Divide & conquer out-of-place sorting
│   ├── quick-sort.js                 # Hoare-style in-place pivot partitioning
│   └── search-rotated-array.js       # Modified binary search in shifted intervals
├── 04-recursion-and-math/
│   ├── comparison-sorts.js           # Bubble, Selection, and Insertion sorts
│   ├── math-and-primes.js            # Euclidean GCD, divisor pairs, Sieve of Eratosthenes
│   └── recursion-basics.js           # Call stack traversal, backtracking, iterative state
├── 05-strings-and-hashing/
│   └── string-manipulation.js        # Inward scans, ASCII arithmetic, frequency arrays
└── README.md                         # Master documentation & complexity index