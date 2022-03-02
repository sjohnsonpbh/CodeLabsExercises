// create an array to store data
// get user and password, 
// add usuer and password to array
// display the list


let userDataList = [];


function saveLocal() {

    // console.log(e);

    let myUser = document.getElementById('username').value;
    let myPass = document.getElementById('password').value;

    console.log(myUser);
    console.log(myPass);

    // add to array
    userDataList.push(myUser, myPass);

    // show the array
    console.dir(userDataList);
    // commit to local storage
    localStorage.setItem('userDataList', JSON.stringify(userDataList));

}


