//NOTE: Using sort() method.

/*Explanation : The while loop through a block of code as long as a specified condition is true.
In this case the condition is arr.length.
smallestIndex start in null, but when we execute the for loop we have the if statement (if smallestIndex is equal to null) asign the i to smallestIndex ,  else if (the arr in position [i] minor to arr[smallestIndex] asign i to smallestIndex  ), then we push the arr[smallestIndex] and in the next line we remove with splice that value from the existing array.

 */

function sortArr(arr) {
  let arrSorted = [];

  while (arr.length) {
    let smallestIndex = null;
    for (let i = 0; i < arr.length; i++) {
      if (smallestIndex === null) {
        //inicializar
        smallestIndex = i;
      } else if (arr[i] < arr[smallestIndex]) {
        smallestIndex = i;
      }
    }
    arrSorted.push(arr[smallestIndex]);
    //Remueve uno a partir de ese index.
    arr.splice(smallestIndex, 1);
  }
  return arrSorted;
}

console.log(sortArr([3, 8, 7, 6, 5, -4, 3, 2, 1]));

console.log(sortArr([30, 80, 7, 15, 5, -1, 3, 2, 1]));

console.log(sortArr([30, 8, 71, 60, 50, -2, 3, 2, 1]));

/*NOTE: Declare and initialize an array called Planets with 5 string values and print the values and the index. */

let planets = ['Mercury', 'venus', 'Mars', 'Uranus', 'Saturn'];

function printValue(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

printValue(planets);

/*NOTE: Loop over the 2 arrays and if there are any common courses print them. */

let studentCourse1 = ['Math', 'English', 'Programming', 'Spanish'];
let studentCourse2 = ['Geography', 'Spanish', 'Programming'];

/*First : We iterate over the studentCourse1 and used the indexOf() method and this one return the first index at which a given element can be found in the array , or -1 if it is not present. , the second parameter is the start index in this case 0. That's why we used studentCourse[i],[0] 
Then using if statement we write if the result is diferent from -1 print the studentCourse1[i];
*/

for (let i = 0; i < studentCourse1.length; i++) {
  let result = studentCourse2.indexOf(studentCourse1[i], 0);

  if (result !== -1) console.log(studentCourse1[i]);
}

/*NOTE: Create a function that receives an array of numbers and returns an array containing only the positive numbers. */

let numbers = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

/*We cretate a function with the name positiveNum and we pass arr like parameter, Inside the function, we create an empty let variable called positives and this variable is gonna store the final result from the loop.
The For Loop iterates over the array and with an if statement compares if the current index values is equal or bigger than 0 , if is true push the value to positives.
 */
function positiveNum(arr) {
  let positives = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positives.push(arr[i]);
    }
  }
  return positives;
}

console.log(positiveNum(numbers)); //[ 10, 12, 5, 90, 0, 1 ]

//NOTE: Using filter method , Filter the numbers bigger than 0.

let unfilteredArr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

const filteredArr = unfilteredArr.filter(el => el >= 0);
console.log(filteredArr); //[ 10, 12, 5, 90, 0, 1 ]

//NOTE: Create a function called findMax and this function it should return the maximun value inside an array.

let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let maxResult = findMax(arr);
console.log(`Max: ${maxResult}`); //Max: 90

//  NOTE: Create a function called calcAvg and sum all the numbers inside an array and inside that function used the total sum and return the average of each listArr.

let listArr1 = [1, 2, 3, 4, 5, 6, 7];
let listArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let listArr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14];

function calcAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return Math.ceil(sum / arr.length);
}

let result1 = calcAvg(listArr1);
let result2 = calcAvg(listArr2);
let result3 = calcAvg(listArr3);

console.log(`The result is "${result1}"`); //4
console.log(`The result is "${result2}"`); //6
console.log(`The result is "${result3}"`); //7

//NOTE:  CLONE AN ARRAY USING A FOR LOOP.
let listArr1 = [1, 2, 3, 4, 5, 6];
let listArr2 = [10, 20, 30, 40, 50, 60];
let listArr3 = [100, 200, 300, 400, 500, 600];

function cloneArr(arr) {
  let clone = [];
  for (let i = 0; i < arr.length; i++) {
    clone.push(arr[i]);
  }
  return clone;
}

let clone1 = cloneArr(listArr1);
let clone2 = cloneArr(listArr2);
let clone3 = cloneArr(listArr3);

console.log(clone1);
console.log(clone2);
console.log(clone3);

//Now this type of clone is a exact clone and you can modified the array clone1 using push or pop but the original remain intact.

clone1.push('name');
console.log(clone1);
//[1,2,3,4,5,6,'name']

//The original remain intact.
console.log(listArr1); //[ 1, 2, 3, 4, 5, 6 ]

//NOTE:COPY BY VALUE IN ARRAY AND OBJECT EXTRACTING EACH VALUE INTO A VARIABLE WITH ASSIGNMENT

// ARRAY WITH AN OBJECT INSIDE.

let arr1 = [1, 2, 3, { name: 'original name' }, ['a', 'b', 'c']];

let copy1 = [arr1[0], arr1[1], arr1[2], arr1[3], arr1[4]];

copy1[0]++; //2
copy1[1]++; //3
copy1[2] += 10; //13
copy1[3].name = 'Isa'; //Isa
copy1[4].push('d'); //'d'

console.log(`----Original----`);
console.log(arr1);
//The only one by reference is name : Isa

/*[ 1, 2, 3, { name: 'Isa' }, [ 'a', 'b', 'c', 'd' ] ]*/

console.log(`----Copy----`);
console.log(copy1);
//The only one by reference is name : Isa

/*[ 2, 3, 13, { name: 'Isa' }, [ 'a', 'b', 'c', 'd' ] ] */

//NOTE: EXERCISE USING CONCAT AND SLICE.

const animals = ['Dog', 'Cat', 'Bird', 'Guinea Pig'];

const animals2 = ['Bunny', 'Butterfly', 'Pig', 'Snake'];

//Concat 2 arrays.

const combined = animals.concat(animals2);

console.log(combined);

/*[
  'Dog',   'Cat',
  'Bird',  'Guinea Pig',
  'Bunny', 'Butterfly',
  'Pig',   'Snake'
] */

//A copy with slice.

const copy = combined.slice();
console.log(copy);
/*[
  'Dog',   'Cat',
  'Bird',  'Guinea Pig',
  'Bunny', 'Butterfly',
  'Pig',   'Snake'
] */

//A slice of the array.

const slice = copy.slice(2, 4);
console.log(slice);

/*[
  'Bird',  'Guinea Pig']
] */

/*NOTE: Using sort() */

const fruits = [
  { name: 'Apple0', type: 0 },
  { name: 'Apple1', type: 1 },
  { name: 'Apple2', type: 2 },
  { name: 'Apple3', type: 3 },
];

fruits.sort(function (a, b) {
  const nameA = a.name.toLocaleLowerCase();
  const nameB = b.name.toLocaleLowerCase();

  if (nameA > nameB) return -1;
  if (nameA < nameB) return 1;
  return 0;
});

console.log(fruits);

/*[
  { name: 'Apple3', type: 3 },
  { name: 'Apple2', type: 2 },
  { name: 'Apple1', type: 1 },
  { name: 'Apple0', type: 0 }
] */

//NOTE: Using filter().

const arrNumbers = [10, 11, 12, -13, 14, 15, 16, 17, 18, 19, 20];

const filtered = arrNumbers.filter(n => n >= 0);
console.log(filtered);

//NOTE: Using map and filter iterate over the array and log only the number > 5 .

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13];

const result = numbers.filter(n => n >= 0);

console.log(result); /*[1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]*/

const resultmap = result.map(n => ({ value: n }));

console.log(resultmap);

/*[
  { value: 1 }, { value: 2 },
  { value: 3 }, { value: 4 },
  { value: 5 }, { value: 6 },
  { value: 7 }, { value: 8 },
  { value: 9 }, { value: 10 }
] */

const filter2 = resultmap.filter(obj => obj.value > 5);
console.log(filter2);

/*[
  { value: 6 },
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: 10 }
] */

const map2 = filter2.map(obj => obj.value);
console.log(map2); //[ 6, 7, 8, 9, 10 ]

//Chaining map and filter.

const chainingResult = numbers
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 5)
  .map(obj => obj.value);

console.log(chainingResult); //[ 6, 7, 8, 9, 10 ]

//NOTE: USING REDUCE METHOD.

const arrNum = [10, -20, 30, -40, 50, -60, 70, 80, -90, 100];

const sum = arrNum.reduce((acc, curVal) => acc + curVal);

console.log(sum); //130

//NOTE:   Differents ways to sum an array.

const arrNum = [10, -20, 30, -40, 50, -60, 70, 80, -90, 100];

const sum = arrNum.reduce((acc, curVal) => acc + curVal);

console.log(sum); //130

//With a For Loop.

let sumFor = 0;
for (let i = 0; i < arrNum.length; i++) {
  sumFor = sumFor + arrNum[i];
}
console.log(sumFor); //130

//With a function call calcSum.
function calcSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(calcSum(arrNum)); //130

//FOR OF LOOP.

let sumForLoop = 0;

for (const value of arrNum) {
  sumForLoop = sumForLoop + value;
} //130

//FOR IN LOOP

let sumForInLoop = 0;

for (const property in arrNum) {
  sumForInLoop = sumForInLoop + arrNum[property];
} //130

//NOTE: Check if the number 10,-1 and 2 are included in an array called numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

//Solution using a function and a for of loop.
function includes(arr, searchElement) {
  for (let element of arr)
    if (element === searchElement)
      return `The number you are looking for is ${element} and exist in the array.`;
  return false;
}

console.log(includes(numbers, 10));
//The number you are looking for is 10 and exist in the array.
console.log(includes(numbers, 0)); //false

//Solution using includes method.
const result = numbers.includes(10);
console.log(result); //true

//Solution using includes inside a function.
function includes2(arr, number) {
  return arr.includes(number);
}

console.log(includes2(numbers, 2)); //true

//NOTE: Using includes methods create a new array without the number 1, Create a function called except.

const numbers = [10, 20, 3, 0, 50, 44, 55, 66, 22, 0, 1, 7];

function except(arr, excluded) {
  const result = [];

  for (let element of arr)
    if (!excluded.includes(element)) result.push(element);

  return result;
}

const result = except(numbers, [1]);
console.log(result);

/*[10, 20,  3,  0, 50, 44, 55, 66, 22,  0, 7*/

//NOTE: Find the ocurrences inside an array.

const numbers = [1, 2, 3, 4, 5, 6, 1, 1, 1];

function occurrences(arr, el) {
  return arr.reduce((acc, curVal) => {
    const occurrence = curVal === el ? 1 : 0;
    console.log(`Total : ${acc}, Current Value : ${curVal}, Element : ${el}`);

    return acc + occurrence;
  }, 0);
}

const total = occurrences(numbers, 1);
console.log(total);

/*
Total : 0, Current Value : 1, Element : 1
Total : 1, Current Value : 2, Element : 1
Total : 1, Current Value : 3, Element : 1
Total : 1, Current Value : 4, Element : 1
Total : 1, Current Value : 5, Element : 1
Total : 1, Current Value : 6, Element : 1
Total : 1, Current Value : 1, Element : 1

 */

//NOTE: Loop over the array of arrays and with destructuring print the number with the vocal a , b , c.

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < lines.length; i++) {
  const [a, b, c] = lines[i];
  console.log(`a : ${a}, b : ${b}, c : ${c}`);

  console.log(lines[i]);
}

//NOTE: USING MAP ITERATO OVER THE ARRAY OF OBJECTS.

const pets = [
  { name: 'Ada', age: 4 },
  { name: 'Isaac', age: 7 },
  { name: 'Jill', age: 3 },
];

const petMessages = pets.map(pet => {
  return `${pet.name} is ${pet.age} years old.`;
});

console.log(petMessages);
/*[
  'Ada is 4 years old.',
  'Isaac is 7 years old.',
  'Jill is 3 years old.'
] */

//NOTE: Shallow copy can change the value in the original array pf objects.

const isaac = { ...pets[1] };
isaac.age = 8;

console.log(isaac);

//NOTE: Using slice print only Ada and Jill.
const newPets = [...pets.slice(0, 1), ...pets.slice(2)];

console.log(newPets);
/*[ { name: 'Ada', age: 4 }, { name: 'Jill', age: 3 } ] */

//NOTE: Using slice method.

const numbers = [1, 2, 3, 4, 5, 6, 7];

const firstThree = numbers.slice(0, 3);
console.log(firstThree); //[ 1, 2, 3 ]

const lastFour = numbers.slice(3);
console.log(lastFour); //[ 4, 5, 6, 7 ]
