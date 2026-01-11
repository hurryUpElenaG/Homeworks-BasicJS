//1st way using if-else
function checkNumber(number) {
  if (isNaN(number) || number <= 0) {
    return "Please enter a valid positive number";
  }

  if (number % 3 === 0 && number % 7 === 0) {
    return `FizzBuzz`;
  } else if (number % 3 === 0) {
    return `Fizz`;
  } else if (number % 7 === 0) {
    return `Buzz`;
  } else {
    return `The number is divisible by 3 or 7!`;
  }
}

console.log(checkNumber(21));
console.log(checkNumber(3));
console.log(checkNumber(7));
console.log(checkNumber(-5));
console.log(checkNumber("Elena"));

//second way using SWITCH
/*function checkNumber(number) {
  if (isNaN(number) || number <= 0) {
    return "Please enter a valid positive number";
  }

  switch (true) {
    case number % 3 === 0 && number % 7 === 0:
      //console.log("FizzBuzz");
      //break;
      return `FizzBuzz`;
      
    case number % 3 === 0:
      //console.log("Fizz");
      //break;
      return `Fizz`;
      
    case number % 7 === 0:
      //console.log("Buzz");
      //break;
      return `Buzz`;
      
    default:
      //console.log(`The number is divisible by 3 or 7!`);
      return `The number is divisible by 3 or 7!`;
  }
}

console.log(checkNumber(21));
console.log(checkNumber(3));
console.log(checkNumber(7));
console.log(checkNumber(-5));
console.log(checkNumber("Elena"));*/




