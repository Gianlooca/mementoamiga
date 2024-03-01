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

const run = () => {
  // Nasconde il contenitore del tabellone
  if (!selectors.wrapperBoard.classList.contains("hide")) {
      selectors.wrapperBoard.classList.add("hide");
  }

  // ottiene la dimensione del'attributo data-dimension
  const dimensions = selectors.board.getAttribute("data-dimension");

  // Array con la carta di default
  const cardDefault = [
      {
          name: "amiga",
          img: "assets/images/amiga-floppy.webp",
      },
  ];

  // Array con le carte dei giochi
  const cardArray = [
      {
          name: "lemmings",
          img: "assets/images/lemmings.webp",
      },
      {
          name: "monkey",
          img: "assets/images/monkey-island.webp",
      },
      {
          name: "pang",
          img: "assets/images/pang.webp",
      },
      {
          name: "prehistorik",
          img: "assets/images/prehistorik.webp",
      },
      {
          name: "rick-dangerous",
          img: "assets/images/rick-dangerous.webp",
      },
      {
          name: "The-great-giana-sisters",
          img: "assets/images/The-great-giana-sisters.webp",
      },
  ];

  // Sceglie un numero di carte casuali pari alle dimensioni
  const picks = random(cardArray, dimensions * dimensions);

  // Mescola le carte scelte
  const items = shuffle([...picks, ...picks]);

  // Genera il markup HTML per le carte
  const cards = `
      <div class="board">
      ${items
          .map(
              (item) => `
                  <div class="card" data-name="${item.name}">
                      <div class="card-front">
                          <img src="${cardDefault[0].img}" alt="${cardDefault[0].name}">
                      </div>
                      <div class="card-back">
                          <img src="${item.img}" alt="${item.name}">
                      </div>
                  </div>
              `
          )
          .join("")}
      </div>
      `;

  // Converte la stringa HTML in nodi DOM
  var parser = new DOMParser().parseFromString(cards, "text/html");

  // Seleziona il nodo .board appena creato
  const newBoard = parser.querySelector(".board");

  // Svuota completamente il contenuto di .board
  selectors.board.innerHTML = "";

  // Sposta tutti i figli di newBoard dentro .board
  while (newBoard.firstChild) {
      selectors.board.appendChild(newBoard.firstChild);
  }

  // Imposta le colonne della griglia
  selectors.board.style.gridTemplateColumns = `repeat(${dimensions}, auto)`;
};

// Gestisce il click sulle carte
const handleCardClick = (event) => {
  // Ottiene il div.card cliccato
  const target = event.target.nextSibling.parentElement;

  // Ottiene il div.card-container padre
  const parent = target.parentElement;

  // Logica per flippare la carta
  if (
      // Controlla che sia un div.card
      target.className.includes("card") &&
      // e che il contenitore non sia già flippato
      !parent.className.includes("flipped")
  ) {
      // Flippa la carta
      flipCard(parent);
  }
};

// Gestisce il click sul pulsante start
const handleStartClick = (event) => {
  // Ottiene il target dell'evento (l'elemento cliccato)
  const target = event.target;

  // Ottiene l'elemento padre del target
  const parent = target.parentElement;

  // Nasconde i controlli
  selectors.controls.classList.add("hide");

  // Mostra il contenitore del tabellone
  selectors.wrapperBoard.classList.remove("hide");
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