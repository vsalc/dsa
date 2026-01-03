/*
 * File: test-dynamic-array.js
 * Description: Unit tests for dynamic-array.js.
 * Author: Victor Salcedo
 * Date: January 1, 2026
 * Contact: vsalc@proton.me
 */
import test, { describe } from "node:test";
import assert from "node:assert/strict";
import DynamicArray from "./dynamic-array.js";

describe("constructor tests", () => {
  test("default constructor test", () => {
    const arr = new DynamicArray();
    assert.strictEqual(arr.capacity(), 0);
    assert.strictEqual(arr.size(), 0);
  });

  test("constructor given negative capacity", () => {
    const arr = new DynamicArray(-1);
    assert.strictEqual(arr.capacity(), 0);
    assert.strictEqual(arr.size(), 0);
  });

  test("constructor given positive capacity", () => {
    const arr = new DynamicArray(1000);
    const check = Array(1000).fill(0);
    assert.strictEqual(arr.capacity(), 1000);
    assert.strictEqual(arr.size(), 0);
    // Todo: Find out if I can make class attributes private in JS.
    assert.deepStrictEqual(arr.arr, check);
  });
});
