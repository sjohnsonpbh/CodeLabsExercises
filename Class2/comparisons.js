
    const original = 'scott';
    const clone = 'SCOTT';

    console.groupCollapsed('String');
        console.log(original == 'scott'); // true
        console.log(original == clone); //false - javascript is case sensitive when doing comparisons
        console.log(original == clone.toLowerCase()); // true 
    console.groupEnd();

    const num1 = 10;
    const num2 = '10';


    console.groupCollapsed('Numbers');
        console.log(num1 == num2); // true - when using double equals, I am asking javascript to use coersion to compare the two diff types
        console.log(num1 === num2); // three equals says to skip coersion      
    console.groupEnd();

    let what; // undefined value
    let thing = null;

    console.groupCollapsed('Booleans');
        console.log(Boolean(what)); // false 
        console.log(Boolean(thing)); // false
        console.log(Boolean(num1)); // true
        console.log(Boolean(num2)); // true
        console.log(Boolean({})); // true
        console.log(Boolean([])); // true         
    console.groupEnd();

    const firstArr = [1, 2, 3];
    const secondArr = [1, 2, 3];
    const firstObj = { color: 'red'};
    const secondObj = { color: 'red'};


    // an object with the same keys and values will not be equal to another object even if all the values are all the same
    console.groupCollapsed('Objects and Arrays');
        console.log(firstArr === secondArr); // false
        console.log(firstObj === secondObj); // false
    console.groupEnd();

    // when evaluating an && stmt, both have to be true, other wise statement is false
    // when evaluating an || stmt, if either is true, shows as true
    console.groupCollapsed('And Or');
        console.log(Boolean('blah') && Boolean('thing')); // true
        console.log(Boolean('blah') && Boolean('')); // false
        console.log(Boolean('blah') || Boolean('')); // true
        console.log(Boolean('') || Boolean('')); // false
    console.groupEnd();


