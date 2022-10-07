import playForCounterWin from "./playForCounterWin.js";

test("playForCounterWin return 3", () => {
  const p1 = [1, 2];
  const p2 = [5];
  expect(playForCounterWin({ p1, p2 }, "p2")).toEqual(3);
});

test("playForWin return 5", () => {
  const p1 = [1, 9];
  const p2 = [3];
  expect(playForCounterWin({ p1, p2 }, "p2")).toEqual(5);
});

test("playForWin return false", () => {
  const p1 = [1, 3];
  const p2 = [2];
  expect(playForCounterWin({ p1, p2 }, "p2")).toEqual(false);
});
