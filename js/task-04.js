const counterValue = document.querySelector("#value");
console.log(counterValue.textContent);

const decrement = document.querySelector(`button[data-action="decrement"]`);
console.log(decrement.dataset.action);
decrement.addEventListener("click", () => {
  counterValue.textContent -= 1;
});

const increment = document.querySelector(`button[data-action="increment"]`);
console.log(increment.dataset.action);
increment.addEventListener("click", () => {
  counterValue.textContent++;
});
