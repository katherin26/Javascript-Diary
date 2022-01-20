//NOTE:
//NOTE: Calculate the average using for loop.

let arr = [1, 2, 3, 4, 5];

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(arr)); //3

//NOTE: Calculate the average using reduce.

function calcAverage2(arr) {
  let sum = arr.reduce((el, acc) => el + acc);

  return sum / arr.length;
}

console.log(calcAverage2(arr)); //3

//NOTE: Calculate the average using for of.

function calcAverage3(arr) {
  let sum = 0;
  for (const values of arr) {
    sum += values;
  }
  return sum / arr.length;
}

console.log(calcAverage3(arr)); //3

//NOTE: Calculate the average using for in.

function calcAverage4(arr) {
  let sum = 0;
  for (const property in arr) {
    sum += arr[property];
  }
  return sum / arr.length;
}

console.log(calcAverage4(arr)); //3

//NOTE: Calculate the average using for Each.

function calcAverage5(arr) {
  let sum = 0;
  arr.forEach(el => {
    sum += el;
  });
  return sum / arr.length;
}

console.log(calcAverage5(arr));

//NOTE:  Calculate the average using map().

function calcAverage6(arr) {
  let sum = 0;
  arr.map(el => {
    sum += el;
  });
  return sum / arr.length;
}

console.log(calcAverage6(arr)); //3

//NOTE: EXERCISE GET THE LONGEST NAME USING A FUNCTION AND FOR OF .

let pets = ['lolaaaa', 'lelee', 'liliii'];

function getLongestName(names) {
  let getLongestNameIndex;

  let maxNameLength = 0;
  for (let [index, name] of names.entries()) {
    if (name.length > maxNameLength) {
      longestNameIndex = index;
      maxNameLength = name.length;
    }
  }
  return names[longestNameIndex];
}

console.log(getLongestName(pets)); //lolaaaa

/*NOTE: Write a function that received 4 arguments and those arguments should be the data below. Inside the function print a message using the firstName and LastName. */

let movies = ['Alien', 'Matrix', 'Hitch'];
let hobby = 'Running';
let car = {
  name: 'Lambo',
};
let firstName = 'Ana';
let lastName = 'Gun';

const getNewMovieDeal = (name, lastName, hobby, car) => {
  console.log(
    `${name} ${lastName} has a hobby and is ${hobby} and also has a ${car}`
  );
};

getNewMovieDeal(firstName, lastName, hobby, car.name);

//NOTE: For loop Function

let forLoopFunction = num => {
  num++;
  console.log(num);
  if (num < 5) {
    forLoopFunction(num);
  }
};

forLoopFunction(0); //1 2 3 4 5

//NOTE: The functions can be passed as arguments to other function.

let sum = (n1, n2) => n1 + n2;
let multiply = (n1, n2) => n1 * n2;

function calcSumAndMultiply(num1, num2, sumFn, multFn) {
  let sum = sumFn(num1, num2);
  let multiply = multFn(num1, num2);

  return { sum, multiply };
}

let result = calcSumAndMultiply(5, 5, sum, multiply);
console.log(`Sum : ${result.sum}, Multiply : ${result.multiply}`);

//NOTE: FUNCTIONS.

/*All functions work the same, they receive an input(s) and produce an output.
n1 and n2 represent the parameters(inputs) this function expects when you invoket it.
The parameters can have any name, choose a name that has meaning based on that the function is doing since
we are doing a math operation it is reasonable to call then num1 and num2. 
*/

/*LOGIC 
Process the inputs and generate an output result represents the output of this function this is what the
function will return.
Don't forget the return if you don't specify it, it will return undefined by default.
*/

let input = 10;
let input2 = 7;

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

/*To invoke a function just use its name parenthesis and include the arguments it expects 
(arg1,arg2). Let's invoke it.
Call it with literal values.
*/

console.log(multiply(10, 9)); //90

//Call it using variables that hold the numbers.
console.log(multiply(input, input2)); //70

/*You can pass the invokation to a console.log to see, what a function returns just print the returned
value. What Javascript does is that it first executes the function, gets the returned values and passes
it to the console.log function, which prints it on the screen.
*/
console.log(multiply(2, 2)); //4

//Use template literals to concatenate a text with the returned value.

console.log(` 5 x 5 = ${multiply(5, 5)}`); // 5 x 5 = 25

//You can also use the old concatenation a method.
console.log(` 5 x 5 = ` + multiply(5, 5)); // 5 x 5 = 25

//NOTE: Create a function and print Hello...
function sayHello() {
  return `Hello...`;
}

console.log(sayHello()); //Hello...

//NOTE: Create a function called calcSum and return a sum a + b.
function calcSum(a, b) {
  return a + b;
}

console.log(calcSum(1, 2)); //3

//NOTE: Iterate over the array an print the elements.

let months = ['January', 'February', 'March'];

months.forEach(el => console.log(el)); //January February March

//NOTE: Iterate over the array of days an print each element.

let days = ['mon', 'thus', 'wed'];

for (let i = 0; i < days.length; i++) {
  console.log(days[i]);
}

//NOTE: Iterate over the array of colors using For In and print the values.

let colors = ['pink', 'Yellow', 'Black'];

for (const value in colors) {
  console.log(colors[value]);
} // pink Yellow Black

//Iterate over the array of colors using For Of and print the values.

for (const value of colors) {
  console.log(value);
} // pink Yellow Black
