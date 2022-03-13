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
    // remember me - creating an array from
    const characterArray = [];
    const map = Array.prototype.map

    const newString = map.call(passedString, asciiCharacter => {
        return `${asciiCharacter}`
    })

    console.log(newString)

    // return characterArray;

}


// console.log(Boolean('blah') && Boolean('')); // false
//  +++++++++++++++++++ EVENT LISTENERS +++++++++++++++++++

//  +++++++++++++++++++ FUNCTION CALLS +++++++++++++++++++

asciiCapitalize("ABCTo be or not to be!");
//   "To Be oR NoT To Be!"

asciiCapitalize("THE LITTLE MERMAID");
// // "THe LiTTLe meRmaiD"

asciiCapitalize("Oh what a beautiful morning.");
// //   ➞    "oH wHaT a BeauTiFuL moRNiNg."