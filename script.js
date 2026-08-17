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
