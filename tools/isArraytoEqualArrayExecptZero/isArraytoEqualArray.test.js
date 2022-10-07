import isArraytoEqualArray from "./isArraytoEqualArray.js";

test("isArraytoEqualArrayExecptZero return true", () => {
  const array1 = [5];
  const array2 = [5];
  expect(isArraytoEqualArray(array1, array2)).toEqual(true);
  expect(array1).toEqual(array1);
  expect(array2).toEqual(array2);
});

test("isArraytoEqualArrayExecptZero return false", () => {
  const array1 = [5];
  const array2 = [5, 6];
  expect(isArraytoEqualArray(array1, array2)).toEqual(false);
});
