const input = document.querySelector("input");

input.addEventListener("blur", (ev) => {
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
