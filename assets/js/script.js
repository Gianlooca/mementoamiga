/**
 * We created this object in order to access several DOM elements through JS
 * (with the querySelector() method in an quicker way
 */
const selectors = {
  mainCointaner: document.querySelector(".main-div"),
  boardContainer: document.querySelector(".main"),
  wrapperBoard: document.querySelector(".wrapper-board"),
  board: document.querySelector(".board"),
  moves: document.querySelector(".moves"),
  timer: document.querySelector(".timer"),
  start: document.querySelector("#start"),
  win: document.querySelector(".win"),
  controls: document.querySelector(".controls"),
};

/**
 * This other object has been created in order to store
 * (and change by updating the values of the properties)
 * the "state" of fundamental snippets of our game
 */
const state = {
  gameStarted: false,
  flippedCards: 0,
  totalFlips: 0,
  totalTime: 0,
  loop: null,
};

const random = (array, items) => {
  // Crea una copia dell'array originale
  // in modo da non modificarlo
  var clone = [...array];

  // Array per contenere gli elementi scelti
  var randomValue = [];

  // Itera per il numero di elementi da scegliere
  for (let index = 0; index < items; index++) {
      // Controlla se la copia dell'array è vuota
      // per terminare il ciclo
      if (clone.length === 0) {
          break;
      }

      // Sceglie un indice casuale
      // tra 0 e la lunghezza dell'array copia
      var randomIndex = Math.floor(Math.random() * clone.length);

      // Inserisce l'elemento scelto nell'array risultato
      randomValue.push(clone[randomIndex]);

      // Rimuove l'elemento selezionato
      // dalla copia dell'array
      clone.splice(randomIndex, 1);
  }

  // Restituisce l'array con gli elementi scelti
  return randomValue;
};

// gestisce game click
const handleStartGameClick = () => {
  startGame();
};

// gestisce come funziona il gioco
const handleShowHowClick = () => {
  selectors.controls.classList.add("hide");
  selectors.how.classList.remove("hide");
};

// gestione back click
const handleBackClick = () => {
  selectors.controls.classList.remove("hide");
  selectors.how.classList.add("hide");
};