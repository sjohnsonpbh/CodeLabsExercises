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

// below is an example of using an Alias (Person)
type Person = {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: "Max",
    age: 32,
};

let people: Person[]; // Note the last bracket tells typescript we are making an array of people

// Function types, parameters

// Type inference, if you give value when delcaring a variable, it can tell this should be a string.

// the below is called a union type, i.e. multiple types
let course: string | number = "React - The Complete Guide";

course = 12341;

// Functions & types

function add(a: number, b: number) {
    return a + b; // typescript infers this to be a number, b/c we passed in numbers
}

// Functions & types

function addNumbers(a: number, b: number) {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split('');

class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ) {}

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student("Max", "Schwarz", 32, ["Angular"]);
student.enrol("React");
// student.listCourses(); => Angular, React

// student.courses => Angular, React

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: "Max",
    age: 32,
    greet() {
        console.log("Hello!");
    },
};

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log("Hello!!!!");
    }
}
