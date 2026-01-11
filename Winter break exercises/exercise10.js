//1st solution using FOR loop
function countDownNumbers(number) {
  let result = [];
  for (let i = number; i >= 0; i--) {
    result.push(i);
  }
  return result;
}
console.log(countDownNumbers(7));

//2nd solution using while loop
/*function countDownNumbers(number) {
  let result = [];
  while (number >= 0) {
    result.push(number);
    number--;
  }
  return result;
}
console.log(countDownNumbers(7));*/
