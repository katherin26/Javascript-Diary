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
