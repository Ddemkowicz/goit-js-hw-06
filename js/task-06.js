const input = document.querySelector("input");

input.addEventListener("blur", (ev) => {
  if (input.length === input.dataset.action) {
    input.setAttribute("class", "valid");
  } else if (input.length !== input.dataset.action) {
    input.setAttribute("class", "invalid");
  }
});
// console.log(input.classList);s
