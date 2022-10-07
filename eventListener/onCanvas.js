import clickOnCanvas from "./clickOnCanvas.js";
const onCanvas = (canvas, ctx, objectGlobal) => {
  function clikOnCanvasEvent(e) {
    clickOnCanvas(e, canvas, ctx, objectGlobal);
  }
  objectGlobal.eventListenerCanvas = clikOnCanvasEvent;
  canvas.addEventListener("click", clikOnCanvasEvent);
};

export default onCanvas;
