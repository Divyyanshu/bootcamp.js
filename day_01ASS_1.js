// Assignment 1: Array Operations
// Objective: Practice adding, removing, and updating values in arrays.

// 1. Create an empty array called "fruits".
// 2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".
// 3. Remove the first fruit from the array.
// 4. Add "grape" to the end of the array.
// 5. Update the second fruit in the array to "pear".
// 6. Print the final "fruits" array after performing the above operations.

// ASSIGNMENT NO .1

//1. Create an empty array called "fruits".
let fruits = [];
console.log(fruits);
// 2.
let fruitsName = ["apple", "banana", "orange"];
console.log(fruitsName);

// // 3. remove the first fruits from the Array
fruitsName.pop();
console.log(fruitsName);

// // 4. Add "grape" to the end of the array.
fruitsName.push("grapes");
console.log(fruitsName);

// 5./6. Update the second fruit in the array to "pear".
// splice(index, deleteCount, items(optional)
let fruitsNames = ["apple", "banana", "orange"];
fruitsNames.splice(1, 1, "pear");
console.log(fruitsNames);
