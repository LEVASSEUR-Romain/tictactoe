import isWinner from "./isWinner.js";

test("isWinner return p1", () => {
  const p1 = [1, 2, 3];
  const p2 = [5, 3];
  expect(isWinner({ p1, p2 })).toEqual("p1");
});

test("isWinner return p2", () => {
  const p1 = [1, 2, 9];
  const p2 = [5, 6, 4];
  expect(isWinner({ p1, p2 })).toEqual("p2");
});
test("isWinner return false", () => {
  const p1 = [1, 2];
  const p2 = [5, 6];
  expect(isWinner({ p1, p2 })).toEqual(false);
});
