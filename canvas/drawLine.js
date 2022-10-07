const drawLine = (ctx) => {
  //horizontal
  ctx.beginPath();
  ctx.moveTo(0, 100);
  ctx.lineWidth = 2;
  ctx.lineTo(304, 100);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 202);
  ctx.lineWidth = 2;
  ctx.lineTo(304, 202);
  ctx.stroke();
  // vertical
  ctx.beginPath();
  ctx.moveTo(100, 0);
  ctx.lineWidth = 2;
  ctx.lineTo(100, 304);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(202, 0);
  ctx.lineWidth = 2;
  ctx.lineTo(202, 304);
  ctx.stroke();
};
export default drawLine;
