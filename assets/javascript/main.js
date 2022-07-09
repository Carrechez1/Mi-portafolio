const menu = document.getElementById("hero__menu");
const abrir = document.getElementById("btnnav");
const cerrar = document.getElementById("hero__cerrar");

abrir.addEventListener("click", (e) => {
  menu.classList.add("hero__mostrarmenu");
});
cerrar.addEventListener("click", (e) => {
  menu.classList.remove("hero__mostrarmenu");
});
