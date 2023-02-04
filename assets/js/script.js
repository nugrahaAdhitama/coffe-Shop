// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamMenu = document.querySelector("#hamburger-menu");

hamMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click outside sidebar to close nav
document.addEventListener("click", (e) => {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
