

function arrayOfMultiples(num, length){
    // create an empty array
    let newArray = [];
    // create variable to store the # of trips through the array
    let i=1;
    
    // run through the array "length" number of times
    while (i <= length){
        /// create a variable to store num * length
        let total = (num * i);
        
        // add the value of total to the array
       newArray.push(total);
       // increment counter
       i++; 
    }
     // return the array after array length reaches length
    return newArray;
    
     
}
   