const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul");
const elements = [];
for (let i = 0; i < ingredients.length; i++) {
  elements[i] = document.createElement("li");
  elements[i].classList.add("item");
  elements[i].textContent = ingredients[i];
  list.append(elements[i]);
}
