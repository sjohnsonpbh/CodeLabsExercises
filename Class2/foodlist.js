// create a groceryList Array

// 1. Loop over the groceryList
// 2. Create an <li></li> element
// 3. Place the current food inside the <li></li> element
// 4. Append <li></li> to existing <ul></ul>
// 5. Create or Link to a <ul></ul> element 

const groceryList = [
    {
        itemname: "Apples",
        price: .75,
    
    },
    {
        itemname: "Oranges",
        price: .25,
    
    },
    {
        itemname: "Peas",
        price: .50,
    
    },
    {
        itemname: "Milk",
        price: 3.99,
    
    },
]
 
// loop over groceryList array

const foodList = document.querySelector(".food-list");

 for(let food of groceryList) {
   //  create a new list item
    const foodItem = document.createElement("li");
    foodItem.innerText = food.itemname + " -  $" + food.price;
    foodList.appendChild(foodItem);
    console.log(foodItem);
 }



