function initEvents(holesArray) {
  holesArray.forEach((hole) => {
    const characterImg = document.querySelector(`#hole${hole.id}`).children[1];
    characterImg.addEventListener("click", () => {
      fetch("./assets/charactersinfo.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const charactersArray = Object.values(data);
          const characterData = charactersArray.find((character) => {
            return character.name === characterImg.name;
          });
          deleteCharacter(hole, characterImg, characterData, 0, true);
          showInHole(hole, characterData);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });
}
