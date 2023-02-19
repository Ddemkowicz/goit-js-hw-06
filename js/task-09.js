function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");
btnChangeColor.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
});
