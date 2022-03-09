/*

    What is the initial goal of this file?
       to learn about the 'this' keyword.

    What is the version of this file?
        1.0

    If the version is > 1 , has the goal changed? Explain. Why are we here again?

*/
console.log("'this' is Global Scope:", this); // Window 

// ~ Implicit Binding ~ //

const classroom = {
    name: "High Five",
    students: ["Valory", "Zane", "Ipsum"],
    printStudents: function () {
        console.log("'this' in Implicit Scope (Function Dec):", this.students); this
    },
    printStudentsES6: () =>
        console.log("'this' in Implicit Scope (ES6):", this.students), // 'this' refers to the global window
};
classroom.printStudents(); //(3) ['Valory', 'Zane', 'Ipsum']
classroom.printStudentsES6(); //

// ~ Explicit Binding ~ //
const getName = function () {
    console.log("'this' in Explicit Scope", this.name);
}
const getisHappy = function () {
    console.log("'this' in Explicit Scope:", this.isHappy);
};

const player = {
    name: "Borgov",
    isHappy: false,
};

getName.call(player);
getisHappy.call(player);

// ~ Constructor Binding ~ //
function Company(name) {
    this.name = name;
}

const codefi = new Company("Codefi");
console.log("'this' in Constructor Scope:", codefi.name);

// getisHappy.call(player);  

//  +++++++++++++++++++ GET DOM, SET VARIABLES   +++++++++++++++++++

//  +++++++++++++++++++ FUNCTIONS +++++++++++++++++++ 

//  +++++++++++++++++++ EVENT LISTENERS +++++++++++++++++++

//  +++++++++++++++++++ FUNCTION CALLS +++++++++++++++++++