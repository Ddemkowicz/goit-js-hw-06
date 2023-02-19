const form = document.querySelector(".login-form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let {
    elements: { email, password },
  } = ev.currentTarget;
  if (email.value == "" || password.value == "") {
    return alert("Uzupełnij wszystkie pola!");
  } else {
    console.log(`Email: ${email.value}, Password: ${password.value}`);
  }
  ev.currentTarget.reset();
});
