let array = [null, undefined, NaN, "", false, 0, "Elena", 50, [], {}];

function filterTruthyValues(array){
    let truthyValues = [];
    for(let i = 0; i < array.length; i++){
        if(array[i]){           //Checks if the value is truthy. If the value is truthy, the condition passes.If the value is falsy, it is skipped. JavaScript automatically converts the value to true or false.
            truthyValues.push(array[i]);    //Only runs if the if condition is true 
        }
    }
    return truthyValues;
}

console.log(filterTruthyValues(array));

