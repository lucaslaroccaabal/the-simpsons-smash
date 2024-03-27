function gameStarted() {
  holes = generateHoles();
  initEvents(holes);
  displayScore();
  displayTime();
  const timeCounter = setInterval(() => {
    time = modifyTime(time);
  }, 1000);
  const gameLoop = setInterval(() => {
    characterRandomSummoner();
    gameSpeed > 30 ? (gameSpeed = gameSpeed - 5) : (gameSpeed = gameSpeed);
    if (score < 0) {
      gameOver(gameLoop, time, timeCounter);
    }
  }, gameSpeed);
  let time = moment.duration(0, "seconds");
}
function gameOver(gameLoop, time, timeCounter) {
  window.clearInterval(gameLoop);
  window.clearInterval(timeCounter);
  gameDiv.remove();
  scoreBox.remove();
  timeBox.remove();
  const pb = JSON.parse(localStorage.getItem("pb"));
  if (!pb || time._milliseconds > pb) {
    localStorage.setItem("pb", JSON.stringify(time._milliseconds));
    divStart.children[0].innerText = `Nuevo Record Personal!! ${time._data.minutes}:${time._data.seconds}`;
  } else {
    divStart.children[0].innerText = `Tiempo: ${time._data.minutes}:${time._data.seconds}`;
  }
  divStart.style.display = "flex";
  divStart.children[1].remove();
  divStart.children[divStart.children.length - 1].remove();
  divStart.children[1].innerText = `Volver Al Menú`;

  divStart.children[1].addEventListener("click", () =>
    window.location.reload()
  );
}
