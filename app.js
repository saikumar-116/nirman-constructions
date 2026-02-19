// Mobile Navigation Toggle
const mobileToggle = document.getElementById("mobileToggle");
const mainNav = document.getElementById("mainNav");

mobileToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
  mobileToggle.innerHTML = mainNav.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Header scroll effect
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(
    ".section-title, .about-content, .service-card, .portfolio-item, .contact-container",
  )
  .forEach((el) => {
    observer.observe(el);
  });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close mobile menu if open
      if (mainNav.classList.contains("active")) {
        mainNav.classList.remove("active");
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Contact form submission
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! We will contact you soon.");
  contactForm.reset();
});

// Initialize animations on page load
window.addEventListener("load", () => {
  // Animate hero content
  document.querySelector(".hero-content").style.animation =
    "fadeUp 1s forwards 0.5s";
});
