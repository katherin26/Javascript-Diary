//NOTE: Make an array of numbers that are doubles of the first array.

let data = [2, 5, 100];
function doubleNumbers(arr) {
  return arr.map(el => el * 2);
}

doubleNumbers(data); //[ 4, 10, 200 ]

//NOTE: Take an array of numbers and make them strings.

function stringItUp(arr) {
  return arr.map(el => el.toString());
}

stringItUp(data); //[ '2', '5', '100' ]

//NOTE: Capitalize each of an array of names.

let data2 = ['john', 'JACOB', 'jinGleHeimer', 'schmidt'];
function capitalizeName(arr) {
  return arr.map(el => el.toUpperCase());
}

capitalizeName(data2); //[ 'JOHN', 'JACOB', 'JINGLEHEIMER', 'SCHMIDT' ]

//NOTE: Using a for of iterate over the array and used a function who multiply every value and push the result in a new variable.

let array = [1, 2, 3, 4, 5];

const multiply = (n1, n2) => {
  return n1 * n2;
};

const result = [];
for (let n of array) {
  result.push(mult(n, 2));
}

console.log(result); //[ 2, 4, 6, 8, 10 ]

//Using map iterate over the same array and use the method called toString to change the number values to string value.

const tostring = array.map(n => n.toString());
console.log(tostring); //[ '1', '2', '3', '4', '5' ]

//NOTE: Using map for multiply values inside an array.

const numbers = [1, 2, 2, 3, 4, 5];

const newNumbers = numbers.map(el => {
  return el * 10;
});
console.log(newNumbers);
// 10, 20, 20, 30, 40, 50 ]

function calcMultiply(arr) {
  return arr.map(el => el * 10);
}

console.log(calcMultiply(numbers));
// 10, 20, 20, 30, 40, 50 ]

//NOTE: METHODS THAT MUTATE THE ORIGINAL ARRAY.

//Splice(index,howmany)
let arr = [1, 2, 3, 4, 5];
console.log(arr.splice(1, 2)); //2,3

let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 1, 'lemon', 'kiwi');
console.log(fruits); //[ 'Banana', 'Orange', 'lemon', 'kiwi', 'Mango' ]

//Sort(compareFunction).

const fruits2 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits2.sort();
console.log(fruits2); //[ 'Apple', 'Banana', 'Mango', 'Orange' ]

//Using sort() and reverse().

const fruits3 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits3.sort(); //[ 'Apple', 'Banana', 'Mango', 'Orange' ]
fruits3.reverse(); //'Orange', 'Mango', 'Banana', 'Apple' ]

//A fill(value, start, end).

const fruits4 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits4.fill('fill Method');
console.log(fruits4);

//[ 'fill Method', 'fill Method', 'fill Method', 'fill Method' ]

const fruits5 = ['Banana', 'Orange', 'Apple', 'Mango'];

fruits5.fill('kiwi', 2, 4);
console.log(fruits5); //[ 'Banana', 'Orange', 'kiwi', 'kiwi' ]

//NOTE: A NEW ARRAY.

//Slice(start,end). Portion of original.

console.log(arr.slice(0, 3)); //[1,2,3]

//Map() loop , Computed from original.
//Using map multiply each value.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubles = numbers.map(el => el * 2);
console.log(doubles); /*[2,  4,  6,  8, 10,12, 14, 16, 18, 20]*/

//Using map calculate the root of each value.

let numbers2 = [1, 4, 9];
let roots = numbers2.map(function (num) {
  return Math.sqrt(num);
});

console.log(roots); //[ 1, 2, 3 ]
