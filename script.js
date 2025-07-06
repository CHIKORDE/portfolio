window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Simulate form submission
  alert("Thank you for your message! I will get back to you soon.");
  this.reset();
});

// Animate skill bars when they come into view
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll(".skill-progress");
      skillBars.forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = "0%";
        setTimeout(() => {
          bar.style.width = width;
        }, 200);
      });
    }
  });
}, observerOptions);

// Observe skills section
const skillsSection = document.getElementById("skills");
if (skillsSection) {
  observer.observe(skillsSection);
}

// Add entrance animations to project cards
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.6s ease";
  card.style.transitionDelay = `${index * 0.2}s`;
});

const projectObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

projectCards.forEach((card) => {
  projectObserver.observe(card);
});

// Add typing effect to hero subtitle
const subtitle = document.querySelector(".hero .subtitle");
const originalText = subtitle.textContent;
subtitle.textContent = "";

setTimeout(() => {
  let i = 0;
  const typeInterval = setInterval(() => {
    subtitle.textContent += originalText.charAt(i);
    i++;
    if (i > originalText.length) {
      clearInterval(typeInterval);
    }
  }, 100);
}, 1000);
let linkedin = document.getElementById("linkedin");
linkedin.addEventListener("click", function () {
  window.open("https://www.linkedin.com/in/shrinivaschikorde", "_blank");
});
