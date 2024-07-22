//simple if else condition
var a;
a = 10;
if (a % 2 == 0) {
  console.log(`${a} is Even number`);
} else {
  console.log(`${a} is Odd number`);
}
//nested if
var a;
a = 10;
var b;
b = 8;
if (a % 2 == 0) {
  if (b % 2 == 0) {
    console.log(`${b} is Even number`);
  } else {
    console.log(`${b} is Odd number`);
  }
} else {
  console.log(`${a} is Odd number`);
}

//else if
var a, b, c;
(a = 10), (b = 20), (c = 10);
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else if (b > c) {
  console.log(`${b} is greater than ${c}`);
} else {
  console.log("No one is greate");
}
//ternary operators

var a, b;
(a = 30), (b = 40);
var c =
  b > a
    ? console.log(`${b} is greater than ${a}`)
    : console.log(`${a} is greater than ${b}`);
console.log(c);
