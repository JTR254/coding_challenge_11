// Task 1 - Created Book Class

class book { // creates book class
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

const book1 = new book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // Expected Output - Title: The Great Gaspy, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5
book1.updateCopies(-1);
console.log(book1.getDetails()); // Expected Ouput - Title: The Great Gaspy, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4