// 1 grab elements from the DOM
// 2 attach event listeners


function goCoocoo() {
    document.body.style.backgroundColor = '#c00c00';
}


// option 2
const coffeeButton = document.querySelectorAll('.coffee-btn');
coffeeButton.onclick = function() {
    document.body.style.backgroundColor = '#C0FFEE';
}
coffeeButton.onmouseenter = goCoocoo;

// option 3
const lalaButton = document.querySelector('lala-btn');

function notListening() {
    document.body.style.backgroundColor = '#1A1A1A';
}


// question for the Code Coach
// this event listener does not find the element
// error: "main.js:27 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" 
// lalaButton.addEventListener('click', notListening);
// lalaButton.addEventListener('mouseenter', goCoocoo);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('mouseleave', notListening));
