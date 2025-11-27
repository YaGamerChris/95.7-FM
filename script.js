const radio = document.getElementById("radio");
const playBtn = document.getElementById("playBtn");

// PLAY / PAUSE
playBtn.addEventListener("click", () => {
  if (radio.paused) {
    radio.play();
    playBtn.textContent = "⏸";
  } else {
    radio.pause();
    playBtn.textContent = "▶";
  }
});
