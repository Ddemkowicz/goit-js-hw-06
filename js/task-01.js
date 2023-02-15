// const items = document.querySelectorAll(".item");
// items[0].classList.add(".listF");
// items[1].classList.add(".listS");
// items[2].classList.add(".listT");

// console.log(items);

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

// const elementNumber = document.querySelector(".item ul");
// console.log(elementNumber);

// const title = document.querySelector("h2");
// console.log(title.textContent);
// const titles = document.querySelectorAll("h2");
// console.log(titles[1].textContent);
// const elements = document.querySelectorAll(".item li");
// console.log(elements);

// console.log(title.nextElementSibling.children.length);
