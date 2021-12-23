//NOTE: LET AND VAR EXERCISE

/*Cannot access 'variable0 before initialization'.

console.log(variable0)
let variable0 = 'a';

*/

/*variable1 is not defined because is out of the scope.

{let variable1 = 'b'};
console.log(variable1)

*/

//The result is = c.
{
  let variable2 = 'c';
  console.log(variable2);
}

/*Implementing Hoisting.
The variable2 rises but the value of the variable remains in the line 29 ; 
therefore when the console.log is printed the result would be undefined.
*/

console.log(variable2);
var variable2 = 'd'; //undefined

/*SCOPE INSIDE A FUNCTION: 
What would happen if you replace let with var and use the console.log that 
it on line 44, the changes would come out normally it would mean that var is 
accessible from outside. 

NOW: console.log(i) if we print this after the {} for loop , an error would 
appear since i is only declared in the previous block.
*/

function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //console.log(i)
}

start(); //0 1 2 3 4

/*NOTE: Using Template Literals(Template Strings).
What can store in a variable = objects, is all the information like booleans,
numbers, string, objects.
*/

let name = 'Teo';
let lastname = 'doro';

console.log(`Name is ${name} and lastname is ${lastname}`); //name is Teo and lastname is doro.

/*NOTE: Using UpperCase() */

let happy = 'hey hey hey';
console.log(happy.toUpperCase()); //HEY HEY HEY

/*NOTE: ACCESS TO AN OBJECT. */

let names = ['Pedro', 'Ada', 'Jill', 'Sasha', 'Nano'];

console.log(names);
//[ 'Pedro', 'Ada', 'Jill', 'Sasha', 'Nano' ]
console.log(names[0]); //Pedro
console.log(names[1]); //Ada
console.log(names[2]); //Jill
console.log(names[3]); //Sasha
console.log(names[4]); //Nano

//NOTE:
let pet = {
  name: 'Lola',
  age: 5,
  weight: 7,
};

console.log(pet.name); //Lola
console.log(pet.age); //5
console.log(pet.weight); //7

//NOTE:
let petArr = [
  { name: 'Isac', age: 5 },
  { name: 'Poppy', age: 15 },
  { name: 'Julieth', age: 25 },
];

console.log(petArr[0].name); //Isac
console.log(petArr[1].name); //Poppy
console.log(petArr[2].name); //Julieth

/*NOTE: FOR LOOP STATEMENT
A for loop repeats until a specified condition evaluates to false, the Javascript for loop is similar to the Java and C loop.

A for Statement looks as follows: 

for([initialExpression];[conditionExpression];[incrementExpression])STATEMENT
*/

for (let step = 0; step < 5; step++) {
  console.log(`Walking east one step ${step}`);
}

/* Walking east one step 0
Walking east one step 1
Walking east one step 2
Walking east one step 3
Walking east one step 4*/

/*NOTE: DO WHILE STATEMENT
The do while statement repeats until a specified condition evaluates to false.

A do while statement looks as follows :
 */

/*do
statement 
while(condition);
 */

let i = 0;
do {
  i++;
  console.log(i);
} while (i < 5);

//OUTPUT : 1 2 3 4 5

/*NOTE: FOR IN STATEMENT

The for in statement iterates a specified variable over all the enumerable properties of an object.

For each distinc property, Javascript executes the specified statements.

A for in statement looks as follows :

for(variable in object){
  statement
}
 */

let colors = ['Yellow', 'Red', 'Blue'];

for (const property in colors) {
  console.log(colors[property]);
}

//OUTPUT = Yellow Red Blue

/*NOTE: FOR OF STATEMENT
The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

SYNTAX = 

for (variable of iterable) {
  statement
}
 */

let colors = ['Yellow', 'Red', 'Blue'];

for (const values of colors) {
  console.log(values);
}

//OUTPUT = Yellow Red Blue

//NOTE: USING FOR LOOP AND TYPEOF LOG TO THE CONSOLE THE VALUE AND TYPE OF THE ARRAY.

const personArr = [
  'Bambi',
  'Schemedmand',
  2021 - 1993,
  'Teacher',
  ['Michael', 'Peter', 'Steve'],
];

for (let i = 0; i < personArr.length; i++) {
  console.log(personArr[i]);
  /*Bambi 
     Schemedmand
     28
     Teacher
     [...]
    */
  console.log(typeof personArr[i]);
  /*string string number string object */
}

//NOTE: USING FOR LOOP , TYPEOF AND PUSH METHOD.

const jonasArray = [
  'Jonas',
  'Schmedmand',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  types.push(typeof jonasArray[i]);
}

console.log(types);
//[ 'string', 'string', 'number', 'string', 'object' ]

//NOTE: ITERATE WITH A FOR LOOP AND USING A PUSH METHOD LOG TO THE CONSOLE THE NEW VALUE AGES.

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}

console.log(ages); //[30,14,52,1]

//NOTE: CONTINUE AND BREAK.

//ONLY STRING CONTINUE:
const jonasArray = [
  'Jonas',
  'Schmedmand',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== 'string') continue;
  console.log(jonasArray[i], typeof jonasArray[i]);

  /*
  Jonas string
  Schmedmand string
  teacher string
   */
}

//BREAK WITH NUMBER

for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === 'number') break;
  console.log(jonasArray[i], typeof jonasArray[i]);

  /*
 Jonas string
Schmedmand string
   */
}

//BACKWARDS LOOP

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(`BACKWARDS LOOP!`);
  console.log(i, jonasArray[i]);
}

/* BACKWARDS LOOP!
5 [ 'Michael', 'Peter', 'Steven' ]
BACKWARDS LOOP!
4 teacher
BACKWARDS LOOP!
3 34
BACKWARDS LOOP!
2 46
BACKWARDS LOOP!
1 Schmedmand
BACKWARDS LOOP!
0 Jonas*/

//LOOP INSIDE ANOTHER LOOP

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} and ${rep} repetition.`);
  }
}

/*
starting exercise 1
starting exercise 1
Exercise 1 and 1 repetition.
Exercise 1 and 2 repetition.
Exercise 1 and 3 repetition.
Exercise 1 and 4 repetition.
Exercise 1 and 5 repetition.
starting exercise 2
Exercise 2 and 1 repetition.
Exercise 2 and 2 repetition.
Exercise 2 and 3 repetition.
Exercise 2 and 4 repetition.
Exercise 2 and 5 repetition.
starting exercise 3
Exercise 3 and 1 repetition.
Exercise 3 and 2 repetition.
Exercise 3 and 3 repetition.
Exercise 3 and 4 repetition.
Exercise 3 and 5 repetition.*/

//NOTE: LOOP INSIDE ANOTHER LOOP

//WITH A WHILE LOOP: The difference between for and whiles , while is more versatil.

let rep = 1;
while (rep <= 10) {
  console.log(`While lifting weights repetition ${rep}`);
  rep++;
}

/*
While lifting weights repetition 1
While lifting weights repetition 2
While lifting weights repetition 3
While lifting weights repetition 4
While lifting weights repetition 5
While lifting weights repetition 6
While lifting weights repetition 7
While lifting weights repetition 8
While lifting weights repetition 9
While lifting weights repetition 10
10
 */

//NOTE: WHILE AND Math.random() and Math.Trunc().

let dice = Math.trunc(Math.random() * 6) + 1;

console.log(dice);

while (dice !== 6) {
  console.log(`Yoy rolled the ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end..!`);
}

/*1
Yoy rolled the 1
Yoy rolled the 3
Yoy rolled the 3
Yoy rolled the 1
Yoy rolled the 2
Loop is about to end..! */

/*NOTE: Write a function calcTips and set empty variables with the name tips and totals and with a for Loop Iterate over the arrey bills to print the bill, tip and total of the account. */

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcTips(bills) {
  const tip = bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
  return tip;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTips(bills[i]));
  totals.push(calcTips(bills[i] + bills[i]));
  console.log(
    `Your bill is : ${bills[i]} and your tip is ${tips[i]} and the total is : ${totals}`
  );
}

//CALCULATING THE AVERAGE
function calcAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAvg(totals));

//NOTE: PROBLEM
//We work for a company building a smart home thermometer. Out most recent task is this: "Given an array of temperatures of one day , calculate the temperature amplitude.Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    //si el tipo del array es diferente a un numero entonces continua.

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
const amplitudeNew2 = calcTempAmplitudeNew(temperatures);

console.log(amplitudeNew);
console.log(amplitudeNew2);
