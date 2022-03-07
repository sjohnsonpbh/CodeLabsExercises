// AIM: ## Exercise #1: Basic

// ** Aim **: Write a function `redundantReturn` that takes in a string `str` and returns a function that returns str.

function parent(x) {
    return function closure() {
        // Closure is declared here.
        return x;
    };
}

const remember = parent("remembers me");


// Seems like the variable x would be gone after
// parent is executed, but it's not.


console.log(remember());
// Returns "remembers me" because the inner
// function remembers x.





//  +++++++++++++++++++ SET DOM VARIABLES   +++++++++++++++++++

//  +++++++++++++++++++ FUNCTIONS +++++++++++++++++++ 

//  +++++++++++++++++++ EVENT LISTENERS +++++++++++++++++++

//  +++++++++++++++++++ FUNCTION CALLS +++++++++++++++++++

