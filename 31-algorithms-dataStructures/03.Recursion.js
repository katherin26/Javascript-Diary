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
