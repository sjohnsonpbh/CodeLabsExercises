
const name = 'scott';
const username = 'scottoncode';

// if
// these statements pass in the condition where the if works (what is inside the parentheses)
// then it executes the block of code between the brackets.

//     if (name == 'scott' || name == 'chris') {
//        alert('Hello!');
//    } else if (name == 'holly') {
//       console.log('this is holly');
//     } 
//     else {
//        console.log('not scott')
//     }


// for loop
// NOTE: these conditionals do not have semi-colons at the end
console.groupCollapsed("For Loop");
// const dogsList = document.querySelector('.dogs-list');
// const dogs = [
//     { name: 'bruce', type: 'chihuahua' },
//     { name: 'chance', type: 'bernese' }
// ];

//     for (let i = 0; i < dogs.length; i++) {
//         // grab the dog array and loop through
//         const dog            = dogs[i];
//         const dogData        = document.createElement('div');
//         dogData.innerText    = `${dog.name} is a ${dog.type}`;
//         dogsList.appendChild(dogData);
// }
console.groupEnd();
// while loop
//   const dogsList = document.querySelector('.dogs-list');
//     const dogs = [
//         { name: 'bruce', type: 'chihuahua' },
//         { name: 'chance', type: 'bernese' }
//     ];
console.groupCollapsed("While Loop");
//     let i = 0;
//     while (i < dogs.length) {

//     const dog            = dogs[i];
//     const dogData        = document.createElement('div');
//     dogData.classList.add('jumbotron', 'text-center');
//     dogData.innerText    = `${dog.name} is a ${dog.type}`;
//     dogsList.appendChild(dogData);

//         i++;
//     }
console.groupEnd();


//  do while loop
console.groupCollapsed("Do While Loop");
//      let i=0;
//     do {
//         // grab the dog
//         const dog            = dogs[i];
//         const dogData        = document.createElement('div');
//         dogData.classList.add('jumbotron', 'text-center');
//         dogData.innerText    = `${dog.name} is a ${dog.type}`;
//         dogsList.appendChild(dogData);
//     }
console.groupEnd();

//        i++;
//    }
//    while (i < dogs.length);


// for ...of iterator

//     const dogsList = document.querySelector('.dogs-list');
//         const dogs = [
//             { name: 'bruce', type: 'chihuahua' },
//             { name: 'chance', type: 'bernese' }
//         ];

console.groupCollapsed("For Of Inerator")
for (let dog of dogs) {
    // grab the dog
    const dogData = document.createElement('div');
    dogData.classList.add('jumbotron', 'text-center');
    dogData.innerText = `${dog.name} is a ${dog.type}`;
    dogsList.appendChild(dogData);


    //     }
    console.groupEnd();