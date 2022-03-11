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



function asciiCapitalize(passedString) {
    // empty array
    let characterArray = [];
    // loop through passedString
    for (let i = 0; i < passedString.length; i++) {
        let asciiCharacter = passedString.charCodeAt(i);
        if ((asciiCharacter % 2) == 0) {
            // console.log(`asciiCharacter ${asciiCharacter} is even`)
            // even caps ASCII is + 32 more than
            asciiCharacter = (asciiCharacter + 32);
            // push to array
            characterArray.push(asciiCharacter);
        }
        else {
            // console.log("The number " + asciiCharacter + " is odd")
            // do not change value
            // push to array
            characterArray.push(asciiCharacter);
        }
    }

    console.log(characterArray);
    // console.log('characterArray:', characterArray)
    // let char = String.fromCharCode(characterArray);
    // let char = JSON.stringify(characterArray);
    // let stringify = String.fromCharCode(char);
    // console.log('stringify:', stringify)
    // return the array 
    return String.fromCharCode(characterArray);
}









//  +++++++++++++++++++ EVENT LISTENERS +++++++++++++++++++

//  +++++++++++++++++++ FUNCTION CALLS +++++++++++++++++++
asciiCapitalize("to be or not to be.");