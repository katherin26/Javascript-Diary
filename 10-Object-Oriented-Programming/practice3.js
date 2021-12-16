/*NOTE: Ways to store data and make computations to make decisions in your program .

COMPARISON OPERATORS
==,!==,>,>=,<,<=

To calculate an output 

ARITHMETIC OPERATORS 

+, -, *, /, %
 */

//EXAMPLE OF computations

//INPUT
let currentYear = 2021;
let birthYear = 1980;

//PROCESS
let age = currentYear - birthYear;

//OUTPUT
if (age >= 18) {
  console.log(`You can have a beer!`);
} else {
  console.log(`You cannot have a beer!`);
}

//Ypu can have a beer!

/*Store name and age of three people and determine if they can drink a beer. */

//USING ONLY PRIMITIVE VARS

let personName1 = 'Bambi';
let personAge1 = 29;

if (personAge1 >= 18) {
  console.log(`${personName1} can have a beer.`);
} else {
  console.log(`${personName1} cannot have a beer.`);
}

//OUTPUT = Bambi can have a beer.

let personName2 = 'Chick';
let personAge2 = 32;

if (personAge2 >= 18) {
  console.log(`${personName2} can have a beer.`);
} else {
  console.log(`${personName2} cannot have a beer.`);
}

//OUTPUT = Chick can have a beer.
