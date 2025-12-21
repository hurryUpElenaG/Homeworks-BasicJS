// Solution1: Calculates your dog's age (1 human year = 7 dog years)
function calculateDogAge(age) {
  let dogAge = age * 7;
  return dogAge;
}

calculateDogAge(5);

// BONUS-Solution 2: Calculates your dog's age (1 human year = 7 dog years)
function calculateDogAge(age, isHumanYearsToDogYears) {
  let dogAge;
  if (isHumanYearsToDogYears === true) {
    dogAge = age * 7;
    return dogAge;
  } else {
    dogAge = age / 7;
    return dogAge;
  }
}

calculateDogAge(5, true);


    
// Calculates your dog's age if given year of birth(1 human year = 7 dog years)
/*function calculateDogAge(yearOfBirth, currentYear = new Date().getFullYear()) {
  let dogAge = (currentYear - yearOfBirth) * 7;
  console.log(`Your dog's age is ${dogAge}.`);

  return dogAge;
}

calculateDogAge(2020);*/





