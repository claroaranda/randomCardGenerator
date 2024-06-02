import "bootstrap";
import "./style.css";

let topSuit = document.querySelector(".topSuit");
let bottomSuit = document.querySelector(".bottomSuit");
let cardNumber = document.querySelector(".cardNumber");
let gcButton = document.querySelector(".generateCard");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let nIntervId;

function getRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function generateCard() {
  let suit = "";
  let color = "black";
  let number = getRandom(1, 13);
  let letter = number;

  switch (number) {
    case 1:
      letter = "A";
      break;
    case 11:
      letter = "J";
      break;
    case 12:
      letter = "Q";
      break;
    case 13:
      letter = "K";
      break;
    default:
      break;
  }

  switch (getRandom(1, 4)) {
    case 1:
      suit = `♠`; //`<img src="../src/assets/img/spade.png" alt="spade" />`;
      break;
    case 2:
      suit = `♣`; //`<img src="../src/assets/img/club.png" alt="club" />`;
      break;
    case 3:
      suit = `♥`; //`<img src="../src/assets/img/heart.png" alt="heart" />`;
      color = "red";
      break;
    case 4:
      suit = `♦`; //`<img src="../src/assets/img/diamond.png" alt="diamond" />`;
      color = "red";
      break;
    default:
      break;
  }

  topSuit.innerHTML = `<h1 style="color:${color};">${suit}</h1>`;
  bottomSuit.innerHTML = `<h1 style="color:${color};">${suit}</h1>`;
  cardNumber.innerHTML = `<h1 style="color:${color};">${letter}</h1>`;
}

function startGenerator() {
  // comprobar si ya se ha configurado un intervalo
  if (!nIntervId) {
    nIntervId = setInterval(generateCard, 1000);
  }
}

function stopGenerator() {
  clearInterval(nIntervId);
  // liberar nuestro inervalId de la variable
  nIntervId = null;
}

window.addEventListener("load", generateCard);

gcButton.addEventListener("click", generateCard);

startButton.addEventListener("click", startGenerator);
stopButton.addEventListener("click", stopGenerator);
