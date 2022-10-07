import drawAll from "../canvas/drawAll.js";
import removeOnCanvas from "./removeOnCanvas.js";
import onCanvas from "./onCanvas.js";
import removeOnChoosePlayer from "./removeOnChoosePlayer.js";
import onChoosePlayer from "./onChoosePlayer.js";
const onRestart = (restart, init, ctx, objectGlobal) => {
  restart.addEventListener("click", (e) => {
    e.preventDefault();
    // remove event
    removeOnCanvas(objectGlobal, ctx.canvas);
    removeOnChoosePlayer(objectGlobal);

    objectGlobal = JSON.parse(JSON.stringify(init));
    // reactive le click
    onCanvas(ctx.canvas, ctx, objectGlobal);
    onChoosePlayer(ctx, objectGlobal);
    drawAll(ctx, init);
  });
};
export default onRestart;
