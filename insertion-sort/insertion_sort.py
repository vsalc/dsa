# File: intertion_sort.py
# Description: Practicing implementing basic data structures and algorithms
#              from scratch.
# Author: Victor Salcedo
# Date: December 30, 2025
# Contact: vsalc@proton.me

def insertionSort(arr):
  j = 1
  end = len(arr)

  while j < end:
    current = arr[j]
    i = j - 1
    while i >= 0 and arr[i] > current:
      arr[i + 1] = arr[i]
      i -= 1
    arr[i + 1] = current
    j += 1
