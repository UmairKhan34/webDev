//rest //arrays

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = array;
array2[0] = "Hello";
console.log("New array", array2);
console.log("Old array", array);

const [a, ...b] = array;
console.log("a", a);
console.log("b", b);

//objects
const person = {
  id: "1234",
  name: "Umair",
  age: 20,
  dob: 2000,
};
const { id, ...user } = person;
console.log("ID", id);
console.log("user", user);

//functions
function check({ id, ...user }, array) {
  console.log("ID=>", id);
  console.log("User=>", user);
  console.log("Array=>", array);
}
check(person, array);

//Spread Operators in arrays
const array3 = [1, 2, 3, 4, 5, 6, 7, 8];
const tempArray = [...array3];
tempArray[0] = "Hello";
console.log(array3);
console.log(tempArray);

//spread operators for objects

const newOne = { ...person };
console.log(newOne);

//functions
function spreadFunction(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

spreadFunction(...array3);

// In JavaScript, there are two ways to copy objects: shallow copy and deep copy.
//Shallow copying creates a new object with references to the same memory locations as the original object,
//while deep copying creates a new object with new memory locations for all of its properties and nested objects or arrays.

//function cases
//Rest operator used where we assign the values
//spread operator used where we set the values

//interview question
//premitive data type used deep copy
//while non-primitive data type used shallow copy
