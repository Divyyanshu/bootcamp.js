// Assignment 2: Object Operations
// Objective: Practice adding, removing, and updating values in objects.
// 1. Create an empty object called "person".
// 2. Add the following properties to the "person" object:
//    - name: "John"
//    - age: 30
//    - city: "New York"
// 3. Remove the "age" property from the "person" object.
// 4. Add a new property called "job" with the value "Engineer" to the "person" object.
// 5. Update the "city" property of the "person" object to "San Francisco".
// 6. Print the final "person" object after performing the above operations.

// +++++++++++++++++ //   ASSIGNMENT - 2 ++++++++++++++++++++++

// 1. Create an empty object called "person".
const person = {};
console.log(person);
// 2. Add the following properties to the "person" object:
const person_1 = {
  name: "John",
  age: 30,
  city: "New York",
};
console.log(person_1);
// 3. Remove the "age" property from the "person" object.
delete person_1.age;
console.log(person_1);
// 4. Add a new property called "job" with the value "Engineer" to the "person" object.
person_1.job = "Engineer";
console.log(person_1);
// 5. Update the "city" property of the "person" object to "San Francisco".
person_1.city = "San Francisco";
console.log(person_1);
// 6. Print the final "person" object after performing the above operations.
console.log(person_1);
