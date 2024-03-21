let activeHoles = [];
function summonCharacter() {
  const gameDiv = document.querySelector("#gameDiv");
  const holeToSummonIndex = Math.floor(Math.random() * holes.length);
  const holeToSummon = gameDiv.children[holeToSummonIndex];
  if (holes[holeToSummonIndex].state === "inactive") {
    whichcharacter = Math.ceil(Math.random() * 5);
    fetch("./assets/charactersinfo.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const characterToSummon = data[`${whichcharacter}`];
        const characterImg = holeToSummon.children[1];
        characterImg.src = characterToSummon.img;
        characterImg.name = characterToSummon.value;

        changeCharacterState(
          characterImg,
          holes[holeToSummonIndex],
          gameSpeed * 4
        );
        activeHoles.push(holes[holeToSummonIndex]);
        console.log(activeHoles);
        setTimeout(() => {
          changeCharacterState(
            gameDiv.children[activeHoles[0]?.id - 1]?.children[1],
            holes[activeHoles[0]?.id - 1],
            gameSpeed * 4,
            characterToSummon.value
          );
          activeHoles.shift();
          console.log(activeHoles);
        }, gameSpeed * characterToSummon.timeActive);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function changeCharacterState(character, hole, duration, score, who) {
  if (who != "player") {
    if (hole != undefined) {
      switch (hole.state) {
        case "active":
          ModifyScore(-score / 2);
          anime({
            targets: character,
            height: "0",
            display: "none",
            duration: duration,
          });
          hole.state = "inactive";
          break;
        case "inactive":
          anime({
            targets: character,
            height: "100%",
            display: "inline-block",
            duration: duration,
          });
          hole.state = "active";
          break;
        default:
          break;
      }
    }
  } else {
    const deletedHole = activeHoles.find((activeHole) => {
      return activeHole?.id === hole.id;
    });
    console.log(activeHoles.indexOf(deletedHole));
    activeHoles.splice(activeHoles.indexOf(deletedHole), 1, undefined);
    console.log(activeHoles);
    ModifyScore(score);
    anime({
      targets: character,
      height: "0",
      display: "none",
      duration: duration,
    });
    hole.state = "inactive";
  }
}
