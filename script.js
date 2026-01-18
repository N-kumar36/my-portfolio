// Navigation Scroll Active State
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// 1. SELECT ELEMENTS
const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.getElementById("navLinks");
const navLinksList = document.getElementsByClassName("nav-link");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

// 2. MOBILE MENU TOGGLE LOGIC (FIXED & STYLED)
// 2. MOBILE MENU TOGGLE LOGIC
menuToggle.addEventListener("click", () => {
  const isHidden = navLinksContainer.classList.toggle("hidden");

  if (!isHidden) {
    // 1. Style the Mobile Menu Container
    navLinksContainer.className =
      "flex flex-col gap-3 absolute top-20 right-5 bg-[#0f1218]/95 backdrop-blur-xl p-5 rounded-3xl border border-[#7cf5c9]/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 md:hidden min-w-[120px]";

    openIcon.innerHTML = "✕";

    // 2. Style every single link inside the menu
    Array.from(navLinksList).forEach((link, index) => {
      link.className =
        "nav-link text-center border-2 border-[#7cf5c9]/30 block w-full py-1 px-4 rounded-xl text-gray-300 hover:bg-[#7cf5c9] hover:text-black hover:border-[#7cf5c9] transition-all duration-300 font-semibold mb-1 shadow-sm";

      // Optional: Add a fade-in animation delay for each link
      link.style.animation = `fadeIn 0.3s ease forwards ${index * 0.1}s`;
      link.style.opacity = "0";
    });
  } else {
    // Reset to Desktop Layout
    navLinksContainer.className = "hidden md:flex items-center gap-8 list-none";
    openIcon.innerHTML = "☰";

    Array.from(navLinksList).forEach((link) => {
      link.className =
        "nav-link text-gray-400 hover:text-[#7cf5c9] font-medium transition-colors";
      link.style.animation = "none";
      link.style.opacity = "1";
    });
  }
});
// 3. AUTO-CLOSE MENU ON LINK CLICK (Mobile)
const allLinks = document.querySelectorAll("#navLinks a");
allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      navLinksContainer.classList.add("hidden");
      openIcon.innerHTML = "☰";
    }
  });
});

// 4. ACTIVE LINK SCROLLING HIGHLIGHT
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`#navLinks a[href*=${sectionId}]`)
        ?.classList.add("text-[#7cf5c9]");
      document
        .querySelector(`#navLinks a[href*=${sectionId}]`)
        ?.classList.remove("text-gray-400");
    } else {
      document
        .querySelector(`#navLinks a[href*=${sectionId}]`)
        ?.classList.remove("text-[#7cf5c9]");
      document
        .querySelector(`#navLinks a[href*=${sectionId}]`)
        ?.classList.add("text-gray-400");
    }
  });
});
