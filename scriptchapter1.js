const dialogues = [
  "Gdzie ja jestem...?",
  "Wszystko wygląda inaczej niż pamiętam...",
  "To miejsce... wydaje się znajome.",
  "Muszę iść dalej, może znajdę jakieś wskazówki.",
  "Ale najpierw... powinienem się rozejrzeć.",
  "CHAPTER 1 IN WORK"
];

const textElement = document.getElementById("dialogue-text");
const dialogueBox = document.querySelector(".dialogue-box");

let dialogueIndex = 0;
let charIndex = 0;
let isSkipping = false;
let isTyping = false;

// === FUNKCJA PISANIA TEKSTU ===
function typeDialogue() {
  isTyping = true;
  const text = dialogues[dialogueIndex];
  const speed = isSkipping ? 10 : 40; // szybciej gdy Shift

  if (charIndex < text.length) {
    textElement.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeDialogue, speed);
  } else {
    isTyping = false;
  }
}

// === FUNKCJA NASTĘPNEGO TEKSTU ===
function nextDialogue() {
  if (isTyping) return; // nie przeskakuj w trakcie pisania

  dialogueIndex++;
  if (dialogueIndex < dialogues.length) {
    textElement.textContent = "";
    charIndex = 0;
    typeDialogue();
  } else {
    // KONIEC ROZDZIAŁU
    dialogueBox.remove();
    const endText = document.createElement("div");
    endText.classList.add("chapter-end");
    endText.textContent = "CHAPTER 1 IN WORK";
    document.body.appendChild(endText);
  }
}

// === START ===
typeDialogue();

// === KLIK = następny tekst ===
document.addEventListener("click", nextDialogue);

// === SHIFT = skip przyspieszony ===
document.addEventListener("keydown", (e) => {
  if (e.key === "Shift") isSkipping = true;
});
document.addEventListener("keyup", (e) => {
  if (e.key === "Shift") isSkipping = false;
});
