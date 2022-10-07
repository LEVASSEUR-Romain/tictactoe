import isWinner from "./../botToPlay/isWinner/isWinner.js";
import playForWin from "./../botToPlay/playForWin/playForWin.js";
import whoPlay from "./../tools/whoPlay.js";
import playForCounterWin from "./../botToPlay/playForCounterWin/playForCounterWin.js";
import playForMakeDouble from "./../botToPlay/playForMakeDouble/playForMakeDouble.js";
import playForCounterDouble from "../botToPlay/playForCounterDouble/playForCounterDouble.js";
import stayToPlay from "../tools/stayToPlay.js";
import playPriorityExtremity from "../botToPlay/playPriorityExtremity/playPriorityExtremity.js";
import getRandomInt from "./../tools/getRandomInt.js";
const bestSolution = (send) => {
  //first play
  if (send.p1.length === 0 && send.p2.length === 0) {
    return getRandomInt(9);
  }
  //tcheck si pas de winner
  const winner = isWinner(send);
  if (winner) return winner;
  const playerToplay = whoPlay(send);
  //tcheck si on a un play qui nous fait gagner
  const playToWin = playForWin(send, playerToplay);
  if (playToWin) return playToWin;
  //tcheck eviter de perdre instatanémant
  const playToCounter = playForCounterWin(send, playerToplay);
  if (playToCounter) return playToCounter;
  //les fourchettes
  if (playerToplay === "p1") {
    const makeDouble = playForMakeDouble(send, playerToplay);
    if (makeDouble) return makeDouble;
  } else {
    const counterDouble = playForCounterDouble(send, playerToplay);
    // peu etre un array
    if (counterDouble) return counterDouble;
  }
  // on joue au centre si c'est pas prix
  const stayPlay = stayToPlay(send);
  if (stayPlay.includes(5)) return 5;
  //random joue 1,3,7,9 en prio
  const extremity = playPriorityExtremity(stayPlay);
  if (extremity) return extremity;
  // retrun ce qui reste
  return stayPlay;
};
export default bestSolution;
