// Typing Animation
const subtitle = document.querySelector('.hero-subtitle');
const text = "A Passionate Tech Enthusiast & Web Developer";
let index = 0;

function type() {
  if (index < text.length) {
    subtitle.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
window.addEventListener('load', type);


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

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scroll for navbar links
document.querySelectorAll('header a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// -------- EmailJS contact + auto-reply integration --------
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const templateParams = {
      user_name: this.user_name.value,
      user_email: this.user_email.value,
      message: this.message.value
    };

    // Send message to you
    emailjs.send("service_1i7bf0k", "template_gts26j2", templateParams)
      .then(function(response) {
        // On success, send auto-reply
        emailjs.send("service_1i7bf0k", "template_7ptedbf", templateParams)
          .then(function() {
            formMessage.classList.remove("error");
            formMessage.classList.add("success");
            formMessage.textContent = "✅ Message sent! Auto-reply sent to sender.";
            formMessage.style.display = "block";
            contactForm.reset();
            setTimeout(() => { formMessage.style.display = "none"; }, 5000);
          })
          .catch(function(err) {
            formMessage.classList.remove("success");
            formMessage.classList.add("error");
            formMessage.textContent = "❌ Message sent but auto-reply failed.";
            formMessage.style.display = "block";
            console.error("Auto-reply error:", err);
          });
      }, function(error) {
        formMessage.classList.remove("success");
        formMessage.classList.add("error");
        formMessage.textContent = "❌ Failed to send message. Please try again later.";
        formMessage.style.display = "block";
        console.error("Send error:", error);
      });

  });
});

// Animate skill bars on scroll
const progressBars = document.querySelectorAll('.progress-bar');

function animateProgress() {
  progressBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) {
      bar.style.width = bar.getAttribute('style'); // uses inline width like 50%, 90%
    }
  });
}

window.addEventListener('scroll', animateProgress);
window.addEventListener('load', animateProgress);













