// get DOM elements, set variables
const body = document.body;
const input = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');


// functions
function showFloater() {
    body.classList.add('show-floater');

}

function closeFloater() {
    if (body.classList.contains('show-floater')) {
        body.classList.remove('show-floater');
    }
}

// eventListeners
input.addEventListener('focusin', showFloater);
input.addEventListener('focusout', closeFloater);
overlay.addEventListener('click', closeFloater);

/* ++++++++++++  Bookmarks script ++++++++++++ */
// get DOM elements, set variables
const bookmarksList = document.querySelector('.bookmarks-list');
const bookmarkForm = document.querySelector('.bookmark-form');
const bookmarkInput = bookmarkForm.querySelector('input[type=text]');
// remember me - setting the array to either a. get the data from local storage,
// or b. set it to an empty array
const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

fillBookmarksList(bookmarks);

// functions
// remember me 
// this function prevents the default behavior of HTML pages, which is to 
// refresh the page upon form.submit (e stands for event)
function createBookmark(e) {
    e.preventDefault();

    // add a new bookmark to the bookmarks
    const title = bookmarkInput.value;
    const bookmark = {
        title: title
    };
    bookmarks.push(bookmark);
    fillBookmarksList(bookmarks);
    storeBookmarks(bookmarks);
    bookmarkForm.reset();


    // const title = bookmarkInput.value;
    // const bookmark = document.createElement('a');
    // bookmark.className = 'bookmark';
    // bookmark.innerText = title;
    // bookmark.href = '#';
    // bookmark.target = '_blank';
    // bookmarksList.appendChild(bookmark);
    // console.log(bookmark);


}

function fillBookmarksList(bookmarks = []) {
    const bookmarksHtml = bookmarks.map((bookmark) => {
        return `
        <a href="#" class="bookmark">
        ${bookmark.title}
        </a>
        `;
    }).join('');
    console.log(bookmarksHtml);
    bookmarksList.innerHTML = bookmarksHtml;
}


function storeBookmarks(bookmarks = []) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

// eventListeners
bookmarkForm.addEventListener('submit', createBookmark);