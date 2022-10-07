import drawLine from "./drawLine.js";
import drawPlayer from "./drawPlayer.js";

const drawAll = (ctx, objectGlobal) => {
  // clear
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  drawLine(ctx);
  objectGlobal.p1.forEach((p1) => {
    drawPlayer(ctx, objectGlobal.imgP1, p1);
  });
  objectGlobal.p2.forEach((p2) => {
    drawPlayer(ctx, objectGlobal.imgP2, p2);
  });
};
export default drawAll;
