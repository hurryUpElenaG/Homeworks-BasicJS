function findDifference(number1, number2) {
  let difference;

  if (isNaN(number1) || isNaN(number2)) {
    return "Invalid number. Please enter a valid number!";
  } else {
    if (number2 > number1) {
      difference = number2 - number1;
      return difference * 2;
    } else {
      difference = number1 - number2;
      return difference;
    }
  }
}

console.log(findDifference(13, 20));
