"use strict";
//Creating a map
var person = new Map();
//Creating a json object
var personJson = {firstName:"George", lastName:"Washington"}

//This will create the map with firstname and lastname as keys and 
//John and doe as values for their respective keys
person.set("firstName","John");
person.set("lastName","doe");

//console logging the person map and json object for comparision
console.log(person);
console.log(personJson);
console.log("In map keys are seperated by => from values");
console.log();
//The following code will display the value
console.log(person.get("firstName"));
console.log(person.get("lastName"));

//Checking if the key exists or not
console.log(person.has("firstName"));

//Iteration
console.log("Displaying Keys");
for (var key of person.keys()){
    console.log(key);
}

console.log("Displaying the values");
for (var value of person.values()){
    console.log(value);
}

for (var [key,value] of person){
    console.log(key + " => "+value);
}


//Displays the list of objects int he map
console.log(person.size);

//Removes all the records from the map
person.clear();
console.log("Size of map after clearing the value");
console.log(person.size);


