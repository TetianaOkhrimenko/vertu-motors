"use strict";

const buttons = document.querySelectorAll(".btn");
const buttonHero = document.querySelector(".hero_btn");
const popUpBlock = document.querySelector(".pop-up");
const popUpIcon = document.querySelector(".pop-up_icon");
const buttonBlock = document.querySelector(".block_btn");
const dropDown = document.querySelector(".drop-down");
const listItem = document.querySelector(".nav_item");

popUpBlock.style.display = "none";

/*Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(button);
    popUpBlock.style.display = "block";
  });
});*/

class UI {
  openWindow = false;

  showPopUp() {
    popUpBlock.style.display = "block";
  }

  closePopUp() {
    popUpBlock.style.display = "none";
  }

  showDropDown() {
    dropDown.style.display = "flex";
  }

  closeDropDown() {
    dropDown.style.display = "none";
  }
}

buttonHero.addEventListener("click", (event) => {
  event.preventDefault();
  const ui = new UI();
  ui.showPopUp();
});

popUpIcon.addEventListener("click", (event) => {
  event.preventDefault();
  const ui = new UI();
  ui.closePopUp();
});

/*buttonBlock.addEventListener("click", (event) => {
  event.preventDefault();
  const ui = new UI();
  ui.showPopUp();
});

buttonBlock.addEventListener("click", (event) => {
  event.preventDefault();
  const ui = new UI();
  ui.closePopUp();
});*/

listItem.addEventListener("click", (event) => {
  event.preventDefault();
  const ui = new UI();
  if (!ui.openWindow) {
    ui.showDropDown();
    ui.openWindow = true;
  } else {
    ui.closeDropDown();
  }
});
