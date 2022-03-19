console.log("The scripts.js file is loaded.");
let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

// type alias
type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: "Max",
    age: 32,
};

// this is not allowed, because it violates the person definition
// person = {
//     isEmployee: true
// }

let people: Person[];

// Type inference - embrace inference, use it when possible

let course: string | number = "React - The complete guide";

course = 12341;
