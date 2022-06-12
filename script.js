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

function onMouseEnterSquare(e) {
  let currentBackgroundColor = e.target.style.backgroundColor;

  if (!randomMode) {
    e.target.style.backgroundColor = "red";
  } else if (currentBackgroundColor == "") {
    e.target.style.backgroundColor = `${getRandomRGB()}`;
    e.target.style.filter = `brightness(1)`;
  } else {
    let currentBrightness = +e.target.style.filter.replace(/[^\d\.]+/g, "");
    e.target.style.filter = `brightness(${
      currentBrightness == 0 ? "0" : currentBrightness - 0.1
    })`;
  }
}

function getRandomRGB() {
  let getRandomValue = () => Math.floor(Math.random() * 255) + 1;
  return `rgb(${getRandomValue()},${getRandomValue()},${getRandomValue()})`;
}

function setSquareDimensions(square, size) {
  const squareSize = CONTAINER_WIDTH / size;
  square.style.height = `${squareSize}px`;
  square.style.width = `${squareSize}px`;
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

function activateRandomMode() {
  randomMode = true;
}
