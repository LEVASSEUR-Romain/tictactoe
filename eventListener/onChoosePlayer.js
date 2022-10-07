import bestSolution from "../response/bestSolution.js";
import getRandomInt from "../tools/getRandomInt.js";
import drawAll from "../canvas/drawAll.js";

const onChoosePlayer = (ctx, objectGlobal) => {
  const changePlayer = document.getElementById("playerStart");
  function listernerChangePlayer(e) {
    e.preventDefault();
    if (objectGlobal.p1.length === 0 && objectGlobal.p2.length === 0) {
      let bestPlay = bestSolution(objectGlobal);
      if (Array.isArray(bestPlay)) {
        bestPlay = bestPlay[getRandomInt(bestPlay.length)];
      }
      objectGlobal.p2.push(bestPlay);
      // on re draw
      drawAll(ctx, objectGlobal);
    } else {
      alert("Vous devez restart avant");
    }
  }

  objectGlobal.eventListenerChangePlayer = listernerChangePlayer;
  changePlayer.addEventListener("click", listernerChangePlayer);
};
export default onChoosePlayer;
