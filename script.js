const gameContainer = document.getElementById('gameContainer');
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  gameContainer.style.transform = `translate(${x}px, ${y}px)`;
});

// === ELEMENTY ===
const playBtn = document.getElementById('playBtn');
const mainMenu = document.getElementById('mainMenu');
const chapters = document.getElementById('chapters');
const backBtn = document.getElementById('backBtn');
const footer = document.getElementById('footer');
const chapter1Btn = document.getElementById('chapter1Btn');

// === PLAY ===
playBtn.addEventListener('click', () => {
  mainMenu.classList.add('hidden');
  chapters.classList.remove('hidden');
  footer.classList.add('hidden');
});

// === BACK ===
backBtn.addEventListener('click', () => {
  chapters.classList.add('hidden');
  mainMenu.classList.remove('hidden');
  footer.classList.remove('hidden');
});

// === CHAPTER 1 ===
chapter1Btn.addEventListener('click', () => {
  const overlay = document.createElement('div');
  overlay.classList.add('loading-overlay');

const chapter1Btn = document.getElementById("chapter1");
const loadingScreen = document.getElementById("loadingScreen");

chapter1Btn.addEventListener("click", () => {
  // Pokaż ekran ładowania
  loadingScreen.classList.add("active");

  // Poczekaj 2 sekundy, potem przejdź dalej
  setTimeout(() => {
    window.location.href = "chapter1.html";
  }, 2000);
});


