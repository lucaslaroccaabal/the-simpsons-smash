function displayTime() {
  const timeBox = document.createElement("div");
  timeBox.id = "timeBox";
  timeBox.innerHTML = `<p class="text-4xl my-auto">time: 00:00</p>`;
  document.querySelector("body").appendChild(timeBox);
}
function modifyTime(time) {
  time.add(1, "seconds");
  document.querySelector(
    "#timeBox"
  ).innerHTML = `<p class="text-4xl my-auto">time: 
  ${moment.duration(time).minutes()}:${moment.duration(time).seconds()}</p>`;
  return time;
}
