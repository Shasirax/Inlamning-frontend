//Knappar
const menuBtn = document.querySelector("#menu-btn");
const addBtns = document.querySelectorAll(".add-list-btn");
const emptyListBtn = document.querySelector("#empty-list-btn");

//Element
const menu = document.querySelector("#menu");
const shoppingList = document.querySelector("#shopping-list");

//Variabler
const total = document.querySelector("#total");
const remaining = document.querySelector("#remaining");
let shoppingListAmount = 0;

//Funktioner
function openMenu() {
  menu.classList.toggle("open");
}

function addToShoppingList(event) {
  event.preventDefault();
  const ingredientsArray = [];
  const recipe = event.currentTarget.closest("article");

  const ingredients = recipe.querySelectorAll("ul p");

  //Fick hjälp med detta online(Stackoverflow) men förstår koden.
  ingredients.forEach(function (item) {
    ingredientsArray.push(item.textContent);
  });

  while (ingredientsArray.length > 2) {
    const newItem = document.createElement("li");
    newItem.textContent = `${ingredientsArray.shift()} × ${ingredientsArray.shift()}`;
    shoppingList.append(newItem);
    shoppingListAmount++;
  }
  shoppingListAmountUpdater();
}

function emptyShoppingList() {
  const listItems = document.querySelectorAll("#shopping-list li");
  listItems.forEach(function (item) {
    item.remove();
  });
  shoppingListAmount = 0;
  shoppingListAmountUpdater();
}

function shoppingListAmountUpdater() {
  total.textContent = `Totalt: ${shoppingListAmount} ingredienser`;
}

//Event
menuBtn.addEventListener("click", openMenu);
addBtns.forEach(function (item) {
  item.addEventListener("click", addToShoppingList);
});
emptyListBtn.addEventListener("click", emptyShoppingList);
