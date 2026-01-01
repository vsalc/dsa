/*
 * File: test-binary-search.js
 * Description: Unit tests for binary-search.js.
 * Author: Victor Salcedo
 * Date: January 1, 2026
 * Contact: vsalc@proton.me
 */
import test from "node:test"
import assert from "node:assert/strict"
import binarySearch from "./binary-search.js"

test("searching an empty array", () => {
  assert.strictEqual(binarySearch([], 0), -1)
})

test("searching a single element array", () => {
  assert.strictEqual(binarySearch([0], 0), 0)
})

test("standard search", () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  assert.strictEqual(binarySearch(arr, 3), 3)
})

test("searching with negative values", () => {
  const arr = [-99, -27, -2, 0, 7, 34, 88, 122]
  assert.strictEqual(binarySearch(arr, 88), 6)
})

test("searching for a nonexistent value", () => {
  const arr = [-99, -27, -2, 0, 7, 34, 88, 122]
  assert.strictEqual(binarySearch(arr, 32), -1)
})

test("large array search", () => {
  const arr = Array.from({ length: 1000 }, (_, i) => i)
  assert.strictEqual(binarySearch(arr, 93), 93)
})

test("search with just floating point values", () => {
  const arr = [12.3, 12.333, 67.89, 100.4, 322.735, 1000.001]
  assert.strictEqual(binarySearch(arr, 12.333), 1)
})

test("search with both floats and integers", () => {
  const arr = [-3.14, -1.05, -0.45, 1.23, 88.12, 97.4]
  assert.strictEqual(binarySearch(arr, 97.4), 5)
})