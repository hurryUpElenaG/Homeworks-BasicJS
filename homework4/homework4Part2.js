//BONUS
function validateNumber(number) {
  return isNaN(number) && typeof number !== "number";
}

// 1st  way + BONUS
function sumArray(arr) {
  let sum = 0;

  if (arr.length !== 5) {
    return "Error: Array must contain exactly 5 numbers.";
  }

  for (let num of arr) {
    if (validateNumber(num)) {
      return "Error: All elements in the array must be numbers.";
    }
    sum += num;
  }

  return sum;
}

//arr = [5, 12, 30, 100, 22];
arr = ["Elena", 5, 12, 30, 22];
console.log(sumArray(arr));

//2nd way + BONUS
/*function sumArray(arr) {
  let sum = 0;

  if (arr.length !== 5) {
    return "Error: Array must contain exactly 5 numbers.";
  }

  for (let i = 0; i < arr.length; i++) {
    if (validateNumber(arr[i])) {
        return "Error: All elements in the array must be numbers.";
    }
    sum += arr[i];
  }

  return sum;
}*/
