// Show Menu in header by click
let linksMenu = document.querySelector("header .links .icon");
let menu = document.querySelector("header .links ul");
let secondSpanInMenu = document.querySelector(
  "header .links span:nth-child(2)"
);
linksMenu.onclick = function () {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    secondSpanInMenu.style.width = "100%";
  } else {
    secondSpanInMenu.style.width = "70%";
  }
};
