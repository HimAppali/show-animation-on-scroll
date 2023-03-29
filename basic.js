"use strict";
const liElements = document.querySelectorAll(".list-item");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 1,
  }
);

liElements.forEach((eachLi) => observer.observe(eachLi));
