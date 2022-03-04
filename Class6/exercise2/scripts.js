// Write a function that returns an array containing all the numbers inclusive to that range given the start and end values.See examples below.



function reversibleInclusiveList(num1, num2) {


    let numList = [];
    if (num2 > num1) {
        for (let i = num1; i <= num2; i++) {
            numList.push(i);
        }
    }
    else if (num1 > num2) {
        for (let i = num1; i >= num2; i--) {
            numList.push(i);
        }

    }
    return numList;
}

// FUNCTION CALLS
const listOne = reversibleInclusiveList(1, 5);
console.log("listOne: ", listOne);

const listTwo = reversibleInclusiveList(2, 8);
console.log("listTwo: ", listTwo);

const listThree = reversibleInclusiveList(10, 20);
console.log("listThree: ", listThree);

const listFour = reversibleInclusiveList(24, 17);
console.log("listFour: ", listFour);

