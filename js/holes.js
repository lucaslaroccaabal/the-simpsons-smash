const holeProperties = {
  width: 6,
  height: 6,
  margin: 3,
};
class hole {
  constructor(id, x, y) {
    this.id = id;
    this.width = holeProperties.width;
    this.height = holeProperties.height;
    this.margin = holeProperties.margin;
    this.x = x;
    this.y = y;
    this.state = "inactive";
  }
  display(x, y, id) {}
}
function generateHoles() {
  numberOfHoles = 10;
  const holes = [];
  let validPosition = true;
  for (let i = 1; i <= numberOfHoles; i++) {
    const currentY = Math.ceil(Math.random() * (100 - holeProperties.height));
    const currentX = Math.ceil(Math.random() * (100 - holeProperties.width));
    validPosition = holes.find(
      (hole) =>
        hole.y - hole.margin <
          currentY + holeProperties.height + holeProperties.margin &&
        hole.y + hole.height + hole.margin > currentY - holeProperties.margin &&
        hole.x - hole.margin <
          currentX + holeProperties.width + holeProperties.margin &&
        hole.x + hole.width + hole.margin > currentX - holeProperties.margin
    );
    if (validPosition === undefined) {
      holes.push(new hole(i, currentX, currentY));
    } else {
      i--;
    }
  }
  const gameDiv = document.createElement("div");
  gameDiv.classList.add("w-full", "h-5/6", "bottom-0", "absolute");
  gameDiv.id = "gameDiv";
  gameDiv.style.backgroundColor = "#2F6B3C";
  body.appendChild(gameDiv);
  holes.forEach((holeToDraw) => {
    const draw = document.createElement("div");
    draw.id = "hole" + holeToDraw.id;
    draw.classList.add("hole");
    draw.style.width = `${holeToDraw.width}%`;
    draw.style.height = `${holeToDraw.height}%`;
    draw.style.minWidth = `50px`;
    draw.style.left = `${holeToDraw.x}%`;
    draw.style.top = `${holeToDraw.y}%`;
    const holeImg = document.createElement("img");
    holeImg.src = "./images/hole.png";
    holeImg.style.width = "100%";
    holeImg.style.height = "100%";
    const span = document.createElement("span");
    span.innerText = "0";
    span.style.display = "none";
    span.style.width = "100%";
    span.style.height = "100%";
    span.style.position = "absolute";
    span.style.inset = "0";
    span.style.fontSize = "2rem";
    const characterImg = document.createElement("img");
    characterImg.classList.add("character");
    draw.appendChild(holeImg);
    draw.appendChild(characterImg);
    draw.appendChild(span);
    gameDiv.appendChild(draw);
  });
  return holes;
}
