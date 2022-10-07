import listToWin from "../../list/listToWin.js";
const playForCounterWin = ({ p1, p2 }, whoPlay) => {
  const listWin = listToWin;
  const playerToPlay = whoPlay === "p1" ? p1 : p2;
  const playerCounter = whoPlay === "p1" ? p2 : p1;

  let playerCounterStat = 0;
  for (let i = 0; i < listWin.length; i++) {
    playerCounterStat = 0;
    for (let j = 0; j < listWin[i].length; j++) {
      if (playerCounter.includes(listWin[i][j])) {
        playerCounterStat++;
      }
      if (playerCounterStat === 2) {
        const toWinPosition = listWin[i].filter(
          (e) => !playerCounter.includes(e)
        );
        if (!playerToPlay.includes(toWinPosition[0])) return toWinPosition[0];
      }
    }
  }
  return false;
};
export default playForCounterWin;
