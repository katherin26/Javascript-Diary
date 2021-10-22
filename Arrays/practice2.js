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
