const input = document.querySelector("input");
const text = document.querySelector("#text");

input.addEventListener("input", (ev) => {
  text.style.fontSize = `${input.value}px`;
});
