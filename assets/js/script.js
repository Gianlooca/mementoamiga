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

// Funzione per mescolare gli elementi di un array
const shuffle = (array) => {
  // Clona l'array originale per non modificarlo
  var clonedArray = [...array];

  // Cicla all'indietro sulla lunghezza dell'array
  for (let i = clonedArray.length - 1; i > 0; i--) {
      // Sceglie un indice casuale tra 0 e i
      const j = Math.floor(Math.random() * (i + 1));

      // Scambia gli elementi in posizione i e j
      [clonedArray[i], clonedArray[j]] = [clonedArray[j], clonedArray[i]];
  }

  // Restituisce l'array mescolato
  return clonedArray;
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

// Registra gli event listener
const eventListener = () => {
  // Al click su un elemento
  document.addEventListener("click", (event) => {
      // Se l'ID è start
      if (event.target.id === "start") {
          // Gestisci click start
          handleStartClick(event);
          // Inizia gioco
          handleStartGameClick();
          return;
      }

      // Se l'ID è restart
      if (event.target.id === "restart") {
          // Gestisci click restart
          handleRestartClick(event);
          return;
      }

      if (event.target.id === "info") {
          handleShowHowClick();
          return;
      }

      if (event.target.id === "back") {
          handleBackClick();
          return;
      }

      // Altrimenti gestisci click carta
      handleCardClick(event);
  });
};

document.addEventListener("DOMContentLoaded", function () {
  run();
  eventListener();
});