
function createFullNames(firstName, lastName){

    let fullNames = [];

    if (firstName.length !== lastName.length) { 
        return "Error: Arrays must be of equal length"; 
    }

    for (let i = 0; i < firstName.length; i++){
        let fullName = `${i + 1}. ${firstName[i]} ${lastName[i]}`;
        fullNames.push(fullName);
    }

    return fullNames;
}

firstName = ["Bob", "Jill"];
lastName = ["Gregory", "Wurtz"];
console.log(createFullNames(firstName,lastName));


