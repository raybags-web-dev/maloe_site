"use strict";
const navBtn = document.querySelector("#navbar-toggler");
const navDiv = document.querySelector(".navbar-collapse");
const navLinks = Array.from(document.querySelectorAll(".navbar-nav .nav-link"));

// show navbtn handler
navBtn.addEventListener("click", () => {
  navDiv.classList.add("showNav");
  navDiv.classList.remove("hideNav");
});

// show navbtn handler
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navDiv.classList.add("hideNav");
    navDiv.classList.remove("showNav");
  });
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
