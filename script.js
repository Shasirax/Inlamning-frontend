console.log("Kör!");

const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

function openMenu() {
  menu.classList.toggle("open");
}

function windowResizer() {
    if(window.screen.availWidth >= 700 ) {
        menu.classList.remove("open");
    }
}

menuBtn.addEventListener("click", openMenu);
window.addEventListener("resize", windowResizer);
