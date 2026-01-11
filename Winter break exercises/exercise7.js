array = ["Elena", "is", "travelling", 2, "kms", "every", "day!"];

//1st way using for-of
function concatenateArrayElements(array){
    let result = "";
    for(let string of array){
        result += string + " ";
    }
    return result;
}

console.log(concatenateArrayElements(array));


//2nd way using for
/*function concatenateArrayElements(array){
    let result = "";
    for(let i = 0; i < array.length; i++){
        result += array[i] + " ";
    }
    return result;
}

console.log(concatenateArrayElements(array));*/


