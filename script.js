

// Required Code
let myLibrary = [];

function Book(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) { 

    myLibrary.push(book); 

    //testing
    // displayBookList();
}


// Submission Handler

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    let book = new Book(value.author, value.title, value.pages, value.readStatus);

    addBookToLibrary(book);
    templateGen(book);

    // //testing
    // console.log( book );

    event.target.reset();

}
let form = document.getElementById("book-form");
form.addEventListener("submit", handleSubmit);


function templateGen(book) {
    const bookList = document.getElementById("booklist");
    const temp = document.getElementById("template");
    
    // temp (clon) -> book (clone) -> title,author,pages,status
    var clon = temp.content.cloneNode(true);
    const clone = clon.childNodes[1];

    // inner text counts seperately as children therefore odd numbers used for input fields
    clone.childNodes[1].innerText = book.title;
    clone.childNodes[3].innerText = book.author;
    clone.childNodes[5].innerText = book.pages;
    clone.childNodes[7] ? clone.childNodes[3] = "read" : clone.childNodes[3] = "unread";

    // console.log(clone.childNodes);
    bookList.appendChild(clone);
}


// Testing
// let book1 = new Book("Holly Black", "The Wicked King", 180, false);
// let book2 = new Book("Jandy Nelson", "I'll Give You the Sun", 150, false);
// let book3 = new Book("J.K. Dipshit", "Harry Potter and the Goblet of Fire", 218, true);

// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);

function displayBookList() { 
    // myLibrary.forEach((book) => {console.log(book);}) 
    console.table(myLibrary);
}