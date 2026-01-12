function findCloserNumberTo100(number1, number2) {
  if (isNaN(number1) || number1 < 0 || isNaN(number2) || number2 < 0) {
    alert("Invalid number! Please enter a non-negative integer.");
  } else {
    let difference1 = Math.abs(100 - number1);
    let difference2 = Math.abs(100 - number2);

    if (difference1 < difference2) {
      alert(`${number1} is closer to 100!`);
    } else if (difference2 < difference1) {
      alert(`${number2} is closer to 100!`);
    } else {
      alert("Both numbers are equally close to 100");
    }
  }
}

findCloserNumberTo100(-20, 80);

/*let input1 = prompt("Enter first number:");
let number1 = parseInt(input1);

let input2 = prompt("Enter second number:");
let number2 = parseInt(input2);

findCloserNumberTo100(number1, number2); */
