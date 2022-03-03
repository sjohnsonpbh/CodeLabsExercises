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
    let displayHtml = `
        <div class="my-user">${myUser}</div>
        <div class="my-pass">${myPass}</div>
        `;

    console.log('displayHtml is' + displayHtml);

    // get the class of the div
    myClass = document.getElementById('showsub');
    console.log(myClass);

    // createElement method to pass in 
    myClass.innerHTML.displayHtml;

    // this helps. I think I can get it in the am with some coffee.
    // Thanks a lot! Yeah, not sure about my sound issue. I have a new PC and new headphones... so that. Gonna call it a night! You rock!

    // let div = document.querySelector(".some-class")
    // div.innerHTML += `
    // <div id="some-id">Some content</div>
    // `

    // showSubmission.innerHTML = displayHtml
    // i tried both several ways, getting closer!
}


