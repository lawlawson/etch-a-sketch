const container = document.querySelector('.container');

function createGrid(numSquares) {
  for (let i = 0; i < numSquares * numSquares; i++) {
    const square = document.createElement('div');
    container.append(square);
    square.classList.add('grid-square');

    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = '#000';
    });
  }
}

function resetGrid() {
  let numSquares = parseInt(
    prompt('Enter the number of squares per side (max 100):', '16'),
  );

  if (isNaN(numSquares) || numSquares < 1 || numSquares > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  } else {
    container.innerHTML = '';
    createGrid(numSquares);
  }
}

createGrid(16);
