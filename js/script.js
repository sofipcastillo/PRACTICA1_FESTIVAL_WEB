// BURGER MENU
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
    burger.classList.add("fa-bars"); // el ícono vuelva a "bars"
    burger.classList.remove("fa-times");
  });
});

//FORMULARIO ENTRADAS
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
    '#form-entradas input[type="number"]'
  );
  const totalPriceElement = document.getElementById("totalPrice");
  const comprarBtn = document.getElementById("comprarEntradas");

  function calcularTotal() {
    let total = 0;
    inputs.forEach((input) => {
      const precio = parseFloat(input.dataset.price) || 0;
      const cantidad = parseInt(input.value) || 0;
      total += precio * cantidad;
    });

    totalPriceElement.textContent = total.toFixed(2) + " €";

    if (total > 0) {
      comprarBtn.classList.remove("disabled");
    } else {
      comprarBtn.classList.add("disabled");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("input", calcularTotal);
  });
});
