// Simple scroll animation effect
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
  });

  const revealSection = () => {
    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        section.style.transition = "all 0.6s ease-out";
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection(); // Initial call
});
