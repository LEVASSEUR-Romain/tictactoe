const drawPlayer = (ctx, imageJoueur, grille) => {
  const taille = 20;
  const placement = [
    {},
    {
      id: 1,
      x: 50,
      y: 50,
    },
    {
      id: 2,
      x: 152,
      y: 50,
    },
    {
      id: 3,
      x: 232,
      y: 50,
    },
    {
      id: 4,
      x: 50,
      y: 152,
    },
    {
      id: 5,
      x: 152,
      y: 152,
    },
    {
      id: 6,
      x: 232,
      y: 152,
    },
    {
      id: 7,
      x: 50,
      y: 252,
    },
    {
      id: 8,
      x: 152,
      y: 232,
    },
    {
      id: 9,
      x: 232,
      y: 232,
    },
  ];

  ctx.font = taille + "px serif";
  ctx.fillText(imageJoueur, placement[grille].x, placement[grille].y);
};
export default drawPlayer;
