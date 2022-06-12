const CONTAINER_WIDTH = 960;
const INIT_SQUARE_WIDTH = 40;
const INIT_SQUARE_HEIGHT = 40;
const INIT_GRID_SIZE = 16;
let randomMode = false;

window.onload = init;

function init() {
  const container = document.querySelector(".container");
  container.style.width = `${CONTAINER_WIDTH}px`;
  generateGrid(INIT_GRID_SIZE);
}

function generateGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const square = createSquare();
    setSquareDimensions(square, size);
  }
}

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseenter", onMouseEnterSquare);

  const container = document.querySelector(".container");
  container.appendChild(square);
  return square;
}

function setSquareDimensions(square, size) {
  const squareSize = CONTAINER_WIDTH / size;
  square.style.height = `${squareSize}px`;
  square.style.width = `${squareSize}px`;
}

function onMouseEnterSquare(e) {
  let square = e.target;

  if (!randomMode) {
    // normal mode
    colorSquareNormalMode(square);
  } else if (square.style.backgroundColor == "") {
    // square not colored
    colorSquareRandomMode(square);
  } else {
    // square already has a color
    darkenSquareRandomMode(square);
  }
}

function colorSquareNormalMode(square) {
  square.style.backgroundColor = "red";
  square.style.filter = `brightness(1)`;
}

function colorSquareRandomMode(square) {
  square.style.backgroundColor = `${getRandomRGB()}`;
  square.style.filter = `brightness(1)`;
}

function darkenSquareRandomMode(square) {
  let currentBrightness = +square.style.filter.replace(/[^\d\.]+/g, "");
  square.style.filter = `brightness(${
    currentBrightness == 0 ? "0" : currentBrightness - 0.1
  })`;
}

function getRandomRGB() {
  let getRandomValue = () => Math.floor(Math.random() * 255) + 1;
  return `rgb(${getRandomValue()},${getRandomValue()},${getRandomValue()})`;
}

function changeGridSize() {
  let newGridSize;
  do {
    newGridSize = +prompt("Enter new grid size (max: 100)");
  } while (newGridSize < 1 || newGridSize > 100);
  emptyGrid();
  generateGrid(newGridSize);
}

function emptyGrid() {
  const container = document.querySelector(".container");
  container.textContent = "";
}

function toggleRandomMode() {
  randomMode = !randomMode;
}
