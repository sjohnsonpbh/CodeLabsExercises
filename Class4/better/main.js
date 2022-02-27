// grab DOM elements, set values
const body = document.body;
const input = document.querySelector('input[type=text');
const overlay = document.querySelector('.overlay');


// functions
function showFloater() {
    body.classList.add('show-floater');
    console.log('showing floater');
    console.log('input is ' + input);
}

function closeFloater() {
    body.classList.remove('show-floater');
    console.log('closing floater');
    console.log('input is ' + input);
}
// eventListeners

console.log('value is ' + input.value);
input.addEventListener('focus', showFloater);
overlay.addEventListener('click', closeFloater);

