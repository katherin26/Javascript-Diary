//NOTE: Iterate over the array of objects and change the patient name to Upercase.

let patients = [
  {
    name: 'John',
    temp: 38,
  },
  {
    name: 'Eva',
    temp: 39,
  },
  {
    name: 'Ocelot',
    temp: 40,
  },
  {
    name: 'Snake',
    temp: 20,
  },
];

function toUpperCase(arr) {
  let newObj = arr.map(function (el) {
    let clone = { ...el };
    console.log(clone);
    clone.name = clone.name.toUpperCase();
    return clone;
  });
  return newObj;
}

console.log(toUpperCase(patients));
/*{ name: 'John', temp: 38 }
{ name: 'Eva', temp: 39 }
{ name: 'Ocelot', temp: 40 }
{ name: 'Snake', temp: 20 }
[
  { name: 'JOHN', temp: 38 },
  { name: 'EVA', temp: 39 },
  { name: 'OCELOT', temp: 40 },
  { name: 'SNAKE', temp: 20 }
] */

//NOTE: Using map and toUpperCase() change the name of the patients.

let patients = ['kkk', 'pppp', 'sss'];

const toUpperCase = patients.map(name => name.toUpperCase());
console.log(toUpperCase); //[ 'KKK', 'PPPP', 'SSS' ]

//NOTE: Convert to upperCase and array of objects.

function convertToUpperCase(arr) {
  let newObj = arr.map(function (pt) {
    pt.name = pt.name.toUpperCase();
    return pt;
  });
  return newObj;
}

console.log(convertToUpperCase(patients2));
//[ { name: 'KATHE', temp: 38 } ]*/

//NOTE: USING FOR IN ITERATE OVER THE ARRAY AN PRINT THE KEYS AND THE VALUES.

//Exercise 1.

let colors = ['Yellow', 'Red', 'Green'];
for (let value in colors) {
  console.log(colors[value]);
}

/*
yellow 
red 
green*/

//Exercise 2.

let object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`I am key = ${property}`);
  console.log(`I am value = ${object[property]}`);
}

/*
I am Property = a
I am Object Property = 1
I am Property = b
I am Object Property = 2
I am Property = c
I am Object Property = 3
 */

//NOTE: If the numbers are % of two return the value into a new array.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenNumbers = nums.filter(function (num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(evenNumbers(nums)); //[ 2, 4, 6, 8 ]

//NOTE:Get the sum of two arrays , actually the sum of all their elements.

let arr1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

let firstSum = 0; //276
let secondSum = 0; //351

for (let i = 0; i < arr1.length; i++) {
  firstSum = firstSum + arr1[i];
}
for (let j = 0; j < arr2.length; j++) {
  secondSum = secondSum + arr2[j];
}

console.log(firstSum); //276
console.log(secondSum); //351

function calcSum(num1, num2) {
  return num1 + num2;
}

console.log(calcSum(firstSum, secondSum)); //627

//NOTE: A FOR LOOP INSIDE A FOR LOOP.

const numbs = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

function numb(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j]);
    }
  }
  return newArr.sort((a, b) => a - b);
}

console.log(numb(numbs));

//NOTE: ARRAY FLAT().

let arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

function numb1(arr) {
  let newArr = arr.flat();
  return newArr;
}

console.log(numb1(arr));

//NOTE: Using for loop for iterate over the array.

let furniture = ['Table', 'Table2', 'Table3', 'Table4', 'Table5'];

for (let i = 0; i < furniture.length; i++) {
  console.log(furniture[i]);
} //Table Table2 Table3 Table4 Table5
