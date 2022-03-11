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
function makePlusFunction(baseNum) {
    let num = 5;
    let sum = (num + baseNum)
    console.log('sum:', sum);
    return function plusFive(sum) {

        let plusSum = sum + 5
        console.log('sum:', sum);
        console.log('plusSum:', plusSum)
        return plusSum;
    }
}

makePlusFunction(10);
makePlusFunction(5);

// const plusFive = makePlusFunction(5)

// plusFive(2) 


// function outter(num) {
//     return function (numTwo) {
//         console.log(num, numTwo)
//     }
// }

// let inner = outter(5);  // returns a function

// inner(10); // print 5, 10


// function counter() {
//     let count = 0;

//     return {
//         print: function () {
//             console.log(count)
//         }
//     }
// }

// let counterOne = counter();
// counterOne.print() // 0

// let funct = function(){
//     console.log("test")
// }

// funct(); 

// plusFive(2);
// plusFive(-8);


// makePlusFunction(10);
// makePlusFunction(5)
//  +++++++++++++++++++ EVENT LISTENERS +++++++++++++++++++

//  +++++++++++++++++++ FUNCTION CALLS +++++++++++++++++++