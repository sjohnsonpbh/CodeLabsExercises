import {
    createEmitAndSemanticDiagnosticsBuilderProgram,
    isConstructorDeclaration,
} from "typescript";

console.log("The scripts.js file is loaded.");

// remember me - using typescript types
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
// Functions & types
function add(a: number, b: number) {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split('');

// defining a class - by default, all properties are public
// - can be made private i.e. not accessible outside the class
// using dot notation
class Student {
    // firstName: string:
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ) {}
    // function to enroll students
    enrol(courseName: string) {
        this.courses.push(courseName);
    }
    listCourses() {
        return this.courses.slice();
    }
}

// new instance of student
const student = new Student("Max", "Schwarz", 32, ["Angular"]);
student.enrol("React");

// student.listCourses(); => Angular, React
// student.courses => Angular , React

// create a Human object
// you use interfaces to define object types

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

// by using an equals after the type keyword, you can create an Alias,
// which is similar
// type = Human {
//     firstName: string;
//     age: number;

//     greet: () => void;
// }
let max: Human;

max = {
    firstName: "Max",
    age: 32,
    greet() {
        console.log("Hello!");
    },
};
