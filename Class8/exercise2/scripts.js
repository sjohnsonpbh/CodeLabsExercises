console.log("The scripts.js file is loaded.");
/*

    What is the initial goal of this file?

**Aim**: Create a function that takes a string as input, capitalizes a letter if its ASCII code is even, and returns its lower case version if its ASCII code is odd.

_Examples_

```js
asciiCapitalize("to be or not to be!")    ➞    "To Be oR NoT To Be!"

asciiCapitalize("THE LITTLE MERMAID")    ➞    "THe LiTTLe meRmaiD"

asciiCapitalize("Oh what a beautiful morning.")    ➞    "oH wHaT a BeauTiFuL moRNiNg."
```

---




    What is the version of this file?
        1.0

    If the version is > 1 , has the goal changed? Explain. Why are we here again?

*/

// the below works for 1 character, need to do whold phrase
// let capPhrase = phrase.charCodeAt(phrase);

//  +++++++++++++++++++ GET DOM, SET VARIABLES   +++++++++++++++++++

//  +++++++++++++++++++ FUNCTIONS +++++++++++++++++++ 
// function asciiCapitalize(phrase) {
//     // create empty array
//     let charCodeArr = [];
//     // loop through phrase string
//     for (let asciChar of phrase) {

//         // let capPhrase = phrase.charCodeAt(phrase);
//         // console.log('capPhrase:', capPhrase);
//         let makeCaps = phrase.charCodeAt(asciChar);
//         console.log('makeCaps:', makeCaps)
//         charCodeArr.push(makeCaps);
//         console.log('charCodeArr:', charCodeArr)

//         // return the array charCodeArr
//         return charCodeArr;
//         // check for even/odd

//         // push onto array



//     }
// }

function asciiCapitalize(passedString) {
    // empty array
    let charCodeArr = [];

    for (let i = 0; i < passedString.length; i++) {
        let asciChar = passedString.charCodeAt(i);
        console.log('asciChar:', asciChar);
        charCodeArr.push(asciChar);
    }
    // return the array 
    return charCodeArr;
}

asciiCapitalize("to be or not to be.");


// loop through the string
// compare is even/odd(caps)/(lower)




//  +++++++++++++++++++ EVENT LISTENERS +++++++++++++++++++

//  +++++++++++++++++++ FUNCTION CALLS +++++++++++++++++++