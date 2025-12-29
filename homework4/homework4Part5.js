function sumMinMax(array) {
  let max = array[0];
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }

    if (array[i] < min) {
      min = array[i];
    }
  }

  let sum = min + max;

  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

array = [3, 5, 6, 8, 11];
console.log(sumMinMax(array));

//BONUS
/*function sumMinMax(mixedArray) {
  let numbers = [];

  for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "number" && !isNaN(mixedArray[i])) {
      numbers.push(mixedArray[i]);
    }
  }

  if (numbers.length === 0) {
    return "Error: No numbers in the array.";
  }

  let max = numbers[0];
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
        
    if (numbers[i] < min){
        min = numbers[i];
    } 
  }

  let sum = max + min;

  return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

array = ["Georgievska", null, 3, 5, 6, 8, 11, "Elena"];
console.log(sumMinMax(array));*/