var myLibrary = [];

// SELF DESTRUCT
// localStorage.setItem("myLibrary", []);

// Required Code
window.onload = () => {
    let form = document.getElementById("book-form");
    form.addEventListener("submit", handleSubmit);

    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    
    if(myLibrary) 
    {
        myLibrary.forEach(book => {
            templateGen(book);
        });
    }
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

    if(myLibrary)
    {
        let book = new Book(myLibrary.length, value.author, value.title, value.pages, checkValue);
    }

    addBookToLibrary(book);
    templateGen(book);

    event.target.reset();

}


//take it out of memory, take it off of the DOM, re-render
function handleDelete(event) {
    const bookList = document.getElementById("booklist");
    const bookListChildren = bookList.children;

    for(let i = 1; i < bookListChildren.length; i++) 
    {
        if(event.target.parentNode === bookListChildren[i])
        {
            bookList.removeChild(event.target.parentNode);

            const library = returnBooks();
            library.splice(i-1, 1);
            localStorage.setItem("myLibrary", JSON.stringify(library));
        } 
    } 
}

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