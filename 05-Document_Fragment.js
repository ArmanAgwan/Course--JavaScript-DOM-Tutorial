const myList = document.getElementById('myList');
const docFrag = document.createDocumentFragment();

let item1 = document.createElement('li');
let item2 = document.createElement('li');

item1.textContent = 'Apples';
item2.textContent = 'Bananans';

docFrag.appendChild(item1);
docFrag.appendChild(item2);

myList.appendChild(docFrag);

console.log(docFrag);