let burger = document.querySelector(".burger > i");
let menu_opt = document.querySelector(".menu");
let links = document.querySelectorAll(".menu a");

burger.addEventListener("click", function () {
  burger.classList.toggle("fa-bars");
  burger.classList.toggle("fa-times");
  menu_opt.classList.toggle("menu-show");
});
links.forEach((link) => {
  link.addEventListener("click", function () {
    menu_opt.classList.remove("menu-show"); // Oculta el menú
    burger.classList.add("fa-bars"); // Asegura que el ícono vuelva a "bars"
    burger.classList.remove("fa-times");
  });
});
