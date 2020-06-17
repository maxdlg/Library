let myLibrary = [];
const cardHolder = document.querySelector(".cardHolder");
const addNew = document.getElementById("addNew");
addNew.addEventListener("click", hideForm);
const form = document.querySelector("form");
const submit = document.getElementById("submit");
submit.addEventListener("click", hideForm);
submit.addEventListener("click", submitForm);

function removeBook(evt) {
    let shit = evt.target.parentNode.getAttribute("indexNumber");
    myLibrary.splice(shit, 1);
    clearScreen();
}

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

function submitForm() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = parseInt(document.getElementById("pages").value);
    let read = !document.getElementById("readYes").checked;

    if (title === "" || author === "" || isNaN(pages)) {
        alert("Please enter all fields");
        return;
    }

    addBookToLibrary(title, author, pages, read);
    clearScreen();
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
}

function bookCreator(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

bookCreator.prototype.info = function() {
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
    let book = Object.create(bookCreator.prototype);
    book.title = title;
    book.author = author;
    book.pages = pages;
    book.read = read;
    myLibrary.push(book);
}

addBookToLibrary("1", "nug", 420, false);
addBookToLibrary("2", "black", 420, false);
addBookToLibrary("3", "fuckhead", 420, false);
addBookToLibrary("4", "nug", 420, false);
addBookToLibrary("5", "black", 420, false);
addBookToLibrary("6", "fuckhead", 420, false);

function clearScreen() {
    while (cardHolder.firstChild) {
        cardHolder.removeChild(cardHolder.lastChild);
    }
    render();
}

function render() {
    let i = 0;

    myLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card");
        cardHolder.appendChild(card);
        const text = document.createElement("p");
        text.classList.add("text");
        card.appendChild(text);
        const remove = document.createElement("button");
        remove.classList.add("remove");
        card.appendChild(remove);
        remove.textContent = "Remove Book";
        text.textContent = book.info();
        card.setAttribute("indexNumber", i);
        remove.addEventListener("click", removeBook);
        i++;
    });
}

render();
