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
input.addEventListener('focusin', showFloater);
// input.addEventListener("focusout", closeFloater);
overlay.addEventListener("click", closeFloater);

/* +++++++++++  Bookmark Stuff  +++++++++++*/

const bookmarksList = document.querySelector(".bookmarks-list");
const bookmarkForm = document.querySelector("bookmark-form");
const bookmarkInput =
    bookmarkForm.querySelector("input[type=text]");
const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
const apiURL = 'https://opengraph.io/api/1.0/site';
const appID = '58858c7bcf07b61e64257391';


// the e stands for event, to stop the default browser behavior of
// refreshing the page on form submit
// remember me
//
// function createBookmark(event) {
//     event.preventDefault();
// }
function createBookmark(e) {
    e.preventDefault();

    if (!bookmarkInput.value) {
        alert('we need info!');
        return;
    }
    const url = encodeURIComponent(bookmarkInput.value);

    // add a new bookmark to the bookmarks

    fetch('${apiUrl}/${url}?app_id=${appId}')

        // fetch(apiUrl + '/' + url + '?app_id=' + appId)
        .then(response => respponse.json())
        .then(data => {
            const bookmark = {
                title: data.hybridGraph.title,
                image: data.hybridGraph.image,
                link: data.hybridGraph.url
            };

            bookmarks.push(bookmark);
            fillBookmarksList(bookmarks);
            storeBookmarks(bookmarks);
            bookmarkForm.reset();
        })
        .catch(error => {
            alert('There was a problem getting info!');
        });


}

function fillBookmarksList(bookmarks = []) {
    bookmarksList.innerHTML = bookmarks.map((bookmark, i) => {
        return `
       <a href="${bookmark.link}" class="bookmark" data-id+"${i}">
       <div class="img" style="background-image:url('${bookmark.image}')"></div>
       <div class="title">${bookmark.title}</div>
       <span class="glyphicon glyphicon-remove"></span>
       </a>
       `;
    }).join('');
    bookmarksList.innerHTML = bookmarksHTML;
}

function removeBookmark(e) {
    if (!e.target.matches('.glyphicon-remove')) return;
    // find the index
    // remove from the bookmarks using splice
    // fill the list
    // store back to local storage

    const index = e.target.parentNode.dataset.id;
    bookmarks.splice(index, 1);
    fillBookmarksList(bookmarks);
    storeBookmarks(bookmarks);
}


// save that list to local storage
function storeBookmarks(bookmarks = []) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

bookmarkForm.addEventListener("submit", createBookmark);
bookmarksList.addEventListener('click', removeBookmark);