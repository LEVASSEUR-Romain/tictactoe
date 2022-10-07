import drawAll from "../canvas/drawAll.js";
import removeOnCanvas from "./removeOnCanvas.js";
import onCanvas from "./onCanvas.js";
const onRestart = (restart, init, ctx, objectGlobal) => {
  restart.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(objectGlobal);
    // remove le click canvas
    removeOnCanvas(objectGlobal, ctx.canvas);
    objectGlobal = JSON.parse(JSON.stringify(init));
    // reactive le click
    onCanvas(ctx.canvas, ctx, objectGlobal);
    drawAll(ctx, init);
  });
};
export default onRestart;
