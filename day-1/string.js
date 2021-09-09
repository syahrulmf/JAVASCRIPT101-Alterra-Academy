// -----------------------------------------------------  //
// ----- Alterra Academy - JAVASCRIPT 101 Workshop -----  //
// -----------------------------------------------------  //

// -------------------- String -------------------------  //

let hisName = "Babang"; //with double quotes
let herName = 'Inul'; //with single quote
let theirName = `Babang Inul`; //with backticks

console.log(hisName)
console.log(herName)
console.log(theirName)

// embed a variable
console.log(`Hello, ${herName}!`) //output : Hello, Inul!
// embed an expression
console.log(`the result is : ${5 + 5}`) //output : the result is 10


// access index string
let testString = "Isnaini Husnul";
let firstString = testString[0]; // access the first character in first word: 'I'
let secondString = testString[8]; // access the first character in second word: 'H'

console.log(firstString) // will log 'I'
console.log(secondString) // will log 'H'

// Concat & substring
let firstWord = testString[0]; // access the first character in testString variable: 'I'
let secondWord = testString.substring(11, 14); // access the character from 11 to 14: 'nul'

console.log(firstWord + secondWord) // will log 'Inul'