let fontOptions = document.querySelector("select");
let toggleBold = document.querySelector(".bold-btn");
let fontSize = document.querySelector("#font-size");
let invertBtn = document.querySelector(".invert-btn");
let addBtn = document.querySelector(".add");
let subBtn = document.querySelector(".subtract");
let text = document.querySelector("p");
let saveBtn = document.querySelector(".save");

fontOptions.addEventListener(
  "change",
  () => (text.style.fontFamily = fontOptions.value)
);

toggleBold.addEventListener("click", () => text.classList.toggle("bold"));

invertBtn.addEventListener("click", () => text.classList.toggle("invert"));

addBtn.addEventListener("click", () => {
  fontSize.textContent = parseInt(fontSize.textContent) + 1;
  text.style.fontSize = `${fontSize.textContent}px`;
});

subBtn.addEventListener("click", () => {
  fontSize.textContent = parseInt(fontSize.textContent) - 1;
  text.style.fontSize = `${fontSize.textContent}px`;
});

saveBtn.addEventListener("click", () => {
  localStorage.setItem("text", text.textContent);
});

window.onload = () => {
  text.textContent = localStorage.getItem("text");
};
