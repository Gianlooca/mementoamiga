// Variable storing the audio effect
const winSound = new Audio("assets/audio/memento-amiga-win.mp3");

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
  stats: document.querySelector(".stats"),
  how: document.querySelector(".how"),
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
  /**
   * This create a copy of the original array
   * in order to not modify the original one
   */
  var clone = [...array];

  // Array to contain the chosen values
  var randomValue = [];

  // Iterate for the number of the items to chose
  for (let index = 0; index < items; index++) {
      //This checks if the array copy is empty to end the loop
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

  // Gives back the array with the chosen values
  return randomValue;
};

// Shuffle function
const shuffle = (array) => {
  // This clones the original array in order to modify it
  var clonedArray = [...array];

  // Loops "back" on the .lenght property of the array
  for (let i = clonedArray.length - 1; i > 0; i--) {
      // Sceglie un indice casuale tra 0 e i
      const j = Math.floor(Math.random() * (i + 1));

      // Scambia gli elementi in posizione i e j
      [clonedArray[i], clonedArray[j]] = [clonedArray[j], clonedArray[i]];
  }

  // Gives us back the shuffled array
  return clonedArray;
};

const run = () => {
  // This hides the value of wrappedBoard
  if (!selectors.wrapperBoard.classList.contains("hide")) {
      selectors.wrapperBoard.classList.add("hide");
  }

  // with this we get the dimensions of the attributes "data-dimension"
  const dimensions = selectors.board.getAttribute("data-dimension");

  // Array with the default backface Amiga Floppy card
  const cardDefault = [
      {
          name: "amiga",
          img: "assets/images/amiga-floppy.webp",
      },
  ];

  // Array with the frontfaces of the cards
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

  // This const chooses a number of random cards of the same dimensions
  const picks = random(cardArray, dimensions * dimensions);

  // Shuffles the chosen cards
  const items = shuffle([...picks, ...picks]);

  // Generates the markup HTML for the cards
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

  // Converts HTML string to DOM nodes
  var parser = new DOMParser().parseFromString(cards, "text/html");

  // Selects the .board node just created
  const newBoard = parser.querySelector(".board");

  // Completely clear the .board content
  selectors.board.innerHTML = "";

  // Move all the children of newBoard into .board
  while (newBoard.firstChild) {
      selectors.board.appendChild(newBoard.firstChild);
  }

  // Set the grid columns
  selectors.board.style.gridTemplateColumns = `repeat(${dimensions}, auto)`;
};

// Starts the timer
const startGame = () => {
  // Sets the game status as "started" with a boolean value
  state.gameStarted = true;

  // Shows the .stats when the game starts
  selectors.stats.classList.remove("invisible");

  // Fires a loop per second
  state.loop = setInterval(() => {
      state.totalTime++;

      // Updates click counter
      selectors.moves.innerText = `${state.totalFlips} Moves`;

      // Updates timer
      selectors.timer.innerText = `Time: ${state.totalTime} Sec`;
  }, 1000);
};

// This manages the flipping cards logic
const flipCard = (card) => {
  // Increases the flipped card counter
  state.flippedCards++;

  // Increases total clicks in the click counter
  state.totalFlips++;

  // Here we say: if the game hasn't started, then start it
  if (!state.gameStarted) {
      startGame();
  }

  // If a max of 2 cards have been flipped, add "flipped"
  if (state.flippedCards <= 2) {
      card.classList.add("flipped");
  }

  // When 2 cards have been flipped, find them
  if (state.flippedCards === 2) {
      const flippedCards = document.querySelectorAll(
          ".flipped:not(.matched)"
      );

      // If they are the same cards, add .matched
      if (
          flippedCards[0].getAttribute("data-name") ===
          flippedCards[1].getAttribute("data-name")
      ) {
          flippedCards[0].classList.add("matched");
          flippedCards[1].classList.add("matched");
      }

      // After one second, turns back the cards again
      setTimeout(() => {
          flipBackCards();
          stopFlip = true;
      }, 1000);
      stopFlip = false;
  }

  // If there aren't card to flip anymore, you won
  if (!document.querySelectorAll(".card:not(.flipped)").length) {
      setTimeout(() => {
          selectors.controls.classList.add("hide");
          selectors.wrapperBoard.classList.add("hide");
          //selectors.stats.classList.add("hide");
          selectors.stats.classList.add("invisible");
          selectors.win.classList.remove("hide");

          // Show the .win-text with the total moves and time
          selectors.win.innerHTML = `
              <span class="win-text">
                  You won <br />
                  with <span class="highlight">${state.totalFlips}</span> moves<br />
                  under <span class="highlight">${state.totalTime}</span> seconds.
              </span>
              <div>
                  <button id="restart" class="play-again">Play Again</button>
              </div>
          `;

          //Starts the winSound
          winSound.play();

          // Stops the timer
          clearInterval(state.loop);
      }, 1000);
  }
};

// This manages the cards without a match
const flipBackCards = () => {
  // Select all unmatched cards
  document.querySelectorAll(".card:not(.matched)").forEach((card) => {
      // Remove the .flipped class to turn the cards back again
      card.classList.remove("flipped");
  });

  // Resets the flipped card counter to 0
  state.flippedCards = 0;
};

let stopFlip = true;

// Handles the click on cards
const handleCardClick = (event) => {
  // Gets the div.card clicked
  const target = event.target.nextSibling.parentElement;

  // Gets the div.card-container parent
  const parent = target.parentElement;

  // Logic to flip the card
  if (
      // Check that it is a div.card AND AT THE SAME TIME that the container is not already flipped
      target.className.includes("card") &&
      !parent.className.includes("flipped") &&
      stopFlip
  ) {
      // Flip the card
      flipCard(parent);
  }
};

// Handler to restart the click event on cards
const handleRestartClick = (event) => {
  // Gets all child div nodes of wrapperBoard
  const divs = selectors.wrapperBoard.querySelectorAll("div");

  // Removes all nodes except the first one
  divs.forEach((div, index) => {
      if (index !== 0) {
          div.remove();
      }
  });

  // Hides the .controls
  selectors.controls.classList.remove("hide");

  // Shows the .stats
  selectors.stats.classList.remove("hide");

  // Hides the win-text
  selectors.win.classList.add("hide");

  // Resets the counters of flips and the timer
  state.totalFlips = 0;
  state.totalTime = 0;

  // Update the interface
  selectors.moves.innerText = `${state.totalFlips} Moves`;
  selectors.timer.innerText = `Time: ${state.totalTime} Sec`;

  // Call the run function 
  run();
};

// Handles the click on start button
const handleStartClick = (event) => {
  // Gets the event target (that is the clicked item)
  const target = event.target;

  // Gets the parent element of the target
  const parent = target.parentElement;

  // Hide the .controls
  selectors.controls.classList.add("hide");

  // Shows the wrapperBoard
  selectors.wrapperBoard.classList.remove("hide");
};

// Handles the call of the startGame function
const handleStartGameClick = () => {
  startGame();
};

// Handles the instructions 
const handleShowHowClick = () => {
  selectors.controls.classList.add("hide");
  selectors.how.classList.remove("hide");
};

// Handles the "back" button on the instructions page
const handleBackClick = () => {
  selectors.controls.classList.remove("hide");
  selectors.how.classList.add("hide");
};

// Store the event listeners
const eventListener = () => {

   // This says: When clicking on an element,
   // if the target id is "start",
   // handle click start, hence
   // start the game
  document.addEventListener("click", (event) => {
      if (event.target.id === "start") {
          handleStartClick(event);
          handleStartGameClick();
          return;
      }

      // Then, if the id is "restart"
      if (event.target.id === "restart") {
          // restart the game
          handleRestartClick(event);
          return;
      }

      // if the id is "info"
      if (event.target.id === "info") {
        // handle handleShowHowClick, etc.
          handleShowHowClick();
          return;
      }

      if (event.target.id === "back") {
          handleBackClick();
          return;
      }

      handleCardClick(event);
  });
};

/**
 *  This makes sure that the "run" and "eventListener" functions
 *  are called only after the HTML content of our page has been loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
  run();
  eventListener();
});