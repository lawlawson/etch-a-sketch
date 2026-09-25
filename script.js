const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  container.append(square);
  square.classList.add('grid-square');

  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = '#000';
  });
}

prompt('Enter the number of squares per side (max 100):', '16');

if (isNaN(numSquares) || numSquares < 1 || numSquares > 100) {
  alert('Please enter a valid number between 1 and 100.');
  return;
}

container.innerHTML = '';
