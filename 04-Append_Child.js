const myList = document.getElementById("myList");

// New List Item <li>Banana</li>

let newlistItem = document.createElement('li');
newlistItem.textContent = 'Banana';

myList.appendChild(newlistItem);