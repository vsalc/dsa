# File: test_insertion_sort.py
# Description: Unit tests for insertion sort.
# Author: Victor Salcedo
# Date: December 30, 2025
# Contact: vsalc@proton.me
import unittest
from insertion_sort import insertionSort

class TestInsertionSort(unittest.TestCase):
  def testSortEmptyList(self):
    result = []
    insertionSort(result)
    self.assertEqual(result, [])

  def testSortSingleElementList(self):
    result = [0]
    insertionSort(result)
    self.assertEqual(result, [0])

  def testSortList(self):
    result = [8, -14, 3, 0, 55, 100, 89, 2, 1]
    insertionSort(result)
    self.assertEqual(result, [-14, 0, 1, 2, 3, 8, 55, 89, 100])

  def testSortAlreadySortedList(self):
    result = [-14, 0, 1, 2, 3, 8, 55, 89, 100]
    insertionSort(result)
    self.assertEqual(result, [-14, 0, 1, 2, 3, 8, 55, 89, 100])

  def testSortReverseSortedList(self):
    result = [100, 89, 55, 8, 3, 2, 1, 0, -14]
    insertionSort(result)
    self.assertEqual(result, [-14, 0, 1, 2, 3, 8, 55, 89, 100])

  def testSortListWithDuplicates(self):
    result = [5, 3, 8, 3, 9, 1, 5, 3]
    insertionSort(result)
    self.assertEqual(result, [1, 3, 3, 3, 5, 5, 8, 9])

  def testSortListWithNegativeNumbers(self):
    result = [0, -1, -3, 2, -2, 1]
    insertionSort(result)
    self.assertEqual(result, [-3, -2, -1, 0, 1, 2])

  def testSortLargeList(self):
    result = list(range(1000, 0, -1))
    insertionSort(result)
    self.assertEqual(result, list(range(1, 1001)))

  def testSortListWithFloats(self):
    result = [3.1, 2.4, -1.5, 0.0, 2.4]
    insertionSort(result)
    self.assertEqual(result, [-1.5, 0.0, 2.4, 2.4, 3.1])

  def testSortListWithMixedIntegersAndFloats(self):
    result = [3, 2.5, -1, 0.0, 2]
    insertionSort(result)
    self.assertEqual(result, [-1, 0.0, 2, 2.5, 3])

  def testSortListWithAllIdenticalElements(self):
    result = [7, 7, 7, 7, 7]
    insertionSort(result)
    self.assertEqual(result, [7, 7, 7, 7, 7])

if __name__ == '__main__':
  unittest.main()
