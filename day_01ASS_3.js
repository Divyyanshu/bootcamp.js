// ++++++++++++++++++ ASSIGNMENT 3 ++++++++++++++++++++++++++++

// 1. Create an empty array called "cars".
const car = [];
console.log(car);
// 2. Add three car objects to the "cars" array. Each car object should have the following properties:
car.push({
  make: "Toyota",
  model: "Camry",
  year: 2018,
});
car.push({
  make: "forturiner",
  model: "xuv",
  year: 2020,
});
car.push({
  make: "supra",
  model: "twich",
  year: 2015,
});
console.log(car);

// 3. Remove the first car object from the "cars" array. ----> I am use shift() method
car.shift();
console.log(car);
// 4. Add a new car object to the "cars" array with the following properties:
car.push({
  make: "honda",
  model: "civie",
  year: 2021,
});
console.log(car);
// 5. Update the "model" property of the second car object in the array to "Accord".
car[1].model = "Accord";
console.log(car);
// 6. Print the final "cars" array after performing the above operations.
console.log(car);


// Assignment 3: Array of Objects Operations
// Objective: Practice adding, removing, and updating values in an array of objects.
// 1. Create an empty array called "cars".
// 2. Add three car objects to the "cars" array. Each car object should have the following properties:
//    - make: "Toyota"
//    - model: "Camry"
//    - year: 2018
// 3. Remove the first car object from the "cars" array.
// 4. Add a new car object to the "cars" array with the following properties:
//    - make: "Honda"
//    - model: "Civic"
//    - year: 2020
// 5. Update the "model" property of the second car object in the array to "Accord".
// 6. Print the final "cars" array after performing the above operations.
// Remember to use console.log() to print the arrays and objects in the console to see the results of each operation.
