AOS.init();

const slides = document.querySelectorAll(".slide");
let index = 0;

// show slide function
function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

// next / prev buttons
document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

// auto slide every 3.5s
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 3500);

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navList');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // X shakli
  navList.classList.toggle('active');  // Menu ko‘rsatish
});

// Dark mode toggle
const darkModeBtn = document.getElementById('darkModeToggle');

darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Toggle emoji
  darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? '🔆' : '🌙';
});

