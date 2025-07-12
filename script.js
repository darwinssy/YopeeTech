// Scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Fade-in observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Modal
function openModal(title, desc) {
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-desc").innerText = desc;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// WhatsApp Contact Form
function sendWA(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const msg = document.getElementById("message").value.trim();
  const url = `https://wa.me/6281234567890?text=Halo%20YopeeTech%2C%20saya%20${encodeURIComponent(name)}%0A${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}