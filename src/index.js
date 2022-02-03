require("bootstrap");
require("@fortawesome/fontawesome-free");
const AOS = require("aos");
// Starting Animate On Scroll (AOS)
AOS.init({
  delay: 200,
  duration: 1000,
  once: true,
  mirror: false,
});

const navbar = document.querySelector(".navbar");

// window.addEventListener("scroll", function () {
//   if (this.scrollY > 300) {
//     navbar.classList.add("shadow");
//   } else {
//     navbar.classList.remove("shadow");
//   }
// });
