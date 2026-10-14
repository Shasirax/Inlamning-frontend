const darkModeBtn = document.querySelector("#dark-mode-btn");

function darkMode() {
  document.querySelector("body").classList.toggle("dark");
}

darkModeBtn.addEventListener("click", darkMode);
