// console.log("The scripts.js file is loaded.");
/*

    What is the initial goal of this file?
        to learn more about handling arrays

    What is the version of this file?
        1.0

    If the version is > 1 , has the goal changed? Explain. Why are we here again?

*/


//  +++++++++++++++++++ GET DOM, SET VARIABLES   +++++++++++++++++++
const students = [
    { name: "Medina", grade: 88 },
    { name: "Blake", grade: 72 },
    { name: "Roscoe", grade: 58 },
    { name: "Stephanie", grade: 99 },
    { name: "Edith", grade: 93 },
    { name: "Janey", grade: 34 },
    { name: "Ivan", grade: 89 },
];

//  +++++++++++++++++++ FUNCTIONS +++++++++++++++++++

// sort

console.groupCollapsed("Sorted Students");
const sortedStudents = students.sort((a, b) => (b.name > a.name ? -1 : 1));
console.log('sortedStudents:', sortedStudents);
console.groupEnd();

// filter 

console.groupCollapsed("ClassClown");

const classClown = students.filter((student) => student.grade === 99);
console.log('classClown:', classClown);


console.groupEnd();



//  +++++++++;++++++++++ EVENT LISTENERS +++++++++++++++++++

//  +++++++++++++++++++ FUNCTION CALLS +++++++++++++++++++