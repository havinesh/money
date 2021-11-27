// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

// searchBox.addEventListener("click", () => {
//   navbar.classList.toggle("showInput");
//   if (navbar.classList.contains("showInput")) {
//     searchBox.classList.replace("bx-search", "bx-x");
//   } else {
//     searchBox.classList.replace("bx-x", "bx-search");
//   }
// });

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
let servicesArrow = document.querySelector(".services-arrow");
servicesArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
let joinusArrow = document.querySelector(".joinus-arrow");
joinusArrow.onclick = function () {
  navLinks.classList.toggle("show4");
};
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
  navLinks.classList.toggle("show2");
};
let aboutArrow = document.querySelector(".about-arrow");
aboutArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};
