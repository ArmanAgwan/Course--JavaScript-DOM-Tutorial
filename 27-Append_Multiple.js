const myDiv = document.getElementById('myDiv');

const strong = document.createElement('strong');
const em = document.createElement('em');
const myTextNode = document.createTextNode('simple text');

strong.textContent = 'strong';
em.textContent = 'emphasized';

myDiv.append(strong, em, myTextNode, 'some more text');