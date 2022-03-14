console.log("The scripts.js file is loaded.");
/*

    What is the initial goal of this file?

**Aim**: Create a function that takes a string as input, capitalizes a letter if its ASCII code is even, and returns its lower case version if its ASCII code is odd.

    What is the version of this file?
        1.0

    If the version is > 1 , has the goal changed? Explain. Why are we here again?

*/



function asciiCapitalize(passedString) {
    // empty array
    let characterArray = [];
    // loop through passedString
    for (let i = 0; i < passedString.length; i++) {
        let asciiCharacter = passedString.charCodeAt(i);
        if ((asciiCharacter % 2) == 0) {
            // is even - make upper
            console.log(asciiCharacter.toUpperCase);
            characterArray.push(asciiCharacter.toUpperCase);
        }
        else {
            // is odd - make lower
            // push to array
            characterArray.push(asciiCharacter.toLowerCase);
        }
    }
    // console.log(String.fromCharCode.apply(null, characterArray));

    finalArr = characterArray.join("");
    console.log('finalArr:', finalArr)

    // console.log('characterArray:', characterArray)
    // let char = String.fromCharCode(characterArray);


    // return the array 
    return characterArray;
}

//  +++++++++++++++++++ EVENT LISTENERS +++++++++++++++++++

//  +++++++++++++++++++ FUNCTION CALLS +++++++++++++++++++
asciiCapitalize("to be or not to be.");
asciiCapitalize("THE LITTLE MERMAID");
asciiCapitalize("Oh what a beautiful morning.")