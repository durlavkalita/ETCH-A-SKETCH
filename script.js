const gridContainer = document.querySelector(".grid-container");

const s = document.querySelector('.input');


function createGrid(size) {
  let total = size*size;
  for (let i=0; i<total; i++) {
    let gridItem = document.createElement("div");
    gridContainer.style.gridTemplateColumns = `repeat(${size} ,1fr)`;
    gridItem.className = 'grid-item';
    gridContainer.appendChild(gridItem);
  }
};

gridItem = document.querySelectorAll('.grid-item');

function clearGrid() {
  while (gridContainer.firstElementChild) {
    gridContainer.removeChild(gridContainer.lastElementChild);
  }
};

function gridSize() {
  clearGrid();
  size = parseInt(s.value); 
  createGrid(size);
};


