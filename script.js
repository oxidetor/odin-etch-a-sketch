const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");

body.appendChild(container);

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.innerText = i + 1;
  container.appendChild(square);
}
