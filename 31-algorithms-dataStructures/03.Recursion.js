/*Count down numbers with recursion*/

function countDown(num) {
  if (num <= 0) {
    console.log(`All done.`);
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

console.log(countDown(5));

/*
  n = 5 
  5 <= 0 = NOT
  console.log(5)
  5-- = 4
  countDown(4) and over and over until 
  0 <= 0
  */

/*sumRange second recursive function*/

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(4));

/*return num + sumRange(num-1)
    return 4 + sumRange(4 - 1) 
    return 3 + sumRange(3 - 1)
    retunr 2 + sumRange(2 - 1)
    return 1 
  
  TOTAL =  4 + (3+2+1)
  */

/*Factorial*/

/*Count down numbers with recursion*/

function countDown(num) {
  if (num <= 0) {
    console.log(`All done.`);
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

console.log(countDown(5));

/*
  n = 5 
  5 <= 0 = NOT
  console.log(5)
  5-- = 4
  countDown(4) and over and over until 
  0 <= 0
  */

/*sumRange second recursive function*/

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(4));

/*return num + sumRange(num-1)
    return 4 + sumRange(4 - 1) 
    return 3 + sumRange(3 - 1)
    retunr 2 + sumRange(2 - 1)
    return 1 
  
  TOTAL =  4 + (3+2+1)
  */

/*Factorial*/

function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total = total * i;
  }
  return total;
}

console.log(factorial(3));

/*
  3, 3 > 1; i--;
  3 = 1 * 3 
  2, 2 > 1; i--
  6 = 3 * 2
  1, 1 > 1 ; i--
  6 = 6 * 1
  */

/*Recursion*/

function factorial2(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial2(3)); //6

/*
  3 * (3-1)
        2 = num
  2 * (2-1) 
        1 = num
  
  3 * (2+1) = 6
  */

/*Helper Method Recursion*/

function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/*
  1 % 2 !== 0 true
  2 % 2 !== 0
  3 % 2 !== 0 true
  4 % 2 !== 0
  5 % 2 !== 0 true
  6 % 2 !== 0
  7 % 2 !== 0 true
  8 % 2 !== 0
  9 % 2 !== 0 true
  */

/*Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  do not worry about negative bases and exponents.*/

function power(base, exponent) {
  if (exponent <= 0) return 1;

  return base * power(base, exponent - 1);
}
console.log(5);

/*
  power(10,4) return 10 * power(10,3) = 10 * 1000
  power(10,3) return 10 * power(10,2) = 10 * 100 
  power(10,2) return 10 * power(10,1) = 10 * 10 
  power(10,1) return 10 * power(10,0) = 10 * 1
  power(10,0) return 1 
  */
