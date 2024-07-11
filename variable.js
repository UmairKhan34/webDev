//constants
const a = 10;
console.log("A value before blocked scope", a);
{
  const a = 20;
  console.log("A value in blocked scope ", a);
}
console.log("A value before blocked scope", a);
//let
let b = 1;
console.log("B value before blocked scope", b);
{
  let b = 2;
  console.log("B value in blocked scope ", b);
}
console.log("A value before blocked scope", b);

//Var

var c = 90;
console.log("Value of c in outer scope ", c);
{
  c = "inner scope";
  console.log("value of c in inner scope ", c);
}
console.log("Value of c ", c);
