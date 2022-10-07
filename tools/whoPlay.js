const whoPlay = (send) => {
  if (send.p1.length === send.p2.length) return "p1";
  return "p2";
};
export default whoPlay;
