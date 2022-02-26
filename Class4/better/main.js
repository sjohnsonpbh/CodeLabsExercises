// get and set
const body = document.body;
const input = document.querySelector("input[type=text]");
const overlay = document.querySelector(".overlay");

// functions
function showFloater() {
    body.classList.add("show-floater");
}

function closeFloater() {
    if (body.classList.contains("show-floater")) {
        body.classList.remove("show-floater");
    }
}

// eventListeners
input.addEventListener("focusin", showFloater);
input.addEventListener("focusout", closeFloater);
overlay.addEventListener("click", closeFloater);

/* +++++++++++  Bookmark Stuff  +++++++++++*/

const bookmarksList = document.querySelector(".bookmarks-list");
const bookmarkForm = document.querySelector("bookmark-form");
const bookmarkInput =
    bookmarkForm.querySelector("input[type=text]");

// the e stands for event, to stop the default browser behavior of
// refreshing the page on form submit
// remember me
//
// function createBookmark(event) {
//     event.preventDefault();
// }
function createBookmark(e) {
    e.preventDefault();

    const title = bookmarkInput.value;
    const bookmark = document.createElement("a");
    bookmark.className = "bookmark";
    bookmark.innerText = title;
    bookmark.href = "#";
    bookmark.target = "_blank";
    bookmarksList.appendChild(bookmark);
    console.log("bookmark");
}

bookmarkForm.addEventListener("submit", createBookmark);
