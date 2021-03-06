'use strict';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import AOS from 'aos';

let navbar = document.querySelector('#topNav');
let mobileNav = document.querySelector('#mobileNav');
let toggler = document.querySelector('.navbar-toggler');
let mobileNavLinks = document.querySelectorAll('#mobileNav .nav-link');

// ===========Automatic Navbar Close on link click=======//
function handleNavClose() {
  toggler.click();
}

mobileNavLinks.forEach((link) => {
  if (link.href.includes('#')) {
    link.addEventListener('click', handleNavClose);
  }
});


const startAOS = () => {
  AOS.init({
    delay: 200,
    duration: 1000,
    once: true,
    mirror: false,
    disableMutationObserver: true,
    disable: 'mobile',
  });
};

// ===========Navbar shadow when scrolled more than 300px=========//
function toggleNavbarShadow() {
  if (this.scrollY >= 300) {
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }
}

// Starting Animate On Scroll (AOS)

window.addEventListener('load', function () {
  window.addEventListener('scroll', toggleNavbarShadow);
  startAOS();
});

//=============Copy======/
window.onload = function () {
  let copy = document.getElementById('copy');
  let date = new Date();
  copy.textContent = date.getFullYear();
};

window.addEventListener('load', function () {});