import listExtremity from "../../list/listExtremity.js";

const playPriorityExtremity = (stayToPlay) => {
  const result = [];

  stayToPlay.forEach((element) => {
    if (listExtremity.includes(element)) {
      result.push(element);
    }
  });
  if (result.length === 0) return false;
  return result;
};
export default playPriorityExtremity;
