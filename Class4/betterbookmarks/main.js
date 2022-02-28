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
// input.addEventListener('focusout', closeFloater);
overlay.addEventListener('click', closeFloater);

/* ++++++++++++  Bookmarks script ++++++++++++ */
// get DOM elements, set variables
const bookmarksList = document.querySelector('.bookmarks-list');
const bookmarkForm = document.querySelector('.bookmark-form');
const bookmarkInput = bookmarkForm.querySelector('input[type=text]');
// remember me - setting the array to either a. get the data from local storage,
// or b. set it to an empty array
const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
const apiUrl = 'https://opengraph.io/api/1.0/site';
const appId = '58858c7bcf07b61e64257391';

// functions




fillBookmarksList(bookmarks);

// remember me 
// this function prevents the default behavior of HTML pages, which is to 
// refresh the page upon form.submit (e stands for event)
function createBookmark(e) {
    e.preventDefault();

    if (!bookmarkInput.value) {
        alert('Paste an HTML link first!');
        return
    }

    // Using an asyncronous API request to get the image and title from external source
    const url = encodeURIComponent(bookmarkInput.value);

    fetch(apiUrl + '/' + url + `?app_id=` + appId)
        .then(response => response.json())
        .then(data => {
            // add a new bookmark to the bookmarks
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
    const bookmarksHtml = bookmarks.map((bookmark, i) => {
        return `
        <a href="${bookmark.link}" target="_new" class="bookmark" data-id="${i}">
        <div class="img" style="background-image:url('${bookmark.image}')"></div>
        <div class="title">${bookmark.title}</div>
        <span class="glyphicon glyphicon-remove"></span>
        </a>
        `;
    }).join('');
    // console.log(bookmarksHtml);
    bookmarksList.innerHTML = bookmarksHtml;
}


function removeBookmark(e) {

    // console.log(e);

    if (!e.target.matches('.glyphicon-remove')) return;

    const index = e.target.parentNode.dataset.id;
    bookmarks.splice(index, 1);
    fillBookmarksList(bookmarks);
    storeBookmarks(bookmarks);

    // remember me 
    // console.dir(index);
    // this shows all the attributes for the object
    // console.dir(index);


    // find the index
    // remove from the bookmarks using splice
    // fill the list
    // store back to localStorage

}

function storeBookmarks(bookmarks = []) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

// eventListeners
bookmarkForm.addEventListener('submit', createBookmark);
bookmarksList.addEventListener('click', removeBookmark);
