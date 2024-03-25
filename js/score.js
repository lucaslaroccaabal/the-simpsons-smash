function displayScore() {
  const scoreBox = document.createElement("div");
  scoreBox.id = "scoreBox";
  scoreBox.innerHTML = `<p class="text-4xl my-auto">score: ${score}</p>`;
  document.querySelector("body").appendChild(scoreBox);
}
function modifyScore(toAdd) {
  score += toAdd;
  document.querySelector(
    "#scoreBox"
  ).innerHTML = `<p class="text-4xl my-auto">score: ${score}</p>`;
}
function showInHole(hole, characterData) {
  const characterSpan = document.querySelector(`#hole${hole.id}`).children[2];
  characterSpan.innerText = parseInt(characterData.value);
  characterSpan.style.display = "inline";
  characterSpan.style.color = "blue";
  characterSpan.style.textAlign = "center";
  anime({
    targets: characterSpan,
    translateY: [-40, -60],
    display: "none",
    opacity: [1, 0],
    duration: 3000,
  });
}
