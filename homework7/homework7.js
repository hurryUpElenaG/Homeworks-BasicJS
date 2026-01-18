//1st way using eventl listener with anonymous function with <table><tr><td></td></tr></table> tags
let button = document.getElementById("createTableBtn");

button.addEventListener("click", function () {
  let rows = document.getElementById("rows").value;
  let columns = document.getElementById("columns").value;
  let tableContainer = document.getElementById("tableContainer");

  // Clear previous table
  tableContainer.innerHTML = "";

  if (rows <= 0 || columns <= 0) {
    alert("Please enter valid numbers for rows and columns.");
    return;
  }

   let tableHTML = "<table>";

  for (let i = 1; i <= rows; i++) {
    tableHTML += "<tr>";

    for (let j = 1; j <= columns; j++) {
      tableHTML += `<td>Row-${i} Column-${j}</td>`;
    }
    tableHTML += "</tr>";
  }
  
  tableHTML += "</table>";
  tableContainer.innerHTML = tableHTML;
 
});


//2nd way- using event listener, createTable() function, and createElement, appendChild

/*let button = document.getElementById("createTableBtn");
button.addEventListener("click", createTable);

function createTable() {
  let rows = document.getElementById("rows").value;
  let columns = document.getElementById("columns").value;
  let tableContainer = document.getElementById("tableContainer");

  // Clear previous table
  tableContainer.innerHTML = "";

  if (rows <= 0 || columns <= 0) {
    alert("Please enter valid numbers for rows and columns.");
    return;
  }

  let table = document.createElement("table");

  for (let i = 1; i <= rows; i++) {
    let tr = document.createElement("tr");

    for (let j = 1; j <= columns; j++) {
      let td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  tableContainer.appendChild(table);
}*/


//3rd way using event listener with anonymous function createElement, appendChild
/*let button = document.getElementById("createTableBtn");
button.addEventListener("click", function () {
  let rows = document.getElementById("rows").value;
  let columns = document.getElementById("columns").value;
  let tableContainer = document.getElementById("tableContainer");

  // Clear previous table
  tableContainer.innerHTML = "";

  if (rows <= 0 || columns <= 0) {
    alert("Please enter valid numbers for rows and columns.");
    return;
  }

  let table = document.createElement("table");

  for (let i = 1; i <= rows; i++) {
    let tr = document.createElement("tr");

    for (let j = 1; j <= columns; j++) {
      let td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  tableContainer.appendChild(table);
});*/







