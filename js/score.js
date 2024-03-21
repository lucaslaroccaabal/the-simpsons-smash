function displayScore() {
  const scoreBox = document.createElement("div");
  scoreBox.id = "scoreBox";
  scoreBox.innerHTML = `<p class="text-4xl my-auto">score: ${score}</p>`;
  document.querySelector("body").appendChild(scoreBox);
}
function ModifyScore(toAdd) {
  score += toAdd;
  document.querySelector(
    "#scoreBox"
  ).innerHTML = `<p class="text-4xl my-auto">score: ${score}</p>`;
}
