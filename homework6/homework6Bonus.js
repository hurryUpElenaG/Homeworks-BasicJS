//1st way - printing the name of the recipe, the ingredients as unordered list and EXTRA print table
let recipeDiv = document.getElementById("recipe");
let recipeName = prompt("What is the name of the recipe?");
let ingredientNumber = parseInt(prompt("How many ingredients does the recipe need?"));

let ingredients = [];

let print = "<ul>";
let printHeaderRowTable = `<tr><th>${recipeName}</th></tr>`;
let printCellRowTable = "";

for (let i = 0; i < ingredientNumber; i++) {
  let ingredient = prompt(`Enter ingredient #${i + 1}:`);
  ingredients.push(ingredient);
  print += `<li>${ingredient}</li>`;
  printCellRowTable += `<tr><td>${ingredient}</td></tr>`;
}

print += "</ul>";

recipeDiv.innerHTML = `<h1>${recipeName}</h1> ${print} <table>${printHeaderRowTable} ${printCellRowTable}</table>`;



//2nd way - printing the name of the recipe and the ingredients as unordered list
/*let recipeDiv = document.getElementById("recipe");
let recipeName = prompt("What is the name of the recipe?");
let ingredientNumber = parseInt(prompt("How many ingredients does the recipe need?"));

let ingredients = [];

let header1 = document.createElement("h1");
header1.textContent =  recipeName;
recipeDiv.appendChild(header1);

for (let i = 0; i < ingredientNumber; i++) {
  let ingredient = prompt(`Enter ingredient #${i + 1}:`);
  ingredients.push(ingredient);

  let unorderedList = document.createElement("ul");
  let listItem = document.createElement("li");
  listItem.textContent  = ingredient
  unorderedList.appendChild(listItem);
  recipeDiv.appendChild(unorderedList);
}

//EXTRA- printing the ingredients in a table
/*let table = document.createElement("table");
let headerRow = document.createElement("tr");
let header = document.createElement("th");
header.textContent = recipeName;
headerRow.appendChild(header);
table.appendChild(headerRow);

for (item of ingredients) {
  let row = document.createElement("tr");
  let cell = document.createElement("td");
  cell.textContent = item;
  row.appendChild(cell);
  table.appendChild(row);
}

recipeDiv.appendChild(table);*/




