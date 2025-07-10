window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  gsap.to(loader, { opacity: 0, duration: 1, onComplete: () => loader.style.display = "none" });
});

const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
burger.addEventListener("click", () => navLinks.classList.toggle("hidden"));
