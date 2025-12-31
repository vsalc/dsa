# File: binary_search.py
# Description: Practicing implementing basic data structures and algorithms
#              from scratch.
# Author: Victor Salcedo
# Date: December 31, 2025
# Contact: vsalc@proton.me

def binarySearch(arr, target):
  low = 0
  high = len(arr) - 1

  while low <= high:
    mid = (high + low) // 2

    if arr[mid] == target:
      return mid
    elif arr[mid] < target:
      low = mid + 1
    else:
      high = mid - 1
  
  return -1