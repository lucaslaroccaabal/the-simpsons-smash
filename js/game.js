function gameStarted() {
  holes = generateHoles();
  initEvents(holes);
  displayScore();
  setInterval(() => {
    let summon = Math.ceil(Math.random() * 2);
    if (summon === 1) {
      summonCharacter();
    }
  }, gameSpeed);
}
