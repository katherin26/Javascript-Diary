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

//NOTE: Calculate the average using for of.

function calcAverage3(arr) {
  let sum = 0;
  for (const values of arr) {
    sum += values;
  }
  return sum / arr.length;
}

console.log(calcAverage3(arr)); //3

//NOTE: Calculate the average using for in.

function calcAverage4(arr) {
  let sum = 0;
  for (const property in arr) {
    sum += arr[property];
  }
  return sum / arr.length;
}

console.log(calcAverage4(arr)); //3

//NOTE: Calculate the average using for Each.

function calcAverage5(arr) {
  let sum = 0;
  arr.forEach(el => {
    sum += el;
  });
  return sum / arr.length;
}

console.log(calcAverage5(arr));
