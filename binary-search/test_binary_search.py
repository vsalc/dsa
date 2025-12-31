# File: test_binary_search.py
# Description: Unit tests for binary search on arrays.
# Author: Victor Salcedo
# Date: December 31, 2025
# Contact: vsalc@proton.me
import unittest
from binary_search import binarySearch

class TestBinarySearch(unittest.TestCase):
  def testSearchEmptyArray(self):
    arr = []
    result = binarySearch(arr, 0)
    self.assertEqual(result, -1)

  def testSearchSingleElementArray(self):
    arr = [0]
    result = binarySearch(arr, 0)
    self.assertEqual(result, 0)

  def testSearchArray(self):
    arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    result = binarySearch(arr, 3)
    self.assertEqual(result, 3)

  def testSearchArrayWithNegatives(self):
    arr = [-99, -27, -2, 0, 6, 7, 34, 88, 12]
    result = binarySearch(arr, -99)
    self.assertEqual(result, 0)
  
  def testSearchForNonexistentElement(self):
    arr = [-99, -27, -2, 0, 6, 7, 34, 88, 12]
    result = binarySearch(arr, 32)
    self.assertEqual(result, -1)

  def testSearchLargeArray(self):
    arr = list(range(0, 1000))
    result = binarySearch(arr, 93)
    self.assertEqual(result, 93)

  def testSearchArrayWithFloats(self):
    arr = [12.3, 12.333, 67.89, 100.4, 322.735, 1000.001]
    result = binarySearch(arr, 322.735)
    self.assertEqual(result, 4)

  def testSearchWithMixedIntegersAndFloats(self):
    arr = [-3.14, -1.05, -0.45, 1.23, 88.12, 97.4]
    result = binarySearch(arr, 97.4)
    self.assertEqual(result, 5)

if __name__ == '__main__':
  unittest.main()