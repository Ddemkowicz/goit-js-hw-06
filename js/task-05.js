let anonymous = document.querySelector(`#name-output`);

const textInput = document.querySelector("input");
textInput.addEventListener("input", (e) => {
  if (e.currentTarget.value === "") {
    anonymous.textContent = "Anonymous";
  } else {
    anonymous.textContent = e.currentTarget.value;
  }
});
