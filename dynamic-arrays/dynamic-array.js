/*
 * File: dynamic-array.js
 * Description: Implementing basic data structures and algorithms in
 *              JavaScript.
 * Author: Victor Salcedo
 * Date: January 1, 2026
 * Contact: vsalc@proton.me
 */

class DynamicArray {
  constructor(capacity = 0) {
    capacity = Math.max(0, capacity);
    this.arr = Array(capacity).fill(0);
    this.__size = 0;
    this.__capacity = capacity;
  }

  size() {
    return this.__size;
  }

  capacity() {
    return this.__capacity;
  }

  isEmpty() {
    return this.__size === 0;
  }

  get(index) {
    this.#indexOutOfBounds(index);
    return this.arr[index];
  }

  set(index, value) {
    this.#indexOutOfBounds(index);
    this.arr[index] = value;
  }

  add(value) {
    this.#checkCapacity();
    this.arr[this.__size] = value;
    this.__size += 1;
  }

  addAt(index, value) {
    this.#insertIndexOutOfBounds(index);
    this.#checkCapacity();
    this.#shiftRight(index);
    this.arr[index] = value;
    this.__size += 1;
  }

  remove(value) {
    const index = this.indexOf(value);
    if (index !== -1) {
      this.#shiftLeft(index + 1);
      this.__size -= 1;
    }
  }

  removeAt(index) {
    this.#indexOutOfBounds(index);
    if (index !== this.__size - 1) {
      this.#shiftLeft(index + 1);
    }
    this.__size -= 1;
  }

  clear() {
    this.__size = 0;
  }

  contains(value) {
    for (let i = 0; i < this.__size; i++) {
      if (this.arr[i] === value) {
        return true;
      }
    }
    return false;
  }

  indexOf(value) {
    for (let i = 0; i < this.__size; i++) {
      if (this.arr[i] === value) {
        return i;
      }
    }
    return -1;
  }

  lastIndexOf(value) {
    for (let i = this.__size - 1; i >= 0; i--) {
      if (this.arr[i] === value) {
        return i;
      }
    }
    return -1;
  }

  trimToSize() {
    let newArr = Array(this.__size);
    for (let i = 0; i < this.__size; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
    this.__capacity = this.__size;
  }

  toArray() {
    let newArr = Array(this.__size);
    for (let i = 0; i < this.__size; i++) {
      newArr[i] = this.arr[i];
    }
    return newArr;
  }

  #indexOutOfBounds(index) {
    if (index < 0 || index >= this.__size) {
      throw new Error("index out of bounds");
    }
  }

  #insertIndexOutOfBounds(index) {
    if (index < 0 || index > this.__size) {
      throw new Error("index out of bounds");
    }
  }

  #checkCapacity() {
    if (this.__size >= this.__capacity) {
      this.#resize();
    }
  }

  #resize() {
    let newArr = Array(this.__capacity * 2 + 1);
    for (let i = 0; i < this.__capacity; i++) {
      newArr[i] = this.arr[i];
    }
    this.arr = newArr;
    this.__capacity = this.__capacity * 2 + 1;
  }

  #shiftRight(index) {
    for (let i = this.__size; i > index; i--) {
      this.arr[i] = this.arr[i - 1];
    }
  }

  #shiftLeft(index) {
    if (index !== 0) {
      for (let i = index; i < this.__size; i++) {
        this.arr[i - 1] = this.arr[i];
      }
    }
  }
}

export default DynamicArray;
