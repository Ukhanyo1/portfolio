// Typing Animation
const typingElement = document.querySelector(".typing");
const texts = ["Frontend Developer", "Web Designer", "Tech Enthusiast"];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex][charIndex];
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Background Particles
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const numParticles = 80;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 1;
    this.speedY = (Math.random() - 0.5) * 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = "#00ffcc";
    ctx.shadowColor = "#00ffcc";
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

// Navbar background change on scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(13, 13, 13, 0.85)";
    header.style.boxShadow = "0 2px 20px rgba(0, 255, 204, 0.25)";
  } else {
    header.style.background = "rgba(13, 13, 13, 0.6)";
    header.style.boxShadow = "0 2px 15px rgba(0, 255, 204, 0.15)";
  }
});

// Contact form success message
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload
  document.getElementById("successMessage").style.display = "block";

  // Hide after 3 seconds
  setTimeout(() => {
    document.getElementById("successMessage").style.display = "none";
  }, 3000);

  // Reset form
  this.reset();
});




