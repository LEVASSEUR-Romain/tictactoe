import drawAll from "../canvas/drawAll.js";
import bestSolution from "../response/bestSolution.js";
import stayToPlay from "../tools/stayToPlay.js";
import getRandomInt from "../tools/getRandomInt.js";
import isWinner from "./../botToPlay/isWinner/isWinner.js";

const clickOnCanvas = (e, canvas, ctx, objectGlobal) => {
  const pCanvas = canvas.getBoundingClientRect();
  const pX = e.clientX - pCanvas.x;
  const pY = e.clientY - pCanvas.y;
  let positionOnCanvasX = 0;
  let positionOnCanvasY = 0;
  if (pX < 100) positionOnCanvasX++;
  else if (pX > 100 && pX < 200) positionOnCanvasX += 2;
  else if (pX > 200) positionOnCanvasX += 3;
  // +3 a chaque changement de ligne
  if (pY > 100 && pY < 200) positionOnCanvasY += 3;
  else if (pY > 200) positionOnCanvasY += 6;
  const positionPlay = positionOnCanvasX + positionOnCanvasY;
  // voir si solution pas utiliser
  const ListPostionNotPlayer = stayToPlay(objectGlobal);
  if (
    ListPostionNotPlayer.includes(positionPlay) &&
    ListPostionNotPlayer.length > 0
  ) {
    const playerToPlay = objectGlobal.whoPlay;
    const botToPlay = playerToPlay === "p1" ? "p2" : "p1";
    objectGlobal[playerToPlay].push(positionPlay);
    // adversaire play
    let bestPlay = bestSolution(objectGlobal);
    console.log(bestPlay);
    if (bestPlay.length === 0) {
      drawAll(ctx, objectGlobal);
      alert("égality");
    } else {
      if (Array.isArray(bestPlay)) {
        bestPlay = bestPlay[getRandomInt(bestPlay.length)];
      }
      // si plus de possition a jouer ne rien faire
      objectGlobal[botToPlay].push(bestPlay);
      // on re draw
      drawAll(ctx, objectGlobal);
      // si on a un gagnant
      const seekWinner = isWinner(objectGlobal);
      if (seekWinner !== false) {
        alert("winner is " + seekWinner);
      }
    }
  }
};
export default clickOnCanvas;
