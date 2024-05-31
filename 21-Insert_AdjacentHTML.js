/*
beforebegin - before element
afterbegin - first child
beforeend - last child
afterend - after element
*/

const myPara = document.getElementById('myPara');
const em = myPara.querySelector('em');

em.addEventListener('click', console.log)

myPara.innerHTML += '<strong>dcode</strong>'

// myPara.insertAdjacentHTML('afterbegin', '<strong>dcode</strong>')