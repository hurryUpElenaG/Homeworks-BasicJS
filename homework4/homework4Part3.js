function mergeStrings(array) {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    result += array[i];

    if (i < array.length - 1) {
      result += " ";
    }
  }
  return result
}

array = ["Hello", "my", "name", "is", "Elena"];
console.log(mergeStrings(array));