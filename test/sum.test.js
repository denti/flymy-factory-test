import { test } from "node:test";
import assert from "node:assert/strict";
import { sumList } from "../src/sum.js";

test("sumList adds every element", () => {
  assert.equal(sumList([1, 2, 3]), 6);
});

test("sumList returns 0 for an empty array", () => {
  assert.equal(sumList([]), 0);
});
