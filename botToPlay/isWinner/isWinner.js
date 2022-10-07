import listToWin from "../../list/listToWin.js";
const isWinner = ({ p1, p2 }) => {
  const listWin = listToWin;
  let goodp1 = 0;
  let goodp2 = 0;

  for (let j = 0; j < listWin.length; j++) {
    goodp1 = 0;
    goodp2 = 0;
    for (let h = 0; h < listWin[j].length; h++) {
      if (p1.includes(listWin[j][h])) {
        goodp1++;
      }
      if (p2.includes(listWin[j][h])) {
        goodp2++;
      }
      if (goodp2 === 3) return "p2";
      if (goodp1 === 3) return "p1";
    }
  }
  return false;
};
export default isWinner;
