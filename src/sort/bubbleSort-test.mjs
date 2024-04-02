import { test } from "node:test"
import assert from "node:assert"

import { bubbleSort } from "./bubbleSort.mjs"

test("it can sort", (t) => {
    assert.deepEqual(bubbleSort([2, 3, 1]), [1, 2, 3])
})

test("it can sort, secuentally", (t) => {
    assert.deepEqual(bubbleSort([3, 2, 1]), [1, 2, 3])
})

test("negative and zero", (t) => {
    assert.deepEqual(bubbleSort([0, -1, 3, 1]), [-1, 0, 1, 3])
})

test("same numbers", (t) => {
    assert.deepEqual(bubbleSort([4, 3, 1, 1, 1, 3, 3, 4]), [1, 1, 1, 3, 3, 3, 4, 4])
})