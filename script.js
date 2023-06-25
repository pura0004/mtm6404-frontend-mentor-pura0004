// java js starts here

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navClose = document.querySelector(".nav-close");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  navMenu.classList.toggle("active");
  navClose.classList.toggle("active");
}
