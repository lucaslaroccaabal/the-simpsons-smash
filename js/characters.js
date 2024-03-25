function characterRandomSummoner() {
  const holeIndex = Math.floor(Math.random() * holes.length);
  const holeDiv = gameDiv.children[holeIndex];
  const characterImg = holeDiv.children[1];
  const holeData = holes[holeIndex];
  if (holeData.state === "inactive") {
    fetch("./assets/charactersinfo.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const charactersArray = Object.values(data);
        const characterData = chance.weighted(
          charactersArray,
          charactersArray.map((character) => character.probability)
        );
        summonCharacter(holeData, characterImg, characterData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
function summonCharacter(hole, img, characterData) {
  img.src = characterData.img;
  img.name = characterData.name;
  anime({
    targets: img,
    height: "100%",
    display: "inline",
    duration: 500,
    complete: function (anim) {
      hole.state = "active";
      deleteCharacter(
        hole,
        img,
        characterData,
        characterData.timeActive,
        false
      );
    },
  });
}
const runningAnimations = [];
function deleteCharacter(
  hole,
  img,
  characterData,
  delay,
  player,
  playerDeleted
) {
  if (player) {
    const animationToSpeed = runningAnimations.find(
      (currentAnimation) => currentAnimation.id === parseInt(img.classList[1])
    );
    runningAnimations.splice(runningAnimations.indexOf(animationToSpeed), 1);
    modifyScore(characterData.value);
    deleteCharacter(hole, img, characterData, 0, false, true);
    animationToSpeed.remove(img);
  } else {
    const animation = anime({
      targets: img,
      height: "0",
      display: "none",
      duration: 1000,
      delay: delay * gameSpeed,
      begin: function (anim) {
        runningAnimations.push(animation);
        img.classList.add(anim.id);
      },
      complete: function () {
        hole.state = "inactive";
        runningAnimations.splice(runningAnimations.indexOf(animation), 1);
        img.classList = "";
        img.classList.add("character");
        !playerDeleted && modifyScore(-characterData.valueAgainst);
      },
    });
  }
}
