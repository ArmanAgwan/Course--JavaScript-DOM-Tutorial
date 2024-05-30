const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", function() {
    console.log("I am the PARENT.");
});

child.addEventListener("click", function() {
    console.log("I am the CHILD.");
});