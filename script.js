window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});

const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});

// Skill Info
const skills = document.querySelectorAll(".skill-card");
const skillInfo = document.getElementById("skill-info");
const skillTitle = document.getElementById("skill-title");
const skillDescription = document.getElementById("skill-description");

const skillTexts = {
  Java: "Java: Objektorientierte Programmiersprache, ideal für Minecraft Plugins und Serverentwicklung.",
  JavaScript: "JavaScript: Für dynamische Webanwendungen, Frontend-Interaktivität und Node.js Backend.",
  HTML: "HTML: Strukturierung von Webseiten-Inhalten mit modernen semantischen Elementen.",
  CSS: "CSS: Styling und Animationen für responsive und ansprechende Designs.",
  Python: "Python: Vielseitige Scriptsprache für Automatisierung, Bots und Backend-Projekte."
};

skills.forEach(skill => {
  skill.addEventListener("click", () => {
    const s = skill.getAttribute("data-skill");
    skillTitle.textContent = s;
    skillDescription.textContent = skillTexts[s];
    skillInfo.classList.remove("hidden");
  });
});
