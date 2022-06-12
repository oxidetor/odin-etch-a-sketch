const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");

body.appendChild(container);

generateGrid(16);

function changeResolution() {
  let newSize = +prompt("Enter new grid size (max: 100)");
  emptyGrid();
  generateGrid(newSize);
}

function emptyGrid() {
  container.textContent = "";
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
  square.addEventListener("mouseenter", onMouseEnter);
  container.appendChild(square);
  return square;
}

function setSquareDimensions(square, size) {
  const squareSize = 960 / size;
  square.style.height = `${squareSize}px`;
  square.style.width = `${squareSize}px`;
}

function onMouseEnter(e) {
  e.target.style.backgroundColor = "red";
}
