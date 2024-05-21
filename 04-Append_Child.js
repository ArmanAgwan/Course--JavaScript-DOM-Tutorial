const myList = document.getElementById('myList');

// New List Item <li>Banana</li>

let newListItem = document.createElement('li');
newListItem.textContent = 'Banana';

myList.appendChild(newListItem);



const fruitList = ['banana', 'Orange', 'Mango', 'Lemon'];

for (let fruit of fruitList) {
    let newListItem = document.createElement('li'); 
    newListItem.textContent = fruit;

    myList.appendChild(newListItem);
}