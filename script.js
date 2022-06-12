const CONTAINER_WIDTH = 960;
const INIT_SQUARE_WIDTH = 40;
const INIT_SQUARE_HEIGHT = 40;
const INIT_GRID_SIZE = 16;

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
  const container = document.querySelector(".container");
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseenter", onMouseEnterSquare);
  container.appendChild(square);
  return square;
}

function onMouseEnterSquare(e) {
  e.target.style.backgroundColor = "red";
}

function setSquareDimensions(square, size) {
  const squareSize = CONTAINER_WIDTH / size;
  square.style.height = `${squareSize}px`;
  square.style.width = `${squareSize}px`;
}

function changeGridSize() {
  let newSize = +prompt("Enter new grid size (max: 100)");
  emptyGrid();
  generateGrid(newSize);
}

function emptyGrid() {
  const container = document.querySelector(".container");
  container.textContent = "";
}
