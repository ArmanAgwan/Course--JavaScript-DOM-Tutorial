const box = document.querySelector("div.box");
// const rect = box.getBoundingClientRect();

// console.log(rect);


window.addEventListener("scroll", function() {
    // console.log(window.innerHeight);
    // console.log(box.getBoundingClientRect().top);

    if (box.getBoundingClientRect().top < window.innerHeight) {
        box.style.background = 'red';
    }
});