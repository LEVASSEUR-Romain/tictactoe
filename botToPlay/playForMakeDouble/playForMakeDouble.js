import listToDouble from "../../list/listToDouble.js";
import isArraytoEqualArray from "../../tools/isArraytoEqualArrayExecptZero/isArraytoEqualArray.js";
const playForMakeDouble = ({ p1, p2 }, whoPlay) => {
  const listDouble = listToDouble;
  // if error
  if (whoPlay != "p1") {
    console.error("p2 , ne peux pas faire de doublette voir playForMakeDouble");
    return false;
  }
  let playerCount = 0;
  for (let i = 0; i < listDouble.length; i++) {
    const elmt = listDouble[i];
    playerCount = 0;
    elmt.p1.forEach((elmp1) => {
      if (p1.includes(elmp1)) {
        playerCount++;
      }
    });
    const p2Complit = isArraytoEqualArray(elmt.p2, p2);
    if (playerCount === elmt.p1.length - 1 && p2Complit) {
      const toDouble = elmt.p1.filter((e) => !p1.includes(e));
      return toDouble[0];
    }
  }

  return false;
};

export default playForMakeDouble;
