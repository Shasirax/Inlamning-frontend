console.log("Kör!");

const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const addBtn1 = document.querySelector("#add-btn-1");
const addBtn2 = document.querySelector("#add-btn-2");
const addBtn3 = document.querySelector("#add-btn-3");

const list = document.querySelector("#shopping-list");
const total = document.querySelector("#total");
const remaining = document.querySelector("#remaining");

function openMenu() {
  menu.classList.toggle("open");
}

function windowResizer() {
  if (window.screen.availWidth >= 700) {
    menu.classList.remove("open");
  }
}

function addToShoppingList() {
  console.log("Funktion körs");
  let ingredients = document.querySelectorAll("#ingredients-recipe-1 li");
  
  ingredients.forEach(function (item) {
    console.log(item.textContent);
  });

  const newItem = document.createElement("li");
}

menuBtn.addEventListener("click", openMenu);
window.addEventListener("resize", windowResizer);
addBtn1.addEventListener("click", addToShoppingList);
addBtn2.addEventListener("click", addToShoppingList);
addBtn3.addEventListener("click", addToShoppingList);
