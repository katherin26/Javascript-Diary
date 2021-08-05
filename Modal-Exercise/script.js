"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  //console.log(btnOpenModal[i].textContent); textContent es una propiedad que me da el valor interno de cada [i].
  btnOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal); //este cierra el boton x
overlay.addEventListener("click", closeModal); //y este cierra cuando se hace click por fuera

document.addEventListener("keydown", function (event) {
  console.log("a Key was pressed");
  //console.log(event.key);

  /* if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }*/

  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
