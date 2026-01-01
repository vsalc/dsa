/*
 * File: insertion-sort.js
 * Description: Implementing basic data structures and algorithms in 
 *              JavaScript.
 * Author: Victor Salcedo
 * Date: January 1, 2026
 * Contact: vsalc@proton.me
 */

function insertionSort(arr) {
  let j = 1
  const end = arr.length

  while (j < end) {
    const key = arr[j]
    // Insert A[j] into the sorted sequence A[0..j-1].
    let i = j - 1
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i]
      i -= 1
    }
    arr[i + 1] = key
    j += 1
  }
}

export default insertionSort