"use strict";
const Buttons = Array.from(document.querySelectorAll(".btn"));
const myModal = document.querySelector(".modal");
const __Cancel = document.querySelector(".cancel");
const onShow = () => {
  myModal.style.transform = "scale(1)";
};
Buttons.forEach((el) => {
  el.addEventListener("click", onShow);
});

const onCancel = () => {
  myModal.style.transform = "scale(0)";
};
__Cancel.addEventListener("click", onCancel);

const __burger = document.querySelector(".menu__burger");
let i = 0;
const onBurger = () => {
  i++;
  if (i % 2 === 0) {
    document.querySelector(".header__nav__list").style.display = "flex";
  } else {
    document.querySelector(".header__nav__list").style.display = "none";
  }
  document.querySelector(".header__nav__list").classList.toggle("head__active");
};
__burger.addEventListener("click", onBurger);
