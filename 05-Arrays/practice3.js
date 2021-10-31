/*NOTE: COMBINING AND SLICING ARRAYS */

const animals = ['Dog', 'Cat', 'Bird', 'Guinea Pig'];

const animals2 = ['Bunny', 'Butterfly', 'Pig', 'Snake'];

//Concat method

const combined = animals.concat(animals2);
console.log(combined); //['Dog',   'Cat','Bird',  'Guinea Pig','Bunny', 'Butterfly','Pig',   'Snake'];

/*Slice method
We have 2 ways :
start : number
end : number
*/

//slice(2) prints all elements from position 2 .
const slice = combined.slice(2);
console.log(slice); //[ 'Bird', 'Guinea Pig', 'Bunny', 'Butterfly', 'Pig', 'Snake' ]

//slice(2,4) take a piece from position 2 to 4
const slice2 = combined.slice(2, 4);
console.log(slice2); //[ 'Bird', 'Guinea Pig' ]

/*slice() clone the array
In consideration: If you are dealing with primitive data,
these primitives will be copied to a target array but if you have objects 
they are not copied they are referenced.*/

const clone = combined.slice();
console.log(clone); //['Dog',   'Cat','Bird',  'Guinea Pig','Bunny', 'Butterfly','Pig',   'Snake']

//THE SPREAD OPERATOR
//You can add a element inside the array and between the spread operators for example 'a'.
const combined2 = [...animals, 'a', ...animals2];
console.log(combined2); //['Dog',       'Cat','Bird',      'Guinea Pig','a',         'Bunny','Butterfly', 'Pig','Snake']

//Clone with The spread operator
const copy = [...combined2];
console.log(copy);

//NOTE: REMOVING ELEMENTS / EMPTYING AN ARRAY

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//Beginning (shift());

const first = numbers.shift();
console.log(first); //10

//Middle (splice());

const mid = numbers.splice(2, 2);
console.log(mid);

//End (pop.());

const end = numbers.pop();
console.log(end); //100

//EMPTYNG AN ARRAY = REMOVE ALL ELEMENTS.

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*Solution 1:
The problem is that if there is another variable 
referencing the same array, it's not counted as empty 
but is still stored in memory. 
*/

numbers2 = [];

/*Solution 2: 
The array looks empty and we don't have problemas or conflict 
with other variables. The array is still empty.
*/

numbers2.length = 0;

//Solution 3:

numbers2.splice(0, numbers2.length);

/*Solution 4:
Is not a good solution if the array is too long*/

while (numbers2.length > 0) numbers2.pop();
console.log(numbers2);

/*NOTE: ITERATING AN ARRAY AND JOINING IT */

const animals3 = ['Dog', 'Cat', 'Bird', 'Guinea Pig'];
const animals4 = ['Bunny', 'Butterfly', 'Pig', 'Snake'];

//FOR OF

for (let pets of animals) console.log(pets);

//FOR EACH

animals2.forEach(function (pets, index) {
  console.log(index, pets);
});

//JOINING ARRAYS

const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const joined = numbers.join(',');
console.log(joined);

//USING SPLIT WITH STRING.

const message = 'This is my first message';
const parts = message.split(''); //This returns an array.
console.log(parts);

const combined3 = parts.join('-');
console.log(combined3);

//NOTE: CHANGE THE ORDER OF THE ELEMENTS

const numbers = [10, 30, 50, 20, 40, 90];

numbers.sort();
console.log(numbers); //[ 10, 20, 30, 40, 50, 90 ]

//NOTE: REVERSE THE ARRAY

numbers.reverse();
console.log(numbers); //[ 90, 50, 40, 30, 20, 10 ]

//NOTE: SORT AN OBJECT USING A FUNCTION.

const subjects = [
  {
    name: 'Social',
    grade: '8',
  },
  {
    name: 'Arimetica',
    grade: '4',
  },
];

subjects.sort(function (a, b) {
  const name1 = a.name.toLowerCase();
  const name2 = b.name.toLowerCase();

  if (name1 < name2) return -1;
  if (name1 > name2) return 1;
  return 0;
});

console.log(subjects);

//OTHER EXAMPLE

const fruits = [
  { name: 'Pears', type: 1 },
  { name: 'Apple', type: 2 },
];

fruits.sort(function (a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA > nameB) return -1;
  if (nameA < nameB) return 1;
  return 0;
});

console.log(fruits);

//NOTE: Check in the array if every value is a positive number.

//Using Every: This method accepts (value,index,array[]), also you can
//call a function.

const arrNumbers = [10, 11, 12, -13, 14, 15, 16, 17, 18, 19, 20];

const allPositive = arrNumbers.every(function (value) {
  return value >= 0;
});

console.log(allPositive); //false

/*Using Some: This method checks if the first element and if is the same, 
returns true and does not continue iterating over the rest.*/

const atLeastOnePositive = arrNumbers.some(function (value) {
  return value >= 0;
});

console.log(atLeastOnePositive); //true

/*Filtering an array: if is true this return a new array.*/

const filtered = arrNumbers.filter(function (value) {
  return value >= 0;
});

console.log(filtered);

//Filter with arrow function.

const filtered2 = arrNumbers.filter(n => n >= 0);
console.log(filtered2);

//NOTE: MAPPING AN ARRAY (FILTER METHOD + MAP + JOIN )

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13];

const result = numbers
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);

console.log(result); //[ 2, 3, 4,  5, 6,7, 8, 9, 10]

//NOTE: REDUCING AN ARRAY

const arr = [10, -20, 30, -40, 50, -60, 70, 80, -90, 100];

//With For Loop

let sum = 0;
for (let n of arr) sum += n;

console.log(sum); //130

//With Reduce

const sum = arr.reduce((acc, curVal) => acc + curVal);

console.log(sum);

/*What is happening inside the reduce?? =

a = 10, c = -20 => a = -10
a = -10 c = 30 => a = 20
etc ...
at the end the result is 130.
*/

/*NOTE: Create a function ArrayFromRange with two paremeters (min,max)
This function needs to create an array with the min numbers to max numbers.
for example (-4, 10)
*/

function ArrayFromRange(min, max) {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

const numbers = ArrayFromRange(-4, 10);
console.log(numbers); //[-4, -3, -2, -1, 0, 1,2,  3,  4,  5, 6, 7,8,  9, 10]

//NOTE: Find an element inside an array using a For Loop.
const numb = [1, 2, 3, 4, 6, 6, 7, 8, 9];

function includes(arr, searchElement) {
  for (let element of arr) if (element === searchElement) return true;
  return false;
}

console.log(includes(numb, -1)); //false

//NOTE: Except Exercise.

const numbers = [10, 20, 3, 0, 50, 44, 55, 66, 22, 0, 1, 7];

function except(arr, excluded) {
  const output = [];

  for (let element of arr)
    if (!excluded.includes(element)) output.push(element);

  return output;
}

const output = except(numbers, [1]);
console.log(output);
