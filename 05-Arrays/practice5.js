//NOTE: ITERATE OVER AN ARRAY OF NAMES.

let names = ['Pepe', 'Giro', 'Lulu'];

//Method 1 = Regular For Loop.

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
} //Pepe Giro Lulu

/*Method 2 : Using For Of Loop.
For of automatically iterates over the values of an array, so you don't need to deal with the key(index).
*/

for (let name of names) {
  console.log(name);
} //Pepe Giro Lulu

/*Method 3 : Using For In Loop
For In automatically iterates over the keys of an array.
*/

for (let index in names) {
  console.log(names[index]);
} //Pepe Giro Lulu

/*Method 4 : Using forEach()
Executes the given function for every element in the array.
*/

names.forEach(function (cur, i) {
  console.log(cur); //Pepe Giro Lulu
  console.log(i); //0 1 2
});

//NOTE: Using map change the name to uppercase.

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
  },
];

function converttoUpperCase(arr) {
  let newObj = arr.map(function (paciente) {
    let objClone = { ...paciente };
    objClone.name = objClone.name.toUpperCase();

    return objClone;
  });
  return newObj;
}
console.log(converttoUpperCase(patients));

/*NOTE: ARRAY FILTERING 
Filtering an array means checking that every element meets a certain condition and the add these elements to other array.
 */

//Array of numbers.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*Get even numbers.
Method 1 : Use for Loop and create a new array to store even numbers.

This block executess for every element in the array.
First check number is even using mod operator.
If num at index i has a mod of 2 equal 0, it meas is an even number.
Then add number at index i to evenNumbers1 array.
*/

let evenNumbersNew = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) evenNumbersNew.push(nums[i]);
}

console.log(evenNumbersNew);

/*NOTE: METHOD 2 
Using Array.prototype.filter().

The given function will be executed for every element in the array, when the function results true the element will be 
added to the result array.
*/

let evenNumbers2 = nums.filter(function (num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(evenNumbers2);

/*NOTE: Bonus, using shorthand syntax with arrow function, it does exactly the same. */

let evenNumber3 = nums.filter(n => n % 2 === 0);
console.log(evenNumber3);

/*NOTE: ARRAY MAPPING 
Mapping an array means processing every element using a mapping function, the return value of the mapping function will
be added to a result array.
An array of pet objects.
*/

//An array of pet objects

let pets = [
  { name: 'Deda', age: 2 },
  { name: 'Bisac', age: 2 },
  { name: 'Julieth', age: 2 },
];

/*First : Create a new array with the same pets but with their names in uppercase.
Clone object to avoid modifying the original.
Convert name to uppercase and reassign it to the name property.
Once the processing is finished, add the processed element to the result array.
*/

//Method 1 : Using for of Loop.

let petsWithUpperCaseName = [];
for (let pet of pets) {
  let petClone = { ...pet };
  petClone.name = petClone.name.toUpperCase();
  petsWithUpperCaseName.push(petClone);
}

console.log(petsWithUpperCaseName);

/*Method 2 : Using Array.prototype.map()
Executes the given function for every element in the array, The result of every function call will be added to the result array.
 */

let petsWithUpperCaseName = pets.map(function (pet) {
  let petClone = { ...pet };
  petClone.name = petClone.name.toUpperCase();
  return petClone;
});

console.log(petsWithUpperCaseName);

/*NOTE: Given a two-dimensional array of integers, return the flattened version of the array with all the integers
in the sorted (ascending) order.

Example : 

Given [[3,2,1],[4,6,5],[],[9,7,8]]

Your function should return [1,2,3,4,5,6,7,8,9]
*/

const numbs = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

for (let i = 0; i < numbs.length; i++) {
  numbs[i].sort();
}
console.log(numbs);

/*SOLUTION WITH FOR LOOP*/

function numb(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j]);
    }
  }
  return newArr.sort((a, b) => a - b);
}
console.log(numb([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));

//ARRAY FLAT

function numb1(arr) {
  let newArr = arr.flat();
  return newArr;
}

console.log([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]].flat());

/* NOTE: How many letters exist within the array.*/

let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

console.log(myAlphabet.length);

function myAlphabetLength(arr) {
  console.log(arr.length);
  if (arr.length < 4) {
    console.log(`This arr contains less than 4`);
  } else {
    console.log(`This arr contains more than 4`);
  }
  return;
}

myAlphabetLength(myAlphabet);

/*NOTE: Print the index and the value using a function and a for Loop */

let planet = ['Tierra', 'Marte', 'Jupiter', 'Urano', 'Neptuno', 'pluton'];

function printValue(arr) {
  for (let i = 0; i < planet.length; i++) {
    console.log(`El index ${i} is ${planet[i]}`);
  }
}

printValue(planet);

/*NOTE: Print the index and the value using a function, a for Loop and the typeof */

let arrData = ['name', 29, true, null, undefined];

function printTypeof(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `The index is : ${i}, The value is : ${
        arr[i]
      } and the data Type is ${typeof arr[i]}`
    );
  }
}

printTypeof(arrData);

/*NOTE: Print the value using a forEach(). */

let myArr = [1, 2, 'One', true];

myArr.forEach(el => console.log(el));

/*NOTE: Find the repeated value inside an array. */

let course1 = ['Math', 'English', 'Programming'];
let course2 = ['Geography', 'Spanish', 'Programming'];

for (let i = 0; i < course1.length; i++) {
  if (course1[i] === course2[i]) {
    console.log(`The repeated word is ${course1[i]} `);
  }
}

//Using Includes() method.

let food = ['Noodle', 'Pasta', 'Ice-Cream'];
let food1 = ['Fries', 'Ice-Cream', 'Pizza'];

function includeAword(arr, arr2) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr2[i])) {
      console.log(`The repeated word is : ${arr[i]}`);
    }
  }
}

includeAword(food, food1);

//Using includes in three variables.
let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

for (let i = 0; i < values1.length; i++) {
  if (values2.includes(values1[i])) {
    console.log(`${values[i]}`);
  }
  if (values3.includes(values1[i])) {
    console.log(`${values1[i]}`);
  }
} //Apple

/*Print each value and each letter using forEach() */

let furniture = ['Table', 'Chairs', 'Couch'];

furniture.forEach(el => {
  console.log(`Print ${el}`);
  for (let i = 0; i < el.length; i++) {
    console.log(el[i]);
  }
});

//NOTE: Using Math.random and Math.floor

let arr = ['22', '33', '66', 'Tatte', 'Br'];

let randomVal = arr[Math.floor(arr.length * Math.random())];

console.log(randomVal);

//NOTE: Using filter method.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let letters = ['a', 'b', 'c', 'd'];
let objects = [{ name: 'FirstObject' }, { name: 'SecondObject' }];

let newNumbers = numbers.filter(function (num) {
  if (num > 4) return true;
  return false;
});

let letterToSearch = 'b';
let newLetters = letters.filter(function (letter) {
  if (letter === letterToSearch) return true;
  else return false;
});

let objectNameToSearch = 'SecondObject';
let newObjects = objects.filter(function (obj) {
  if (obj.name === objectNameToSearch) return true;
  return false;
});

console.log(newNumbers);
console.log(newLetters);
console.log(newObjects);

//NOTE: Exercise calcAge with function.

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);

console.log(age1, age2);

const ages = [calcAge(years[0]), calcAge(years[1])];
console.log(ages);

//METHODS

const friends = ['michael', 'steven', 'peter'];
friends.push('Jay');

//REMOVE ELEMENTS
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('steven')) {
  console.log('You have a friend called peter');
}

//coding challenge

const bill = 100;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill waas ${bill} , the tip was ${tip}, and the total value ${
    bill + tip
  }`
);

//NOTE: Arrays and objects (dots and brackets).

const jonasArray = [
  'Jonas',
  'Kat',
  2021 - 1992,
  'Teacher',
  ['Michael', 'Peter', 'Steven'],
];

const jonas = {
  firstName: 'jonas',
  lastName: 'JJJ',
  age: 2021 - 1992,
  job: 'Teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

//prompt function = es una function incorporada que podemos usar en cualquier script , esto creara un popup window con un input field.
const interestedIn = prompt(
  'What do you want to know about Jonas ??choose between firstName , lastname , age , job , and friends '
);

//console.log(interestedIn);
//Ponemos en el prompt 'job'
//podemos usar brackets notacion en interedIn , Javascript remplazara el valor de interedIn por el verdadero valor y ese es el que va a buscar en el object. y ahi es cuando sale el resultado.

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]); //truty value
} else {
  console.log(`Wrong value`);
}

//ADDING NEW PROPERTIES

jonas.location = 'Portugal';
jonas['twitter'] = '@jONASSCHMEDMANT';
//console.log(jonas);
