//1st way using for-of
function incrementAndDecrement(arr) {
  let result = [];
  for (let num of arr) {
    if (num % 2 !== 0) {
      result.push(num + 1);
    } else {
      result.push(num - 1);
    }
  }
  return result;
}

console.log(incrementAndDecrement([1, 2, 3, 4, 5]));

//2nd way using for
/*function incrementAndDecrement(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i] + 1);
    } else {
      result.push(arr[i] - 1);
    }
  }
  return result;
}

console.log(incrementAndDecrement([1, 2, 3, 4, 5]));*/

//3rd way usinf WHILE
/*function incrementAndDecrement(arr) {
  let result = [];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i] + 1);
    } else {
      result.push(arr[i] - 1);
    }
    i++;
  }
  return result;
}

console.log(incrementAndDecrement([1, 2, 3, 4, 5]));*/
