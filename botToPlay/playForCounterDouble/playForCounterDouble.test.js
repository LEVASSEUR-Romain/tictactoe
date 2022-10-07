import playForCounterDouble from "./playForCounterDouble.js";
import listToDouble from "../../list/listToDouble.js";

test("playForCounterDouble return 3", () => {
  const p1 = listToDouble[0].p1;
  const p2 = listToDouble[0].p2;
  expect(playForCounterDouble({ p1, p2 }, "p2")).toEqual(listToDouble[0].p2rep);
});

test("playForCounterDouble false", () => {
  const p1 = [1, 2];
  const p2 = [5];
  expect(playForCounterDouble({ p1, p2 }, "p2")).toEqual(false);
});
