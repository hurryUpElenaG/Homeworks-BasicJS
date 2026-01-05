//1st way- Object literal
/*let book = {
    title: "The Robots of dawn",
    author: "Isaac Asimov",
    readingStatus: true,
    getInfo: function() {
        if (this.readingStatus) {
            return `You have already read '${this.title}' by ${this.author}.`;
        } else {        
            return `You still need to read '${this.title}' by ${this.author}.`;
        }
    }
}

console.log(book.getInfo());*/

//BONUS
/*let book = {
    title: prompt("Enter the book title:"),
    author: prompt("Enter the book author:"),
    readingStatus: prompt("Have you read this book? (true/false):") === "true",
    getInfo: function() {
        if (this.readingStatus) {
            return `You have already read '${this.title}' by ${this.author}.`;
        } else {        
            return `You still need to read '${this.title}' by ${this.author}.`;
        }
    }
}

console.log(book.getInfo());*/

//2nd way- constructor function
/*function Book(title, author, readingStatus) { 
    this.title = title; 
    this.author = author; 
    this.readingStatus = readingStatus; 
    this.getInfo = function() { 
        if (this.readingStatus) { 
            return `You have already read '${this.title}' by ${this.author}.`;
        } else { 
            return `You still need to read '${this.title}' by ${this.author}.`; 
        } 
    }; 
} 

//let myBook = new Book("The Robots of dawn", "Isaac Asimov", true);
console.log(myBook.getInfo()); */


// Bonus:
function Book(title, author, readingStatus) { 
    this.title = title; 
    this.author = author; 
    this.readingStatus = readingStatus; 
    this.getInfo = function() { 
        if (this.readingStatus) { 
            return `You have already read '${this.title}' by ${this.author}.`;
        } else { 
            return `You still need to read '${this.title}' by ${this.author}.`; 
        } 
    }; 
} 

let title = prompt("Enter the book title:"); 
let author = prompt("Enter the book author:"); 
let statusInput = prompt("Have you read the book? (yes/no):"); 
let readingStatus = (statusInput.toLowerCase() === "yes"); 

let myBook = new Book(title, author, readingStatus); 
console.log(myBook.getInfo());

