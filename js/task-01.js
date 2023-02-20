function getNumberOfCategories() {
  const numberOfCategories = document.querySelectorAll(".item");
  return `Number of categories: ${numberOfCategories.length}`;
}
console.log(getNumberOfCategories());

function getNumberOfElements() {
  const title = document.querySelector("h2");
  const categoryTitle = document.querySelectorAll("h2");

  for (let i = 0; i < categoryTitle.length; i++) {
    console.log(`Category: ${categoryTitle[i].textContent}`);
    console.log(
      `Elements: ${categoryTitle[i].nextElementSibling.children.length}`
    );
  }
}
getNumberOfElements();
