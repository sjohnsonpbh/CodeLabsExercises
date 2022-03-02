// create an array to store data
// get user and password, 
// add user and password to array
// display the list


// let userDataList = [];

// this is called at end of saveLocal
function showLocalStorage() {

    // get showSubmission
    getdivclass = document.getElementById('show-sub');

    console.log(getdivclass);

    showSubmission.innerHTML = displayHtml


}

// this is called by onClick
function saveLocal(userDataList = []) {

    // console.log(e);

    let myUser = document.getElementById('username').value;
    let myPass = document.getElementById('password').value;

    // console.log(myUser);
    // console.log(myPass);

    // add to array
    userDataList.push(myUser, myPass);

    // show the array
    // console.dir(userDataList);
    // commit to local storage
    localStorage.setItem('userDataList', JSON.stringify(userDataList));

    // build a display div

    let displayHtml = `
        <div class="my-user">${myUser}</div>
        <div class="my-pass">${myPass}</div>
        `;

    // console.log(displayHtml);

    // showLocalStorage.innerHTML = displayHtml;
    getdivclass = document.querySelector('show-sub');

    console.log(getdivclass);


}


