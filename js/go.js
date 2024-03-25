const body = document.querySelector("body");
const divStart = document.createElement("div");
divStart.innerHTML = `
<h1 class="text-8xl font-bold text-yellow-500 text-center" >The Simpsons Smash!</h1>
<p class="text-2xl font-semibold text-center" >Golpea a  los personajes y suma puntos!</p>
<button id="playButton" class="text-center bg-gradient-to-br from-yellow-600 to-yellow-400 font-bold rounded-lg px-3 ">Jugar</button>
`;
divStart.classList.add(
  "flex",
  "flex-col",
  "items-center",
  "mx-auto",
  "my-auto",
  "w-fit",
  "px-20",
  "py-10",
  "rounded-lg",
  "gap-5",
  "z-10"
);
body.appendChild(divStart);
const start = document.querySelector("#playButton");
start.addEventListener("click", () => {
  divStart.style.display = "none";
  gameStarted();
});
