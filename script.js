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
  gridContainer.style.background = "white";
  gridContainer.style.opacity = 1;
  gridContainer.addEventListener("mouseover", (event)=> {
    event.target.style.background = "white";
    event.target.style.opacity = 1;
  });
};

function gridSize() {
  clearGrid();
  size = parseInt(s.value) || 16; 
  createGrid(size);
  changeColor();
};

gridSize();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  gridContainer.addEventListener("mouseover", (event)=> {
    event.target.style.background = getRandomColor();
    event.target.style.opacity = 
    (Math.floor(Math.random() * 6)+5)/10;
  });
}



