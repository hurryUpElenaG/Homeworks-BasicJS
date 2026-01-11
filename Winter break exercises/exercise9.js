//Input: arr[] = [1, 4, 3, 2, 6, 5]
//Output:  [5, 6, 2, 3, 4, 1]

//1st way using new arr called reversedArr adding the elements from the end to the beggining (incrmenting i)
function reverseArray(arr) {
  let reversedArr = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArr.push(arr[arr.length - 1 - i]); //arr.length-1 is the last element, then we decrease i to get previous elements
  }
  return reversedArr;
}
console.log(reverseArray([1, 4, 3, 2, 6, 5]));

//2nd way using new arr called reversedArr adding the elements from the end to the beggining(decrementing i)
/*function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
console.log(reverseArray([1, 4, 3, 2, 6, 5]));*/

//3rd way using the same array and swapping the elements
/*function reverseArray(arr){
    for (let i = 0; i < arr.length /2; i++){
        let temp = arr[i];
        arr[i] =  arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(reverseArray([1, 4, 3, 2, 6, 5]));*/

