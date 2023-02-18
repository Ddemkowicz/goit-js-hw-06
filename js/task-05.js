let anonymous = document.querySelector(`#name-output`);
console.log(anonymous);
anonymous.textContent = "Anonymous";

const textInput = document.querySelector("input");
textInput.addEventListener("input", (e) => {
  if ((textInput.textContent = "")) {
    anonymous.textContent = "Anonymous";
  }
  anonymous.textContent = e.currentTarget.value;
});
