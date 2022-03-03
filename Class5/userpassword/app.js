// create an array to store data
// get user and password, 
// add user and password to array
// display the list

// to do list
// reset the form
// validate data



userDataList = [];

// this is called by onClick
function saveLocal() {

    // console.log(e);

    let myUser = document.getElementById('username').value;
    let myPass = document.getElementById('password').value;

    // console.dir(myUser);

    // if (!myUser.value) {
    //     alert('Type a username!');
    //     return
    // }
    // if (!myPass.value) {
    //     alert('Type a password!');
    //     return
    // }


    // console.log(myUser);
    // console.log(myPass);

    // add to array
    userDataList.push(myUser, myPass);

    // show the array
    // console.dir(userDataList);
    // commit to local storage
    localStorage.setItem("userDataList", JSON.stringify(userDataList));

    // get it back from storage
    let myUserList = localStorage.getItem("userDataList");
    let myUserString = JSON.parse(myUserList);

    console.log('myUserString is ' + myUserString);

    // build a display div
    let injectHtml = `
        <div class="my-user">${myUser}</div>
        <div class="my-pass">${myPass}</div>
        `;

    console.log('injectHtml is' + injectHtml);

    // get the class of the div
    classOfTheDiv = document.getElementById('showsub');
    console.log("classOfTheDiv is " + classOfTheDiv);

    // createElement method to pass in 
    classOfTheDiv.innerHTML = injectHtml;
    console.log("bigDiv is " + classOfTheDiv);


}


