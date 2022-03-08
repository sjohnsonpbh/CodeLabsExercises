
//  +++++++++++++++++++ SET DOM VARIABLES   +++++++++++++++++++

//  +++++++++++++++++++ FUNCTIONS +++++++++++++++++++ 
function getBudgets(arr) {
    let totalBudget = 0;
    arr.forEach(Individual => { totalBudget = totalBudget + Individual.budget });
    console.log('totalBudget:', totalBudget)
}


//  +++++++++++++++++++ EVENT LISTENERS +++++++++++++++++++

//  +++++++++++++++++++ FUNCTION CALLS +++++++++++++++++++
getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]);

getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]);