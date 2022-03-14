console.log("The scripts.js file is loaded.");
/*

    What is the initial goal of this file?
      Create a function that takes a string as input, capitalizes a letter if its ASCII code is even, and returns its lower case version if its ASCII code is odd.

    What is the version of this file?
        1.0

    If the version is > 1 , has the goal changed? Explain. Why are we here again?

*/


//  +++++++++++++++++++ GET DOM, SET VARIABLES   +++++++++++++++++++

//  +++++++++++++++++++ FUNCTIONS +++++++++++++++++++ 
function asciiCapitalize(passedString) {
    // create empty array

    // remember me - creating an array from string
    const characterArray = [];
    const map = Array.prototype.map;
    // loop through passedString

    const newString = map.call(passedString, eachLetter => {

        // if even, return a capital, capitals are 65-90
        // if odd, return a lowercase , lc is 97-122
        // convert back to letter
        // push to array
        characterArray.push(eachLetter);
        return `${eachLetter}`
    })


    console.log('characterArray:', characterArray)



    return characterArray;

}
// //  +++++++++++++++++++ EVENT LISTENERS +++++++++++++++++++

// //  +++++++++++++++++++ FUNCTION CALLS +++++++++++++++++++

asciiCapitalize("ABCTo be or not to be!");
// //   "To Be oR NoT To Be!"

// // asciiCapitalize("THE LITTLE MERMAID");
// // // // "THe LiTTLe meRmaiD"

// // asciiCapitalize("Oh what a beautiful morning.");
// // // //   ➞    "oH wHaT a BeauTiFuL moRNiNg."