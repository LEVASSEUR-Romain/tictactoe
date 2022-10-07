import listToWin from "../../list/listToWin.js";
const playForWin = ({ p1, p2 }, whoPlay) => {
  const listWin = listToWin;
  const playerToPlay = whoPlay === "p1" ? p1 : p2;
  const counterPlayer = whoPlay === "p1" ? p2 : p1;
  let playerPlayStat = 0;
  for (let i = 0; i < listWin.length; i++) {
    playerPlayStat = 0;
    for (let j = 0; j < listWin[i].length; j++) {
      if (playerToPlay.includes(listWin[i][j])) {
        playerPlayStat++;
      }
      if (playerPlayStat === 2) {
        const toWinPosition = listWin[i].filter(
          (e) => !playerToPlay.includes(e)
        );
        if (
          !playerToPlay.includes(toWinPosition[0]) &&
          !counterPlayer.includes(toWinPosition[0])
        ) {
          return toWinPosition[0];
        }
      }
    }
  }
  return false;
};
export default playForWin;
