const keys = document.querySelectorAll(".key");
const regularKeys = document.querySelectorAll(".white");
const sharpKeys = document.querySelectorAll(".black");

const whiteKeys = ["a", "s", "d", "f", "j" , "k" , "l"]; 
const blackKeys = ["w", "e", "r", "u", "i"]; 

keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = whiteKeys.indexOf(key);
  const blackKeyIndex = blackKeys.indexOf(key);

  if (whiteKeyIndex > -1) playNote(regularKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(sharpKeys[blackKeyIndex]);
});

let playNote = (key) => {
  const noteSound = document.getElementById(key.dataset.note);
  noteSound.currentTime = 0;
  noteSound.play();
  key.classList.add("active");
  noteSound.addEventListener("ended", () => {
    key.classList.remove("active");
  });
};
  