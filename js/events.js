function initEvents(holesArray) {
  holesArray.forEach((hole) => {
    const characterImg = document.querySelector(`#hole${hole.id}`).children[1];
    characterImg.addEventListener("click", () => {
      changeCharacterState(
        characterImg,
        hole,
        gameSpeed * 3,
        parseInt(characterImg.name),
        "player"
      );
    });
  });
}
