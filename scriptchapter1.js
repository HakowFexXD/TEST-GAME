const dialogs = [
  "Oh hey.",
  "........",
  "It seem you are curious about whole story here huh?",
  ".........",
  "I guess you try to see the WHOLE story"
];

let currentDialog = 0;
let isTyping = false;
let textIndex = 0;
let skipMode = false;

const dialogText = document.getElementById("dialogText");
const nextArrow = document.getElementById("nextArrow");
const overlay = document.getElementById("overlay");

// === Funkcja wypisywania liter po kolei ===
function typeDialog(text) {
  isTyping = true;
  textIndex = 0;
  dialogText.textContent = "";

  const speed = skipMode ? 15 : 45;
  const interval = setInterval(() => {
    dialogText.textContent = text.slice(0, textIndex);
    textIndex++;

    if (textIndex > text.length) {
      clearInterval(interval);
      isTyping = false;
    }
  }, speed);
}

// === Następny dialog ===
function nextDialog() {
  if (isTyping) return;
  currentDialog++;

  if (currentDialog < dialogs.length) {
    typeDialog(dialogs[currentDialog]);
  } else {
    // === KONIEC CHAPTERU ===
    overlay.classList.add("active");
  }
}

// === Start ===
typeDialog(dialogs[0]);

// === Obsługa klawiszy ===
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    nextDialog();
  } else if (e.key === "Shift") {
    skipMode = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Shift") {
    skipMode = false;
  }
});

// === Kliknięcie w strzałkę ===
nextArrow.addEventListener("click", nextDialog);
