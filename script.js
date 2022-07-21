

// Required Code
let myLibrary = [];

function Book(author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary() { 
    let book = new Book();
    book.title = document.getElementById("input-title");
    book.author = document.getElementById("input-author");
    book.pages = document.getElementById("input-pages");
    book.readStatus = document.getElementById("input-status");

    myLibrary.push(book); 

    //testing
    displayBookList();
}


// Testing
// let book1 = new Book("Holly Black", "The Wicked King", 180, false);
// let book2 = new Book("Jandy Nelson", "I'll Give You the Sun", 150, false);
// let book3 = new Book("J.K. Dipshit", "Harry Potter and the Goblet of Fire", 218, true);

// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);



function displayBookList() { 

    myLibrary.forEach((book) => {console.table(book);}) 
}