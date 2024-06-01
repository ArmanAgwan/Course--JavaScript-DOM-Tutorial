/*
beforebegin - before element
afterbegin - first child
beforeend - last child
afterend - after element
*/

const area = document.getElementById("area");
const box = document.createElement("div");
box.id = "box";

area.insertAdjacentElement("beforebegin", box)