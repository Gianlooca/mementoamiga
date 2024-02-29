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

/**
 * 
 * @param {*} array 
 * @param {*} items 
 * @returns 
 */
const random = function (array, items) {
  // Crea una copia dell'array originale
  var clone = [...array];

  // Array per contenere gli elementi scelti
  var randomValue = [];

  // Itera per il numero di elementi da scegliere
  for (let index = 0; index < items; index++) {
      var randomIndex = Math.floor(Math.random() * clone.length);

      randomValue.push(clone[randomIndex]);

      clone.splice(randomIndex, 1);
  }

  const filteredArray = randomValue.filter((value) => value !== undefined);

  return filteredArray;
};