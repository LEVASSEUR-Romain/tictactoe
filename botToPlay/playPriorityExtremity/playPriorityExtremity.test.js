import playPriorityExtremity from "./playPriorityExtremity.js";

test("playPriorityExtremity return all posibility", () => {
  //const p1 = [5];
  //const p2 = [];
  const stayToPlay = [1, 2, 3, 4, 6, 7, 8, 9];
  expect(playPriorityExtremity(stayToPlay)).toEqual([1, 3, 7, 9]);
});

test("playForWin return false", () => {
  //const p1 = [1, 3];
  //const p2 = [7, 9];
  const stayToPlay = [2, 4, 5, 6, 8];
  expect(playPriorityExtremity(stayToPlay)).toEqual(false);
});
