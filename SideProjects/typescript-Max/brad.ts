// // Tuple
// // let person: [number, string, boolean] = [1, "Brad", true];
// // Tuple Array
// let employee: [number, string][];

// employee = [
//     [1, "Brad"],
//     [2, "John"],
//     [3, "Jill"],
// ];

// // Union
// let pid: string | number;
// pid = "22";

// // Enum
// enum Direction1 {
//     Up = 1,
//     Down,
//     Left,
//     Right,
// }

// //  console.log(Direction1.Up);

// // Objects
// type User = {
//     id: 1;
//     name: string;
// };

// const user: User = {
//     id: 1,
//     name: "John",
// };
// // Type Assertion
// let cid: any = 1;
// // let customerID = <number>cid
// let customerID = cid as number;

// // Functions
// function addNum(x: number, y: number): number {
//     return x + y;
// }

// // Void
// function log(message: string | number): void {
//     console.log(message);
// }

// // Interfaces
// // question mark indicated optional parameter
// interface UserInterface {
//     id: number;
//     name: String;
//     age?: number;
// }

// const user1: UserInterface = {
//     id: 1,
//     name: "John",
// };

// interface MathFunc {
//     (x: number, y: number): number;
// }

// const add: MathFunc = (x: number, y: number): number => x + y;
// const sub: MathFunc = (x: number, y: number): number => x - y;

// // Classes
// class Person {
//     id: number;
//     name: string;
//     constructor() {}
// }

// // Classes
// class Person {
//     id: number;
//     name: string;

//     constructor() {
//         console.log(123);
//     }
// }

// const brad = new person();

class Person {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");

class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}
