// Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"]
// End of myPetsArray array

function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    
    // Only change code below this line
    var myNewPets = [];
    myNewPets.push('Bird', 'Fish');
    
    var firstPet = [];
    firstPet = myNewPets[0];

    var lastPet = [];
    lastPet = myNewPets.length-1;

    myNewPets[0] = "Lion";

    return myNewPets;
    // Only change code abow this line
}
//console.log(myNewPets);
console.log (myArrayFunction(myPetsArray)); // Change this line
module.exports = myArrayFunction;