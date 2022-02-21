
function saySomething(message = 'goodbye', whisper = false) {
    
    if (whisper) {
        console.log(`%c${message}`, 'font-size:7px');
    } else {
        console.log(message);
    }
}

saySomething('hello', true);
saySomething();
saySomething();

// function squared(a) {
//     return a * a;
// }

// const newSquared = squared(3);
// console.log(newSquared);

// a function can be stored in a variable (like a string)
    const squared = function (a) {
    return a * a;
}

// es6 arrow function - simpler syntax?
// const squared =  (a) => {
//     return a * a;
// }

// hoisting - javascript will run all FUNCTIONS first, then
// it will run other code. Functions are hoisted to the top of the code
// below, the punch is called before the function is declared

punch();

function punch() {
    console.log("kapow");
}

let name = "Scott";