

// Required Code
let myLibrary = [];

function Book(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) { myLibrary.push(book); }


// Testing
let book1 = new Book("Holly Black", "The Wicked King", 180, false);
let book2 = new Book("Jandy Nelson", "I'll Give You the Sun", 150, false);
let book3 = new Book("J.K. Dipshit", "Harry Potter and the Goblet of Fire", 218, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

function displayBookList() { 
    myLibrary.forEach((book) => {console.table(book);}) 
}