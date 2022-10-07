import playForWin from "./playForWin";

test("playForWin return position to Play 1 return 3", () => {
  const p1 = [1, 2];
  const p2 = [5, 6];
  expect(playForWin({ p1, p2 }, "p1")).toEqual(3);
});

test("playForWin return position to Play 2 return 5", () => {
  const p1 = [1, 9];
  const p2 = [3, 2];
  expect(playForWin({ p1, p2 }, "p1")).toEqual(5);
});

test("playForWin return false", () => {
  const p1 = [1, 9, 7];
  const p2 = [5, 3];
  expect(playForWin({ p1, p2 }, "p2")).toEqual(false);
});
