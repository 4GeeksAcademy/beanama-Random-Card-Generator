/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let number = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
let symbol = ["♦", "♥", "♠", "♣"];

window.onload = function() {
  function generateCard() {
    const selectedNumber = getRandomCharacter(number);
    const selectedSymbol = getRandomCharacter(symbol);

    document.getElementById("simbolo1").innerHTML = `${selectedSymbol}`;
    document.getElementById("numero").innerHTML = `${selectedNumber}`;
    document.getElementById("simbolo2").innerHTML = `${selectedSymbol}`;

    if (selectedSymbol === "♥" || selectedSymbol === "♦") {
      const symbolElements = document.querySelectorAll(".symbol");
      symbolElements.forEach(function(element) {
        element.style.color = "red";
      });
    }
  }

  generateCard();

  //Botón para generar carta

  const createCardButton = document.getElementById("new-card");

  createCardButton.addEventListener("click", function() {
    generateCard();
  });

  //Elegir ancho y alto

  const widthInput = document.getElementById("card-width");
  const heightInput = document.getElementById("card-height");
  const card = document.getElementById("randomCard");

  widthInput.addEventListener("input", e => {
    card.style.width = e.target.value + "px";
  });

  heightInput.addEventListener("input", e => {
    card.style.height = e.target.value + "px";
  });

  //Set Timer

  setInterval(() => {
    console.log("hola");
    generateCard();
  }, 1000);
};

//Definición de funciones

function getRandomCharacter(array) {
  const index = Math.floor(Math.random() * array.length);
  const selectedItem = array[index];
  return selectedItem;
}
