console.log("The scripts.js file is loaded.");
/*

    What is the initial goal of this file?
        to learn more about local storage

    What is the version of this file?
        1.0

    If the version is > 1 , has the goal changed? Explain. Why are we here again?

*/


//  +++++++++++++++++++ GET DOM, SET VARIABLES   +++++++++++++++++++  \\
const body = document.body;
const input = document.querySelector(".link-input");
const overlay = document.querySelector(".overlay");


//  +++++++++++++++++++ FUNCTIONS +++++++++++++++++++  \\



//  +++++++++++++++++++ EVENT LISTENERS +++++++++++++++++++  \\

// EVENT LISTENER: Listens for "focus" event on the "input" and runs the "focusInput" function
input.addEventListener("focus", focusInput);
// EVENT LISTENER: Listens for "click" event on the "overlay" and runs the "endFocus" function
overlay.addEventListener("click", endFocus);


//  +++++++++++++++++++ FUNCTION CALLS +++++++++++++++++++  \\

