const items = document.querySelectorAll('.item');
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetButton = document.getElementById('resetButton');
const successMessage = document.getElementById('successMessage');

let draggedItem = null;

// Add event listeners for drag events on items
items.forEach((item) => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

// Add event listeners for drop events on containers
container1.addEventListener('dragover', dragOver);
container1.addEventListener('dragenter', dragEnter);
container1.addEventListener('dragleave', dragLeave);
container1.addEventListener('drop', dragDrop);

container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', dragDrop);

// Drag start event
function dragStart() {
  draggedItem = this;
  setTimeout(() => {
    this.classList.add('dragging');
  }, 0);
}

// Drag end event
function dragEnd() {
  this.classList.remove('dragging');
  draggedItem = null;
}

// Drag over event
function dragOver(e) {
  e.preventDefault();
}

// Drag enter event
function dragEnter(e) {
  e.preventDefault();
  this.classList.add('dragover');
}

// Drag leave event
function dragLeave() {
  this.classList.remove('dragover');
}

// Drag drop event
function dragDrop() {
  this.classList.remove('dragover');
  this.appendChild(draggedItem);

  // Create a new success message
  const message = document.createElement('div');
  message.textContent = 'Item dropped successfully!';
  successMessage.appendChild(message);
}

// Reset button event
resetButton.addEventListener('click', () => {
  container1.innerHTML = '';
  container2.innerHTML = '';
  successMessage.innerHTML = '';

  // Repopulate container1 with items
  items.forEach((item) => {
    container1.appendChild(item);
  });
});