// java js starts here

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navClose = document.querySelector(".nav-close");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  navMenu.classList.toggle("active");
  navClose.classList.toggle("active");
}


// closing nav bar 
const closeNav = document.querySelectorAll(".close");

closeNav.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


// Close menu when click on cross
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navClose.classList.remove("active");
  navMenu.classList.remove("active");
}

