const gridContainer = document.querySelector('.grid-container');
gridContainer.addEventListener('mouseover', function(event) {
  const gridItem = event.target;

  if (gridItem.classList.contains('grid-item')) {
    gridItem.style.backgroundColor = 'red';
  }
});

gridContainer.addEventListener('mouseout', function(event) {
  const gridItem = event.target;

  if (gridItem.classList.contains('grid-item')) {
    gridItem.style.backgroundColor = '';
  }
});