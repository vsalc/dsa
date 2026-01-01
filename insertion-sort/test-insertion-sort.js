/*
 * File: test-insertion-sort.js
 * Description: Unit tests for insertion-sort.js.
 * Author: Victor Salcedo
 * Date: January 1, 2026
 * Contact: vsalc@proton.me
 */
import test from "node:test"
import assert from "node:assert/strict"
import insertionSort from "./insertion-sort.js"

test("sort empty array", () => {
  const result = []
  insertionSort(result)
  assert.deepStrictEqual(result, [])
})

test("sort single element array", () => {
  const result = [0]
  insertionSort(result)
  assert.deepStrictEqual(result, [0])
})

test("sort standard array", () => {
  const result = [8, -14, 3, 0, 55, 100, 89, 2, 1]
  insertionSort(result)
  assert.deepStrictEqual(result, [-14, 0, 1, 2, 3, 8, 55, 89, 100])
})

test("sort already sorted array", () => {
  const result = [-14, 0, 1, 2, 3, 8, 55, 89, 100]
  insertionSort(result)
  assert.deepStrictEqual(result, [-14, 0, 1, 2, 3, 8, 55, 89, 100])
})

test("sort reverse sorted array", () => {
  const result = [100, 89, 55, 8, 3, 2, 1, 0, -14]
  insertionSort(result)
  assert.deepStrictEqual(result, [-14, 0, 1, 2, 3, 8, 55, 89, 100])
})

test("sort list with duplicates", () => {
  const result = [5, 3, 8, 3, 9, 1, 5, 3]
  insertionSort(result)
  assert.deepStrictEqual(result, [1, 3, 3, 3, 5, 5, 8, 9])
})

test("sort list with negative numbers", () => {
  const result = [0, -1, -3, 2, -2, 1]
  insertionSort(result)
  assert.deepStrictEqual(result, [-3, -2, -1, 0, 1, 2])
})

test("sort large list", () => {
  const result = Array.from({ length: 1000 }, (_, i) => 1000 - i)
  insertionSort(result)
  assert.deepStrictEqual(result, Array.from({ length: 1000 }, (_, i) => i + 1))
})

test("sort list with floats", () => {
  const result = [3.1, 2.4, -1.5, 0.0, 2.4]
  insertionSort(result)
  assert.deepStrictEqual(result, [-1.5, 0.0, 2.4, 2.4, 3.1])
})

test("sort list with mixed integers and floats", () => {
  const result = [3, 2.5, -1, 0.0, 2]
  insertionSort(result)
  assert.deepStrictEqual(result, [-1, 0.0, 2, 2.5, 3])
})

test("sort list with all identical elements", () => {
  const result = [7, 7, 7, 7, 7]
  insertionSort(result)
  assert.deepStrictEqual(result, [7, 7, 7, 7, 7])
})