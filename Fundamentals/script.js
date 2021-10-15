'use strict';
//--------------IF ELSE---------------------------------------//
const age = 15;

if (age >= 18) {
  console.log(`Pepa can drive`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Pepa is too young , wait another ${yearsLeft} years;`);
}

//With function and ternary operator =
function calcAge(curAge){
  return(curAge >=18 ? `Pepa can drive!, wait another ${18 - curAge} years.`)
}

//-----------EXERCISE BMI------------------------------------------//

const massMinnie = 95;
const heightMinnie = 1.88;
const massMickey = 85;
const heightMickey = 1.76;

const BMIMinnie = massMinnie / heightMinnie ** 2;
const BMIMickey = massMickey / (heightMickey * heightMickey);
const minnieHigherBMI = BMIMinnie > BMIMickey;
console.log(BMIMinnie, BMIMickey);

if (BMIMinnie > BMIMickey) {
  console.log(
    `Minnie's BMI (${BMIMinnie}) is higher than Mickie's (${BMIMickey})`
  );
} else {
  console.log(
    `Mickey's BMI (${BMIMickey}) is higher than Minnie's (${BMIMinnie})`
  );
}

//With function and ternary operator =

function calcBMI(bmi1,bmi2){
  return(bmi1 > bmi2)? `Minnie's BMI(${bmi1}) is higher than Mickie's (${bmi2})` : `Mickie's BMI (${bmi2}) is higher than Minnie's (${bmi1})`
}

//----------TYPE CONVERSION-------------------------------------------//

//NOTE: The global method Number() can convert strings to numbers.
const inputYear = '1996';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18); //2014
console.log(Number('kat')); //NaN
console.log(typeof NaN); //number
console.log(String(23), 23);

//NOTE: NUMBER METHODS
console.log(Number()); //Returns a number, converted from its argument.
console.log(parseFLoat());//Parses a string and returns a floating point number.
console.log(parseInt());//Parses a string and returns an integer.

//NOTE: THE UNARY + OPERATOR
//The unary + operator can be used to convert a variable to a number.

let z = "10" // y is a string.
let y = + z; // y is a number.

//NOTE: NUMBERS TO STRINGS
//The global method String() can convert numbers to strings.

console.log(String(z));//123
console.log(String(123));//123
console.log(String(100 + 23));//123

//NOTE: toString() does the same.
console.log((123).toString());//123
console.log((100 + 23).toString());//123

//NOTE: BOOLEANS TO NUMBERS
//The global method Number() can also convert booleans to numbers.

console.log(Number(false));//0
console.log(Number(true));//1

//NOTE: BOOLEANS TO STRINGS 
console.log(String(false)); //returns "false"
console.log(String(true)); //returns "true"

//NOTE: toString()
console.log(false.toString());//returns "false"
console.log(true.toString());//returns "true"

//----------TYPE COERSION-------------------------------------------//

console.log('Iam' + 23 + 'Years Old');
console.log('23' - '10' - 3); // el (-) resta los strings. //10
console.log('23' + '10' + 3); //el (+) concatena. //23103
console.log('23' / '2'); //11.5
console.log('23' > '18'); //true

let n = '1' + 1; //11
n = n - 1; //10
console.log(n);

//5 FALSY VALUES = 0, '', undefined , null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Kat')); //true // truty value todo lo que sea string
console.log(Boolean({})); //true// todo lo que sea object vacio es truty value.

//-----------EXERCISE IF ELSE ------------------------------------------//

const money = 100; // si se pone 0 es falsy pero si se pone otro numero es truty .
if (money) {
  console.log("Don't spend it all ;)...");
} else {
  console.log('You should get a job!....');
}

let height;
if (height) {
  console.log('YAY! Height is defined!!');
} else {
  console.log('Height is UNDEFINED!!!....');
}

//-----------EQUALY OPERATORS ------------------------------------------//

const age2 = 18;
if (age2 === 18) console.log('You just became an adult!!');

const favorite = Number(prompt('What is your favorite number?'));
console.log(typeof favorite);
console.log(favorite);

if (favorite === 23) {
  console.log('Cool 23 is an amazing number!!');
} else if (favorite === 7) {
  console.log('7 is also a cool number!');
} else {
  console.log('Number is not 23 or 7');
}

if (favorite !== 23) console.log(`Why not 23 ?  -_-`);

//BASIC BOOLEAN LOGIC = THE && ; || AND ! OPERATOR ------------------------------------------//

const hasDriversLicense = true; //Variable a
const hasGoodVision = true; //Variable b
const hasBadVision = false; //Variable c
const isTired = false; //Variable d

//true + true = true
//true + false = false

console.log(hasDriversLicense && hasGoodVision); //true
console.log(hasDriversLicense || hasGoodVision); //true

console.log(hasDriversLicense && hasBadVision); //false
console.log(hasBadVision && hasBadVision); //false
console.log(hasDriversLicense || hasBadVision); //true
console.log(hasBadVision || hasBadVision); //false

console.log(!hasDriversLicense); //false

if (hasDriversLicense && hasGoodVision) {
  console.log(`Kitty is able to drive`);
} else {
  console.log(`Someone else should drive...`);
}

console.log(hasDriversLicense && hasGoodVision && isTired); //false
console.log(hasDriversLicense && hasGoodVision && !isTired); //true

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Kitty is able to drive!`);
} else {
  console.log(`Someone else should drive...`);
}

//-----------EXERCISE = AVERAGE DOLPHINS AND KOALAS ------------------------------------------//
//TEST DATA = DOLPHINS SCORE 96 , 108 AND 89,KOALAS SCORE 88, 91 AND 110;

//1)
const scoreDolphins = [96, 108, 89];
const scoreKoalas = [88, 91, 110];

//AVERAGE WITH FUNCTION AND FOR LOOP
function calcAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

let avgDolphins = calcAvg(scoreDolphins);
let avgKoalas = calcAvg(scoreKoalas);

console.log(avgDolphins, avgKoalas); //97.66 , 96.33

//1.1) AVERAGE WITH REDUCE

function calcAvg2(arr) {
  return arr.reduce((acc, next) => acc + next) / arr.length;
}

let avgDolphins2 = calcAvg2(scoreDolphins);
let avgKoalas2 = calcAvg2(scoreKoalas);

console.log(avgDolphins2, avgKoalas2); //97.66 , 96.33

//compare the team's average scores to determine the winner of the competition ,
//and print it to the console.
//don't forget that there can be a draw , so test dor that as well .

function checkWinner(avg1, avg2) {
  if (avg1 >= 2 * avg2) {
    console.log(`Dolphins is the winner (${avg1}) vs (${avg2})`);
  } else if (avg2 >= 2 * avg1) {
    console.log(`Koalas is the winner (${avg2} vs (${avg2})`);
  } else {
    console.log(`We don't have a winner`);
  }
}

checkWinner(avgDolphins, avgKoalas);

//IMPRIMIR LOS DIAS DE LA SEMANA Y SU MENSAJE REEMPLAZA EL SWITCH CODE CON OTRA LOGICA
const days = [
  { day: 'monday', message: 'Plan Course struture' },
  { day: 'tuesday', message: ' prepare theory videos' },
  { day: 'wednesday', message: 'Write code examples 1' },
  { day: 'thursday', message: 'Write code examples 2' },
  { day: 'friday', message: 'Play videos' },
  { day: 'saturday', message: 'Enjoy the weekend 2' },
  { day: 'sunday', message: 'Enjoy the weekend 2' },
];

function weekdays(days, str) {
  for (const dayIndex in days) {
    console.log(`This is property`, dayIndex);
    console.log(days[dayIndex].day);
    console.log(days[dayIndex].message);

    if (days[dayIndex].day === str) {
      console.log(days[dayIndex].message);
    }
    if (Object.day === 'monday')
      console.log(`${property}: ${object[property]}`);
  }
}

weekdays(days, 'monday');

//--------SWITCH--------------------------------------------
//const day = 'sunday';

/*switch (day) {
    case 'monday':
        console.log('PLan course structure');
        console.log('Go to coding meetup');
        break;

    case 'tuesday':
        console.log('prepare theory videos..');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record Videos...');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend =D');
        break;
    default:
        console.log('Not a valid day');
}

*/

const day = 'monday';

if (day === 'monday') {
  console.log('PLan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('prepare theory videos..');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record Videos...');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend =D');
} else {
  console.log('Not a valid day!!!');
}

//-----STAMENTS AND EXPRESIONS

//STATEMENTS : es una pieza de codigo que no produce un value un ejemplo seria

//ejemplo if statements ... if(23 > 10){
//const str = '23 is bigger';
//}

//EXPRESSIONS: ES UNA PIEZA DE CODIGO QUE PRODUCE UN VALOR
//EJEMPLO = 3+4
//1992 AND true && false && !false

//TERNARY OPERATOR

//el operador condicional es un operador que produce un valor y es una expresion.

// const age = 23;
// //age >= 18 ? console.log('I like to drink wine!!') : console.log('I like to drink water....!!!!');

// const drink = age2 >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age2 >= 18) {
//   drink2 = 'wiine';
// } else {
//   drink2 = 'wateer';
// }
// console.log(drink2);

// console.log(`I like to drinkkkk ${age2 >= 18 ? 'wine' : 'Water'}`);
