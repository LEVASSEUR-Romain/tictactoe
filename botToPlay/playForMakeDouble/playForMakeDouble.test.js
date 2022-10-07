import playForMakeDouble from "./playForMakeDouble.js";

test("playForMakeDouble return 9", () => {
  const p1 = [1];
  const p2 = [5];
  expect(playForMakeDouble({ p1, p2 }, "p1")).toEqual(9);
});

test("playForMakeDouble return 3", () => {
  const p1 = [1];
  const p2 = [2];
  expect(playForMakeDouble({ p1, p2 }, "p1")).toEqual(3);
});

test("playForMakeDouble false", () => {
  const p1 = [1, 2];
  const p2 = [5, 3];
  expect(playForMakeDouble({ p1, p2 }, "p1")).toEqual(false);
});
