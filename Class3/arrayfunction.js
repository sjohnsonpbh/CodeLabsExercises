// this should be all the steps
    // run through the array "length" number of times
    // create a variable to store num * length  
    // add the value of total to the array 
    // increment counter
    // return the array after array length reaches length
// end steps

function arrayOfMultiples(num, length){
    // create an empty array
    let newArray = [];
    let total =0;
    // create variable to store the # of trips through the array
    // let i=1;
    
    //  WHILE LOOP - works!
    // // run through the array "length" number of times
    // while (i <= length){
    //     /// create a variable to store num * length
    //     let total = (num * i);
        
    //     // add the value of total to the array
    //    newArray.push(total);
    //    // increment counter
    //    i++; 
    // }
    //  // return the array after array length reaches length
    // return newArray;
    
    //  // end WHILE LOOP


     console.groupCollapsed("For Loop");
    
    // run through the array "length" number of times 
        // increment counter 
        for (let i = 1; i <= length; i++) {
            // create a variable to store num * length  
            let total = num * i;
             // add the total to the array 
            newArray.push(total);
            // console.log(num);
            // console.log(length);
            console.log(total);
        }
         // return the array after array length reaches length
        return newArray;
        
     console.groupEnd();


}
   