'use strict';

//TITTLE: ----------------------DEFAULT PARAMETERS--------------------------//
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
  //price = 199 * 1.2
) {
  //ES5 SOLUTION = using short circuiting //because it was a falsy value 'undefined'
  //numPassengers = numPassengers || 1;
  //price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); //{flightNum: "LH123", numPassengers: 1, price: 199}
createBooking('LH123', 2, 800); //{flightNum: "LH123", numPassengers: 2, price: 800}
createBooking('LH123', 2); //{flightNum: "LH123", numPassengers: 2, price: 398}
createBooking('LH123', 5); //{flightNum: "LH123", numPassengers: 2, price: 995}
createBooking('LH123', undefined, 1000); //{flightNum: "LH123", numPassengers: 1, price: 1000}

//TITTLE: ------------HOW PASSING ARGUMENTS WORKS : VALUE VS REFERENCE--------------//

const flight = 'LH234';
const personObj = {
  name: 'Pepito Perez',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  // passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('check in');
  } else {
    alert('Wrong passport!!!');
  }
};

checkIn(flight, personObj);
console.log(flight);
console.log(personObj);

//IS THE SAME AS DOING...
const flightNum = flight;
const passenger = personObj;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(personObj);
checkIn(flight, personObj);

//TITTLE:------------------------FIRST-CLASS AND HIGHER - ORDER FUNCTIONS---------------------------//

//TITTLE:-----------------------------FIRST-CLASS FUNCTIONS-------------------------------//
//Javascript treats functions as first-class citizens
//This means that functions are simply values
//Functions are just another "Type" of  object

/*
  //NOTE:1)STORE FUNCTIONS IN VARIABLES OR PROPERTIES:
const add = (a,b) => a+b; //function expression
const counter = {
  value: 23,
  inc: function () { //object method
    this.value++;
  },
};*/

/*
  //NOTE:2)PASS FUNCTIONS AS ARGUMENTS TO OTHER FUNCTIONS:
  const greet = () => console.log('Hey User);
  btnClose.addEventListener('click',greet)
*/

//NOTE:3) Return functions FROM functions
//Call methods on functions:

/*counter.inc.bind(someOtherObject); */

//TITTLE: ----------------------HIGHER-ORDER FUNCTIONS--------------------------//
/*
  A function that receives another function as an argument, that returns a new function, or both.
  This is only possibble because of first-class functions.
*/

//NOTE:1) FUNCTION THAT RECEIVES ANOTHER FUNCTION

/*
  const greet = () => console.log('Hey User);
  btnClose.addEventListener('click',greet)
  //AddEventListener (Higher order functions)
  //greet = (Callback function)
*/

//2) FUNCTION THAT RETURN NEW FUNCTION

/*
  function count(){//Higher-order function
    let counter = 0;
    return function(){//Returned function
      counter++;
    };
  }
*/

//TITTLE:-------------------------FUNCTIONS ACCEPTING CALLBACK FUNCTIONS---------------------------//
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWorld = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//HIGHER-ORDER FUNCTION
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`); // aqui se llama la funcion.
  console.log(`Transformed by: ${fn.name}`); //function has name propertie.
};

transformer('Javascript is the best!!!', upperFirstWorld); //Solo estamos pasando el valor de la funcion.

/*
 Original string: Javascript is the best!!!
 Transformed string: JAVASCRIPT is the best!!!
 Transformed by: upperFirstWorld
*/

transformer('JavaScript is the best!!!', oneWord);

/*
Original string: JavaScript is the best!!!
script.js:132 Transformed string: javascriptisthebest!!!
script.js:133 Transformed by: oneWord
*/

//NOTE: RECAP = estamos llamando la funcion transformer
//y dentro de esa funcion estamos pasando el callback function

//NOTE:JS USES CALLBACKS ALL THE TIME =
/* 
1)primera ventaja , dividir la informacion en codigo mas reutilizable e interconectado.
2)abstraction = EN este ejemplo se creo un nivel de abstraccion , ocultamos los detalles
de implementacion de codigo porque realmente no nos importan todos esos detalles y esto 
nos permite pensar en los problemas a un nivel mas alto y abstracto.

*/
const high5 = function () {
  console.log('...Hi');
};

document.body.addEventListener('click', high5); //...Hi
//addEventListener = higher order functions
// high5 = callback function

['Lup', 'Mar', 'Gus'].forEach(high5); //...Hi

//TITTLE:-------------------------BASIC EXAMPLE---------------------------------------------//

//NOTE: Add two numbers and then multiply them by 5

function multiplyBy5(n) {
  console.log('Multiplying Number by 5');
  return n * 5;
}

//NOTE:Synchronous Solution
console.log('--------------');
console.log('SYNC');
console.log('--------------');
function syncSum(n1, n2) {
  console.log('Executing syncSum');
  return n1 + n2;
}
console.log('Invoking syncSum');
const sumResult = syncSum(5, 10);
const multResult = multiplyBy5(sumResult);
console.log('Do another thing 1');
console.log('Do another thing 2');
console.log('Do another thing 3');

//NOTE: Asynchronous Solution
console.log('--------------');
console.log('ASYNC');
console.log('--------------');
function asyncSum(n1, n2, cb) {
  console.log('Executing asyncSum');
  setTimeout(() => cb(n1 + n2), 2000); //2000 milliseconds
}
console.log('Invoking asyncSum');
asyncSum(5, 10, multiplyBy5);
console.log('Do another thing 1');
console.log('Do another thing 2');
console.log('Do another thing 3');