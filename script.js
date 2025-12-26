const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});



const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinksContainer.classList.toggle("show");
  menuToggle.classList.toggle("active");
});

/* auto close menu when clicking a link */
navLinksContainer.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinksContainer.classList.remove("show");
    menuToggle.classList.remove("active");
  });
});

