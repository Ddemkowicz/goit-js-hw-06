const input = document.querySelector("input");
console.log(input.dataset);
input.addEventListener("blur", (ev) => {
  console.log(input.value.length);
  console.log(input.dataset.length);
  if (input.value.length == input.dataset.length) {
    input.setAttribute("class", "valid");
  } else if (
    input.value.length != input.dataset.length &&
    input.value.length > 0
  ) {
    input.setAttribute("class", "invalid");
  } else {
    input.removeAttribute("class");
  }
});
