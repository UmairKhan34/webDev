//function declaration

function evenOdd() {
  console.log("p1->", p1);
  console.log("p2->", p2);
}

evenOdd();

//pass by copy and pass by refrence

const main = () => {
  const check = (Param, updateArray) => {
    console.log("Params ", Param);
    updateArray([6, 7]);
  };
  let arg = [2, 3];
  const updateArray = (newValue) => {
    arg = newValue;
  };
  check(arg, updateArray);
  console.log("Args", arg);
};
main();

//arrow functions & anonymous function

const evenOdd = (
  p1 = 8,
  p2 = ((params) => {
    console.log("IIFE ", params);
    return 12;
  })("Params Value")
) => {
  p1 % 2 == 0 ? console.log(`${p1} -> even`) : console.log(`${p1} -> odd`);
  p2 % 2 == 0 ? console.log(`${p2} -> even`) : console.log(`${p2} -> odd`);
};
evenOdd();

//IIFE
((params) => {
  console.log("IIFE ", params);
  return 12;
})("Params Value");
