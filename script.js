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

// === WSZYSTKIE PRZYCISKI CHAPTERÓW ===
const chapterButtons = document.querySelectorAll('.chapter-buttons .pixel-button[data-target]');

chapterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetPage = btn.dataset.target;

    // Pokaż ekran ładowania
    loadingScreen.classList.add('active');

    // Schowaj menu i footer
    chapters.classList.add('hidden');
    footer.classList.add('hidden');

    // Po 2 sekundach przejdź do odpowiedniej strony
    setTimeout(() => {
      window.location.href = targetPage;
    }, 2000);
  });
});
