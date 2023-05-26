/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let number = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
let symbol = ["♦", "♥", "♠", "♣"];

window.onload = function() {
  const selectedNumber = getRandomCharacter(number);
  const selectedSymbol = getRandomCharacter(symbol);

  function generateCard() {
    document.getElementById("randomCard").innerHTML = `<div class="row">
  
  <div id="simbolo1" class="col-3 symbol align-self-start">
  ${selectedSymbol}
  </div>
  <div class="col-6 number align-self-center">
  ${selectedNumber}
  </div>
  <div id="simbolo2" class="col-3 symbol align-self-end">
  ${selectedSymbol}
  </div>
  
  </div>`;
  }

  generateCard();

  if (selectedSymbol === "♥" || selectedSymbol === "♦") {
    const symbolElements = document.querySelectorAll(".symbol");
    symbolElements.forEach(function(element) {
      element.style.color = "red";
    });
  }
};

function getRandomCharacter(array) {
  const index = Math.floor(Math.random() * array.length);
  const selectedItem = array[index];
  return selectedItem;
}
