const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");

body.appendChild(container);

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.height = "60px";
  square.style.width = "60px";

  square.addEventListener("mouseenter", onMouseEnter);
  container.appendChild(square);
}

function changeResolution() {
  let newSize = +prompt("Enter new grid size (max: 100)");
  console.log(newSize);
  container.textContent = "";
  for (let i = 0; i < newSize * newSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    const squareSize = 960 / newSize;
    square.style.height = `${squareSize}px`;
    square.style.width = `${squareSize}px`;
    container.appendChild(square);
  }
}

function onMouseEnter(e) {
  e.target.style.backgroundColor = "red";
}
