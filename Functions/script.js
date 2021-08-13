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

//TITTLE:----------------------------FUNCTIONS RETURNING FUNCTIONS-----------------------------------//

//NOTE: closures = mechanism that's part of JS
//NOTE: Our first function greet returned a new function that we stored into greeterHey variable
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Pepe'); //Hey Pepe
greeterHey('Steven'); //Hey Steven
greet('Hello')('Tete'); //Hello Tete

//NOTE:ARROW FUNCTION

const greet2 = greeting => name2 => console.log(`${greeting} ${name2}`);

greet2('Hi')('Toto'); //Hi Toto

//TITTLE:--------------------------THE CALL AND APPLY METHODS--------------------------------//

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book:function() {}
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline}
    flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Pepesito Smech');
lufthansa.book(635, 'Kouru kio');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//NOTE: DOES NOT WORK
//Book (23,'Sarah Williams);

//NOTE: Call() Method.
book.call(eurowings, 23, 'Sarah Gorg'); //Sarah Gorg booked a seat on Eurowings flight EW23
book.call(lufthansa, 239, 'Mary Cooper'); //Mary Cooper booked a seat on Lufthansa flight LH239

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper Sister'); //Mary Cooper Sister booked a seat on Swiss Air Lines flight LX583

//NOTE: Apply() Method ==> Old way
const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData); //George Cooper booked a seat on Swiss Air Lines flight LX583

//With Call() and Spread Operator
book.call(swiss, ...flightData);

//TITTLE:-------------------------------BIND METHOD------------------------------------//
/*NOTE: Allows us to manually set this keyword for any function call , The difference is that 
bind does not immediately call the function , instead it return a new function where this keyword 
is bound, So it's set to whatever value we passenger into bind*/

//Bind Method
//book.call(eurowings, 23, 'Sarah Gorg');

//this will not call the book function, insted it will return a new function.
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Washosky'); //Steven Washosky booked a seat on Eurowing flight EW23
bookLH(30, 'Mon Lafer'); //Mon Lafer booked a seat on Lufthansa flight LH30
bookLX(45, 'Teodoro Lop'); //Teodoro Lop booked a seat on Swiss Air Lines flight LX45

//NOTE: Let's create a function for one specific airline and specific flight number.

const bookEW23 = book.bind(eurowings, 23); //The number was preset in the bind method.
bookEW23('Kioro Mess'); //Kioro Mess booked a seat on Eurowings flight EW23
bookEW23('Milk Mss'); //Milk Mss booked a seat on Eurowings flight EW23

//NOTE: With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
//{airline: "Lufthansa", iataCode: "LH", bookings: Array(4), planes: 300, book: ƒ, …}

//NOTE: Partial Application = Preset Parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); //220

//null because we don't pass this keyword.
const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23

console.log(addVAT(100)); //123
console.log(addVAT(23)); //28.29

//NOTE: FUNCTION CALLING A FUNCTION

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

//TITTLE:-------------------------------CHALLENGE------------------------------------//
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
1.2. Based on the input number, update the answers array. For example, 
if the option is 3, increase the value AT POSITION 3 of the array by 1. 
Make sure to check if the input is a number and if the number makes sense 
(e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method 
takes a string as an input (called 'type'), which can be either 'string' or 'array'.
If type is 'array', simply display the results array as it is, using console.log().
This should be the default option. If type is 'string', display a string like
 "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data.
 Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! 
 So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]


*/

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0:Javascript', '1:Python', '2:Rust', '3:C++'],
  //This generates [0,0,0,0]
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join('\n')} \n(Write option number)`
      )
    );
    console.log(this.answers);

    //Register the answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

//poll.registerNewAnswer();
poll.displayResults(poll.registerNewAnswer());
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//BONUS

poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); //Poll results are 5, 2, 3
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string'); //Poll results are 1, 5, 3, 9, 6, 1

//TITTLE: ------------------IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)-----------------------------//

/*Sometimes we need a function that is only executed once and then never again , so basically a function
that disappears right after it's called once,   */

//NOTE: DATA ENCAPSULATION AND DATA PRIVACY
/*All data defined inside a scope is private, this data is encapsulated inside of this function scope
So many times we actually need to protect our variables from being accidentally overwritten by some other
parts of the program or even with external scripts or libraries,keep in mind that it's important to hide
variables and that scopes are a good tool for doing this.*/

//NOTE: normal function
const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

//NOTE: IIFE
//NOTE: FUNCTION EXPRESSION = Without assigning it to any variable.

(function () {
  console.log(
    'This will never run again'
  ); /*if we try to run this , we will get an error for now!!
  However , we can still trick Javascript into thinking that this is just an expression, and we do 
  that by simply wrapping all of this into parentheses*/
})(); //() = We can inmidiately call it and so with this , we will get now this text here locked to the console.

//NOTE: ARROW FUNCTION

(() => console.log('This will ALSO never run again'))(); //wrapping all of this into parentheses

//NOTE: BLOCK SCOPE ES6 = let and const create their own scope inside a  block .

{
  //const isPrivate = 23;
  var notPrivate = 46;
}

//console.log(isPrivate); //We cannot acces this variable
console.log(notPrivate); // Is accecible //46

//TITTLE: ---------------------------------CLOSURES-------------------------------------//
/*
closure is not a feature that we explicitly use , we don't create closures manually like we create
a new array or a new function ,So a closure simply happens automatically in certain situations ,We jus need
to recognize those situations .
*/

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); //1 passengers
booker(); //2 passengers
booker(); //3 passengers

/*booker() , was in fact able to increment the passengerCount
We can say that a closure makes a function remenber all the variables that existed
at the functions birthplace essentially.*/

/*NOTE: Any function always has access to the variable enviroment of the execution
context in which the function was created. In the case of Booker , this function was created
It was born in the execution context of secure booking which was popped on the stack previously,
So therefore the Booker function will get access to this variable enviroment which contains the
passengerCount Variable And this is how the function will be able to read and manipulate the passengerCount
variable and so it's this connection that we call closure.*/
