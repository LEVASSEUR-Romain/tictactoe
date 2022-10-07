const removeOnChoosePlayer = (objectGlobal) => {
  const changePlayer = document.getElementById("playerStart");
  changePlayer.removeEventListener(
    "click",
    objectGlobal.eventListenerChangePlayer
  );
};
export default removeOnChoosePlayer;
