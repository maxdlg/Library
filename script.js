let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function () {
    return (
        this.title +
        " by " +
        this.author +
        ", " +
        this.pages +
        " pages, read: " +
        this.read
    );
};

function addBookToLibrary(title, author, pages, read) {
    book = Object.create(Book.prototype);
    book.title = title;
    book.author = author;
    book.pages = pages;
    book.read = read;
    myLibrary.push(book);
}

addBookToLibrary("bruh", "nug", 420, false);
addBookToLibrary("frick", "nig", 69, true);
console.log(book.info);

const main = document.querySelector("main");
function render() {
    myLibrary.forEach((shit) => {
        let card = document.createElement("div");
        card.classList.add("card");
        main.appendChild(card);
        card.textContent = shit.info();
        console.log(shit);
    });
}

render();

console.log(myLibrary);
