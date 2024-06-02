const pTag = document.querySelector("#example p");

const newInput = document.createElement("input");
newInput.value = "I'm new!";

const newBtn = document.createElement("button");
newBtn.textContent = "Me Too";

// pTag.replaceWith(newInput, newBtn, "And I am some text!");

const newStrong = document.createElement("strong");
newStrong.textContent = "I am new and strong";
pTag.childNode[0].replaceWith(newStrong);