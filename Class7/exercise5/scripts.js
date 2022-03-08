//  +++++++++++++++++++ AIM FOR THIS CODE   +++++++++++++++++++

// Write a function that converts an object into an array, where each element represents a key - value pair in the form of an array.

//  +++++++++++++++++++ SET DOM VARIABLES   +++++++++++++++++++

//  +++++++++++++++++++ FUNCTIONS +++++++++++++++++++ 

// below not working, trying different loop
// function toArray(obj) {
//     element = Object.keys(obj).map((key) => [Number(key), obj[key]]);
//     console.log('element:', element)

// }

function toArray(obj) {
    element = Object.keys(obj);
    console.log('element:', element)

}


//  +++++++++++++++++++ EVENT LISTENERS +++++++++++++++++++

//  +++++++++++++++++++ FUNCTION CALLS +++++++++++++++++++

toArray({ a: 1, b: 2 })
//  ➞[["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 })
//   ➞[["shrimp", 15], ["tots", 12]]

toArray({})
//    ➞[]
