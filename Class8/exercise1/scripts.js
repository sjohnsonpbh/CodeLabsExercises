console.log("The scripts.js file is loaded.");
/*

    What is the initial goal of this file?
       **Aim**: Create a function that takes a "base number" as an argument. This function should return another function that takes a new argument and returns the sum of the "base number" and the new argument.


    What is the version of this file?
        1.0

    If the version is > 1 , has the goal changed? Explain. Why are we here again?

*/


//  +++++++++++++++++++ GET DOM, SET VARIABLES   +++++++++++++++++++

//  +++++++++++++++++++ FUNCTIONS +++++++++++++++++++ 
function plusFive(baseno) {
    let num = 5;

    let sum = (num + baseno)
    console.log('sum:', sum)
}

plusFive(2);
plusFive(-8);


//  +++++++++++++++++++ EVENT LISTENERS +++++++++++++++++++

//  +++++++++++++++++++ FUNCTION CALLS +++++++++++++++++++