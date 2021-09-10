// -----------------------------------------------------  //
// ----- Alterra Academy - JAVASCRIPT 101 Workshop -----  //
// -----------------------------------------------------  //

// -------------------- Number -------------------------  //

// no error
let message = "Hello";
message = 12345;

console.log(message) //will log 12345

let n = 123;
n = 123.456;
let integer = 4;
let float = 4.7;
let max = +Infinity;

// some operations with numbers
let sum = 4 + 5; // adding two numbers
let difference = 9 - 4; // subtracting two number
let product = 4 * 5; // multiplying two number
let quotient = 20 / 5; // dividing two number
let remainder = 9 % 2; // modulop

console.log(1 / 0) // infinity
console.log(Infinity) // infinity
console.log("not a number" / 2) // Nan, such divission is erroneous

// Boolean
let isLogin = true;

if( isLogin == true){
  console.log("Login success!")
} else {
  console.log("Login failed!")
}

// parseInt

let ac = 10;
let ab = '10';

console.log(ac + parseInt(ab));