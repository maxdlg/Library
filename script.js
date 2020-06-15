let myLibrary = [];
const cardHolder = document.querySelector(".cardHolder");
const addNew = document.getElementById("addNew");
addNew.addEventListener("click", hideForm);
const form = document.querySelector("form");
const submit = document.getElementById("submit");
submit.addEventListener("click", hideForm);

let hid = true;

function hideForm() {
    if (hid === true) {
        form.style.right = "65px";
        addNew.style.rotate = "45deg";
        addNew.style.backgroundColor = "#ff4500";
        hid = false;
    } else {
        form.style.right = "-350px";
        addNew.style.rotate = "0deg";
        addNew.style.backgroundColor = "#5ac1ff";
        hid = true;
    }
}

function bookCreator(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

bookCreator.prototype.info = function () {
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

function addBookToLibrary(bookTitle, author, pages, read) {
    title = bookTitle;
    title = Object.create(bookCreator.prototype);
    title.title = bookTitle;
    title.author = author;
    title.pages = pages;
    title.read = read;
    myLibrary.push(title);
    render();
}

addBookToLibrary("bruh", "nug", 420, false);
addBookToLibrary("frick", "nig", 69, true);
addBookToLibrary("black", "bad", 343, true);

function render() {
    let card = document.createElement("div");
    myLibrary.forEach((book) => {
        card.classList.add("card");
        cardHolder.appendChild(card);
        card.textContent = book.title + "\n" + book.author;
    });
}

console.table(myLibrary);
