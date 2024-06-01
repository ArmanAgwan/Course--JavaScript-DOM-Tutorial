const myList = document.getElementById("myList");
const cssListItem = myList.children[1];

// create a new Element/Node
const newListItem = document.createElement("li");
newListItem.textContent = "jQuery";

myList.replaceChild(newListItem, cssListItem);