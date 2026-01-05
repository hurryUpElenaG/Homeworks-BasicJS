//1s way- object literal
/*let animal = {
    name: "Dog",
    kind: "Hasky",
    speak: function(message){
        return `${this.name} says: '${message}'`;
    }
}

console.log(animal.speak("hey bro!!!"));*/

//BONUS
/*let animal = {
  name: prompt("Enter the name of the animal:"),
  kind: prompt("Enter the kind of the animal:"),
  speak: function (message) {
    return `${this.name} says: '${message}'`;
  }
};

let message = prompt("What does the animal say?");
console.log(animal.speak(message));*/


//2nd Way- constructor function
/*function Animal(name, kind) {
  this.name = name;
  this.kind = kind;
  this.speak = function (message){
    return `${this.name} says: '${message}'`;
  }
}

let myAnimal = new Animal("Dog",  "Hasky");
console.log(myAnimal.speak("hey bro!!!")); */

//Bonus:
function Animal(name, kind) {
  this.name = name;
  this.kind = kind;
  this.speak = function (message){
    return `${this.name} says: '${message}'`;
  }
}

let name = prompt("Enter the name of the animal:");
let kind = prompt("Enter the kind of the animal:");
let message = prompt("What does the animal say?");

let myAnimal = new Animal(name, kind);
console.log(myAnimal.speak(message));