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
