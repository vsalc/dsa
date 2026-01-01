/*
 * File: binary-search.js
 * Description: Implementing basic data structures and algorithms in 
 *              JavaScript.
 * Author: Victor Salcedo
 * Date: January 1, 2026
 * Contact: vsalc@proton.me
 */

function binarySearch(arr, k) {
  // Implements nonrecursive binary search
  // Input: An array A[0..n-1] sorted in ascending order and a search key K
  // Output: An index of the array's element that is equal to K or -1 if there
  //       is no such element
  let l = 0
  let r = arr.length - 1

  while (l <= r) {
    const m = Math.floor((l + r) / 2)

    if (k === arr[m]) {
      return m
    } else if (k < arr[m]) {
      r = m - 1
    } else {
      l = m + 1
    }
  }

  return -1
}

export default binarySearch