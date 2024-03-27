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

toggleBold.addEventListener("click", () => {
  text.classList.toggle("bold");
  toggleBold.classList.toggle("checked");
});

invertBtn.addEventListener("click", () => {
  text.classList.toggle("invert");
  invertBtn.classList.toggle("checked");
});

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
  localStorage.setItem("font family", fontOptions.value);
  localStorage.setItem("bold", toggleBold.classList.contains("checked"));
  localStorage.setItem("font size", fontSize.textContent);
  localStorage.setItem(
    "invert colors",
    invertBtn.classList.contains("checked")
  );
});

window.onload = () => {
  text.textContent = localStorage.getItem("text");
  fontOptions.value = localStorage.getItem("font family");
  text.style.fontFamily = fontOptions.value;
  if (localStorage.getItem("bold") === "true") {
    text.classList.add("bold");
    toggleBold.classList.add("checked");
  }
  if (localStorage.getItem("invert colors") === "true") {
    invertBtn.classList.add("checked");
    text.classList.add("invert");
  }
  fontSize.textContent = parseInt(localStorage.getItem("font size"));
  text.style.fontSize = `${fontSize.textContent}px`;
};
