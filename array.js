const arrow = () => {
  return true;
};
const array = [
  1,
  "one",
  true,
  null,
  undefined,
  [1, 2],
  {
    age: 24,
  },
  arrow,
];
console.log(`Length of arary ${array.length}`);
console.log(`To print nested arrays values : ${array[5][0]}`);
console.log(`To print object values in arrays : ${array[6].age}`);
console.log(`To print any values in arrays ${array[2]}`);

//push Method
array.push("new value");
console.log(`Adding push method in array ${array}`);

//pop Method
array.pop();
console.log(`Adding pop method in array ${array}`);

//upshift method
array.unshift("new value");
console.log(`Adding Unshift method in array ${array}`);

//shift Method
array.shift();
console.log(`Adding shift method in array ${array}`);

//include Method
console.log(array.includes("one"));

//indexof method
console.log(array.indexOf("one"));

//Destructing in Arrays

const [A, B] = array;
console.log(A, B);
