/*Change the page with JavaScript
Change the text of all paragraphs and headers with javascript
Note:The html must not be changed*/

//1st div
let firstDiv = document.getElementById("first");
let firstHeader1 = firstDiv.firstElementChild;
let firstParagraph = firstDiv.lastElementChild;
//let firstHeader1 = firstDiv.querySelector("#myTitle")
//let firstParagraph  = firstDiv.querySelector(".paragraph")

firstHeader1.innerText = "Hello John";
firstParagraph.innerText =  "I am writting to inform you that..."

//2nd div
let secondDiv = document.querySelector(".anotherDiv");
let secondParagraph = secondDiv.querySelector(".second");
let textSecondDiv= secondDiv.getElementsByTagName("text")[0];

secondParagraph.innerText = "You did an excellent job. Congratulations!"
textSecondDiv.innerText  = "In addition, you showed commitment, passion and high profesionalism."

//3rd div
let lastDiv = secondDiv.nextElementSibling;
let lastHeader3 = lastDiv.querySelector("h3");
let lastHeader1 = lastHeader3.previousElementSibling;

lastHeader1.innerText = "I look forward to meeting you!";
lastHeader3.innerText = "All the best!"







