let printNumbersP = document.getElementById("printNumbers");
let sumNumbersP = document.getElementById("sumNumbers");
let showEquationP = document.getElementById("showEquation");

let numbers = [2, 4, 5];

//1st way
function printElements(numbers){
    let print  = "<ul>";
    let sum = 0;
    let equation = "";

    for(num of numbers){
        print += `<li>${num}</li>`;
        sum += num;
    }
    
    print += "</ul>"
    equation = numbers.join(" + ") + " = " + sum;

    printNumbersP.innerHTML = `Printing the array [2, 4, 5] of numbers: ${print}`;
    sumNumbersP.innerHTML = `The sum of the aray of numbers is: ${sum}`;
    //BONUS
    showEquationP.innerHTML = `The sum equation is: ${equation}`;
}

printElements(numbers);

//2nd way - using createElement and appendChild
/*function printElements(numbers){
    let sum  = 0;
    let equation =  "";
    for(num of numbers){
        let unorderedList = document.createElement("ul");
        let  listItem = document.createElement("li");
        listItem.textContent = num;
        unorderedList.appendChild(listItem);
        printNumbersP.appendChild(unorderedList);

        sum += num;
    }
    sumNumbersP.textContent  = sum;
    //BONUS
    equation = numbers.join(" + ") + " = " + sum;
    showEquationP.textContent = equation;
}

printElements(numbers);*/





