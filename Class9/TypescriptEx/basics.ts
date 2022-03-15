// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
    name: string;
    age: number;
};

person = {
    name: "Max",
    age: 32,
};

let people: {
    name: string;
    age: number;
}[]; // Note the last bracket tells typescript we are making an array of people

// Function types, parameters

// Type inference, if you give value when delcaring a variable, it can tell this should be a string.
let course: string | number = "React - The Complete Guide";

course = 12341;
