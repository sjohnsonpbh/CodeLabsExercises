// grab everything we need
const crazyButtons = document.querySelectorAll(".btn-crazy");

// define our functions
function goCrazy() {
    // get a random number for the left offset
    // get a random number for the top offset
    const offsetLeft =
        Math.random() * (window.innerWidth - this.clientWidth);

    const offsetTop =
        Math.random() * window.innerHeight - this.clientHeight;

    // apply those numbers to the button
    this.style.top = offsetTop + "px";
    this.style.left = offsetLeft + "px";
}

// add event listeners
crazyButtons.forEach((button) =>
    button.addEventListener("mouseenter", goCrazy)
);
