import { add, sub } from "../src";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subs 3 - 2 to equal 1", () => {
  expect(sub(3, 2)).toBe(1);
});
