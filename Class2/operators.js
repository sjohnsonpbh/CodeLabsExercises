
let a = 10;
b = 3;
c = 15;

let d = '5';
e = 'my name';
f = 'is Scott';

console.groupCollapsed("Addition");
    console.log(a + b);
    console.log(a + c);
    console.log(e + ' ' + f);
    console.log(e + ' is Batman!');
console.groupEnd();

console.groupCollapsed("Multiplication");
    console.log(a * 3);
    console.log(a * b);
    console.log(b * c);
console.groupEnd();

console.groupCollapsed('Incrementing');
    console.log(a + 1); // 11
    console.log(a++); // 11
console.groupEnd();


// see screenshot operators

console.groupCollapsed('Logical Operators');
    // and
    console.log (1 === 1 && 2 === 2) // true

    // or
    console.log (1 === 1 || 2 === 5) // true
console.groupEnd();