const form = document.getElementById("book-adder");
const shelf = document.getElementById("book-container");
let bookList = [];



form.addEventListener("submit",(event) => {
    event.preventDefault();
    addBook();
    form.reset();
});

function Book(name,author,length,isRead) {
    this.name = name;
    this.author = author;
    this.length = length;
    this.isRead = isRead;
    this.info = function() {
        let hasOrNot;
        if(isRead) {
            hasOrNot = "has been read."
        } else {
            hasOrNot = "not read yet."
        }
        return name + " by " + author + ", " + length + " pages long, " + hasOrNot;
    }
}

function addBook() {
    let book = new Book(form[0].value,form[1].value,form[2].value,form[3].checked);
    bookList.push(book);
    let card = document.createElement("div");
    card.classList.add("card");
    let child = document.createElement("h3");
    //
    child.textContent = book.name;
    card.appendChild(child);
    
    child = document.createElement("p");
    child.textContent ="by " + book.author
    card.appendChild(child);

    child = document.createElement("p");
    child.textContent = book.length + " pages long"
    card.appendChild(child);

    child = document.createElement("p");
    if(book.isRead) {
        child.textContent = "has  been read.";
    } else {
        child.textContent = "hasn't been read.";
    }
    card.appendChild(child);
    shelf.appendChild(card);
}