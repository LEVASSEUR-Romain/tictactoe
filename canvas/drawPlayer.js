const drawPlayer = (ctx, imageJoueur, grille) => {
  const taille = 20;
  const x1 = 45;
  const x2 = 145;
  const x3 = 235;
  const y1 = 50;
  const y2 = 155;
  const y3 = 240;
  const placement = [
    {},
    {
      id: 1,
      x: x1,
      y: y1,
    },
    {
      id: 2,
      x: x2,
      y: y1,
    },
    {
      id: 3,
      x: x3,
      y: y1,
    },
    {
      id: 4,
      x: x1,
      y: y2,
    },
    {
      id: 5,
      x: x2,
      y: y2,
    },
    {
      id: 6,
      x: x3,
      y: y2,
    },
    {
      id: 7,
      x: x1,
      y: y3,
    },
    {
      id: 8,
      x: x2,
      y: y3,
    },
    {
      id: 9,
      x: x3,
      y: y3,
    },
  ];

  ctx.font = taille + "px serif";
  ctx.fillText(imageJoueur, placement[grille].x, placement[grille].y);
};
export default drawPlayer;
