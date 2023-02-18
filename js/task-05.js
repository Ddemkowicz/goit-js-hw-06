let anonymous = document.querySelector(`#name-output`);
console.log(anonymous);
anonymous.textContent = "Anonymous";

const textInput = document.querySelector("input");
textInput.addEventListener("input", (e) => {
  if (e.currentTarget.value === "") {
    anonymous.textContent = "Anonymous";
  } else {
    anonymous.textContent = e.currentTarget.value;
  }
});
