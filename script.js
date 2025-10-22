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
const loadingScreen = document.getElementById('loadingScreen');

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
  // Pokaż ekran ładowania
  loadingScreen.classList.add('active');

  // Opcjonalnie schowaj menu i footer
  chapters.classList.add('hidden');
  footer.classList.add('hidden');

  // Poczekaj 2 sekundy, potem przejdź do chapter1.html
  setTimeout(() => {
    window.location.href = "chapter1.html";
  }, 2000);
});
