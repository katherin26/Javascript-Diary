//NOTE:
//NOTE: Calculate the average using for loop.

let arr = [1, 2, 3, 4, 5];

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(arr)); //3

//NOTE: Calculate the average using reduce.

function calcAverage2(arr) {
  let sum = arr.reduce((el, acc) => el + acc);

  return sum / arr.length;
}

console.log(calcAverage2(arr)); //3
