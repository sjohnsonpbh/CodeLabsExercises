// Write a function that returns an array containing all the numbers inclusive to that range given the start and end values.See examples below.


function reversibleInclusiveList(num1, num2) {

    // loop assumes num1 is smaller
    if (num1 > num2) {
        let num1 = num2;
        let num2 = num1;
    } else return;
}
let numList = [];
for (var i = num1; i <= num2; i++) {
    numList.push(i);
}
return (numList);

}

