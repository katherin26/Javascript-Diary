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
