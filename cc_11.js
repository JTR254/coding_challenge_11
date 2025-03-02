// Task 1 - Created Book Class

class Book { // creates book class
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }
    getDetails() { // creates method that returns the details of the book class
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
    }
    updateCopies(quantity) { // creates a class that updates the quantity of copies available
        this.copies += quantity
        return `The new amount of copies is ${this.stock}`
    }
};

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // Expected Output - Title: The Great Gaspy, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5
book1.updateCopies(-1);
console.log(book1.getDetails()); // Expected Ouput - Title: The Great Gaspy, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4

// Task 2 - Created Borrower Class

class Borrower { // creates a class that keep track of who borrows books
    constructor(name, borrowerId) { 
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }
    borrowBook(book) { // creates a method that adds a book to the array
        this.borrowedBooks.push (book)
    }
    returnBook(book) { // creates a method that removes a book from the array
        const index = this.borrowedBooks.indexOf(book); // finds the index of the book in the array
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1); // starting at the index, 1 item is removed
        }
    }
}
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // logs the books that are currently being borrowed to the console
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // logs the books that are currently being borrowed to the console

// Task 3 - Created Library Class

class Library { // creates class that includes two arrays to keep track of books and borrowers
    constructor () {
        this.books = [];
        this.borrowers = []
    }
    addBook(book) { // creates method that adds a book to the array
        this.books.push(book); 
    }
    listBooks() { // creates method that adds books to the array
        this.books.forEach(book => console.log(book.getDetails()));
    }
}

const library = new Library();
library.addBook(book1);
library.listBooks();
// Output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
