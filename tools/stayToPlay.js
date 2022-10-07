/**
 *
 * @param {} send
 * @returns les coups a jouer
 */
function stayToPlay(send) {
  const array = Array.from(new Set(send.p1.concat(send.p2)));
  const result = [];
  for (let i = 1; i < 10; i++) {
    if (!array.includes(i)) {
      result.push(i);
    }
  }
  return result;
}
export default stayToPlay;
