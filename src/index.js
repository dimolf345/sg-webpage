"use strict";
require("bootstrap");
require("@fortawesome/fontawesome-free");
const { computeStyles } = require("@popperjs/core");
const AOS = require("aos");
// Starting Animate On Scroll (AOS)
AOS.init({
  delay: 200,
  duration: 1000,
  once: true,
  mirror: false,
});

let navbar = document.querySelector("#topNav");
let mobileNav = document.querySelector("#mobileNav");
let toggler = document.querySelector(".navbar-toggler");
let mobileNavLinks = document.querySelectorAll("#mobileNav .nav-link");

// ===========Automatic Navbar Close on link click=======//
function handleNavClose() {
  toggler.click();
}

mobileNavLinks.forEach((link) => {
  if (link.href.includes("#")) {
    link.addEventListener("click", handleNavClose);
  }
});

// ===========Navbar shadow when scrolled more than 300px=========//
function toggleNavbarShadow() {
  if (this.scrollY >= 300) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
}

window.addEventListener("load", function () {
  window.addEventListener("scroll", toggleNavbarShadow);
});

//=============Copy======/
window.onload = function () {
  let copy = document.getElementById("copy");
  let date = new Date();
  copy.textContent = date.getFullYear();
};
