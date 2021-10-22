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
