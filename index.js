import drawAll from "./canvas/drawAll.js";
import onCanvas from "./eventListener/onCanvas.js";
import onRestart from "./eventListener/onRestart.js";
// canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 304;
canvas.height = 304;
// button
const restart = document.getElementById("restart");
console.log(restart);
//init
const objectGlobal = {
  p1: [],
  p2: [],
  imgP1: "👻",
  imgP2: "👽",
  whoPlay: "p1",
};
const saveInit = JSON.parse(JSON.stringify(objectGlobal));
drawAll(ctx, objectGlobal);
// ecouteur event
onCanvas(canvas, ctx, objectGlobal);
// button
onRestart(restart, saveInit, ctx, objectGlobal);
