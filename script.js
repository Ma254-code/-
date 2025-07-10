window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  gsap.to(loader, { opacity: 0, duration: 1, onComplete: () => loader.style.display = "none" });
});

// Burger menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
burger.addEventListener("click", () => navLinks.classList.toggle("hidden"));

// Skills Modal
const skills = document.querySelectorAll(".skill-card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

const skillTexts = {
  Java: "Java is used for building robust Minecraft plugins and large-scale applications.",
  JavaScript: "JavaScript makes websites interactive and dynamic, both frontend and backend with Node.js.",
  HTML: "HTML structures web pages using semantic tags for SEO and accessibility.",
  CSS: "CSS styles websites, creating responsive and beautiful designs with animations.",
  Python: "Python is a versatile language for automation, AI, data analysis, and web development."
};

skills.forEach(skill => {
  skill.addEventListener("click", () => {
    const s = skill.getAttribute("data-skill");
    modalTitle.textContent = s;
    modalDescription.textContent = skillTexts[s];
    modal.classList.remove("hidden");
    gsap.from(".modal-content", { scale: 0.5, opacity: 0, duration: 0.5, ease: "back.out(1.7)" });
  });
});
closeModal.addEventListener("click", () => modal.classList.add("hidden"));
