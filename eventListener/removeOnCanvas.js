const removeOnCanvas = (objectGlobal, canvas) => {
  console.log(canvas, objectGlobal, "remove");
  canvas.removeEventListener("click", objectGlobal.eventListenerCanvas);
};
export default removeOnCanvas;
