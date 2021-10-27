/*NOTE: Create a function that receives an array of numbers and returns an array containing only the positive numbers*/

function positiveNum(arr) {
  let positives = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positives.push(arr[i]);
    }
  }
  return positives;
}

console.log(positiveNum([-5, 10, -3, 12, -9, 5, 90, 0, 1]));

/* Filter solution*/

let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

const result = arr.filter(el => el >= 0);

console.log(result);

/*NOTE: Find the maximum number in an array of numbers  */

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

let maximum = findMax(arr);
console.log(`Max: ${maximum}`);

/*NOTE: SUM AND AVERAGE IN AN ARRAY */

let list1 = [1, 2, 3, 4, 5, 6, 7];
let list2 = [1, 2, 3, 4, 5, 6, 7, 8, 10];
let list3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14];

//sum
function sumNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

let result1 = sumNumbers(list1);
let result2 = sumNumbers(list2);
let result3 = sumNumbers(list3);
console.log(result1, result2, result3);

//Average

function averageNum(arr) {
  let average = sumNumbers(arr) / arr.length;
  return average;
}

console.log(`The sum is ${result1} and the average is ${averageNum(list1)}`);
console.log(`The sum is ${result2} and the average is ${averageNum(list2)}`);
console.log(`The sum is ${result3} and the average is ${averageNum(list3)}`);

/*NOTE: CLONE AN ARRAY USING A FUNCTION */

function cloneArr(arr) {
  let clone = [];
  for (let i = 0; i < arr.length; i++) {
    clone.push(arr[i]);
  }
  return clone;
}
console.log(cloneArr([1, 2, 3, 4, 5, 6]));

//WITH NESTED ARRAY

function clone_arr(arr) {
  let clone = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      clone.push(clone_arr(arr[i]));
    } else {
      clone.push(arr[i]);
    }
  }
  return clone;
}

console.log(clone_arr([1, 2, 3, [4, 5, 6]]));

/*NOTE: Write a function to get the first element of an array. Passing a parameter 'arr'
will return the first element of the array.*/

function firstElement(arr) {
  return arr.slice(0, 1);
}

console.log(firstElement([7, 7])); //[7]
console.log(firstElement([7, 7, 6])); //[7]
console.log(firstElement([[], 7, 7, 6])); //[]

//Second solution

let firstE = function (arr, n) {
  if (arr == null) return void 0;
  if (n == null) return arr[0];
  if (n < 0) return [];
  return arr.slice(0, n);
};

console.log(firstE([7, 7])); //7

/*NOTE: Insert the dashes (-) between the numbers.*/

const numbers = 222886644226;
const str = numbers.toString();
const result = [str[0]];

for (let i = 1; i < str.length; i++) {
  if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
    result.push('-', str[i]);
  } else {
    result.push(str[i]);
  }
}

console.log(result.join(''));

//NOTE: Write an array of objects and print the tooltip value of each object.

let priceRanges = [
  { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
  { label: '$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
  { label: '$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];

console.log(priceRanges[0].tooltip);
console.log(priceRanges[1].tooltip);
console.log(priceRanges[2].tooltip);
