import listToDouble from "./../../list/listToDouble.js";
import isArraytoEqualArray from "../../tools/isArraytoEqualArrayExecptZero/isArraytoEqualArray.js";
const playForCounterDouble = ({ p1, p2 }, whoPlay) => {
  // if error
  if (whoPlay !== "p2") {
    console.error(
      "p1 , ne peux pas faire de doublette voir playForCounterDouble"
    );
    return false;
  }
  for (let i = 0; i < listToDouble.length; i++) {
    if (
      isArraytoEqualArray(p1, listToDouble[i].p1) &&
      isArraytoEqualArray(p2, listToDouble[i].p2)
    ) {
      return listToDouble[i].p2rep;
    }
  }
  return false;
};
export default playForCounterDouble;
