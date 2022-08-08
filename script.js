var myLibrary = [];

// SELF DESTRUCT
// localStorage.setItem("myLibrary", []);

// Required Code
window.onload = () => {
    let form = document.getElementById("book-form");
    form.addEventListener("submit", handleSubmit);

    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    
    myLibrary.forEach(book => {
        templateGen(book);
    });
};

function Book(idNum, author, title, pages, readStatus) {
    this.idNum = idNum;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) { 
    myLibrary.push(book); 
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}


function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    let checkValue = document.getElementById("input-status");
    
    checkValue.checked ? checkValue = "read" : checkValue = "unread";

    let book = new Book(myLibrary.length, value.author, value.title, value.pages, checkValue);

    addBookToLibrary(book);
    templateGen(book);

    event.target.reset();

}
let form = document.getElementById("book-form");
form.addEventListener("submit", handleSubmit);

function returnBooks() { return (JSON.parse(localStorage.getItem("myLibrary"))); }

function templateGen(book) {
    const bookList = document.getElementById("booklist");
    const template = document.getElementById("template");
    
    // temp (clon) -> book (clone) -> title,author,pages,status
    var clon = template.content.cloneNode(true);
    const clone = clon.childNodes[1];

    // inner text counts seperately as children therefore odd numbers used for input fields
    clone.childNodes[1].innerText = book.title;
    clone.childNodes[3].innerText = book.author;
    clone.childNodes[5].innerText = book.pages;
    clone.childNodes[7].innerText = book.readStatus;
    clone.childNodes[9].addEventListener("click", handleDelete);
    clone.childNodes[11].value = book.idNum;

    bookList.appendChild(clone);
}