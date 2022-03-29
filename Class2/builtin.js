const first = "this is a string";
const second = String("this is a string");

// Primitives vs Objects
console.groupCollapsed("Primitives vs Objects");
console.log(first === second); // true
console.log(
    typeof first,
    typeof String("this is a string"),
    typeof new String()
);
console.groupEnd();
// END Primitives vs Objects


// strings
const sentence = "this is my sentence";

console.groupCollapsed("String");
console.log(first.toUpperCase()); // THIS IS A STRING
console.log(second.toLowerCase()); // this is a string
console.log(sentence.startsWith("this is")); // true
console.log("scott ".repeat(10));

console.log("look at me go      ".trim());
console.groupEnd();
// END strings


// numbers and math
console.groupCollapsed("Numbers and Math");

console.log((1).toString()); // 1
console.log((1).toString()); // 1
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.432)); // false
console.log((1.5452116).toFixed(2)); // 1.55
console.log(
    Math.random().toFixed(4), // 0.9975
    Math.ceil(1.56), // 2
    Math.floor(6.3), // 6
);
console.groupEnd();

// END numbers and math

// arrays
const myArr = ['chris', 'nick', 'holly'];
console.group('Arrays');
console.log(myArr.length); // 3
console.log(myArr.join('-')); // chris-nick-holly -- pass in something to seperate array elements 
console.log(myArr.push('ado'), myArr)
console.log(myArr.pop(), myArr); // do not have to pass anything in, just removes last array item 

// remember me - arrow function example below

// myArr.forEach(function (user) {
//     console.log(user);
// });

myArr.forEach((user) => console.log(user));
console.groupEnd();

// END arrays