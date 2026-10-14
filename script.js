console.log("Kör!");

const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
const addBtn1 = document.querySelector("#add-btn-1");
const addBtn2 = document.querySelector("#add-btn-2");
const addBtn3 = document.querySelector("#add-btn-3");
const emptyListBtn = document.querySelector("#empty-list-btn");

const shoppingList = document.querySelector("#shopping-list");
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

function addToShoppingList(recepie) {
  //   console.log("Funktion körs");
  const ingredientsArray = [];
  let ingredients;
  switch (recepie) {
    case 1:
      ingredients = document.querySelectorAll("#ingredients-recipe-1 p");
      break;
    case 2:
      ingredients = document.querySelectorAll("#ingredients-recipe-2 p");
      break;
    case 3:
      ingredients = document.querySelectorAll("#ingredients-recipe-3 p");
      break;
  }

  //Fick hjälp med detta online men förstår koden.
  ingredients.forEach(function (item) {
    ingredientsArray.push(item.textContent);
  });

  //   console.log(ingredientsArray);

  while (ingredientsArray.length > 0) {
    const newItem = document.createElement("li");
    newItem.textContent = `${ingredientsArray.shift()} × ${ingredientsArray.shift()}`;
    shoppingList.append(newItem);
  }
}

function emptyShoppingList() {
  console.log("Funktion emptyShoppingList körs");
  let listItems = document.querySelectorAll("#shopping-list li");
//   console.log(listItems);
  listItems.forEach(function (item) {
    shoppingList.remove(item);
  });
}

menuBtn.addEventListener("click", openMenu);
window.addEventListener("resize", windowResizer);
addBtn1.addEventListener("click", addToShoppingList(1));
addBtn2.addEventListener("click", addToShoppingList(2));
addBtn3.addEventListener("click", addToShoppingList(3));
emptyListBtn.addEventListener("click", emptyShoppingList);
