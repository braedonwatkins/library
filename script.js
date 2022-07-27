

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

    // //testing
    // console.log( book );

    event.target.reset();

}

let form = document.getElementById("book-form");
form.addEventListener("submit", handleSubmit);


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