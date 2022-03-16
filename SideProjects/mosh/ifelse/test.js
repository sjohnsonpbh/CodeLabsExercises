// ~ KATA 1  ~ \\

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// function simpleMultiplication(n) {
//     return n * (n % 2 ? 9 : 8);
// }

// ~ END KATA 1  ~ \\

// ~ KATA 2  ~ \\

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.


function paperwork(n, m) {
    if ((n < 0) || (m < 0)) {
        return 0;
    }
    return m * n;
}

console.log('paperwork(2, 3);:', paperwork);
