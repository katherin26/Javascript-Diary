/*NOTE: RECURSION */

let forLoopFunction = num => {
  num++;
  console.log(num);
  if (num < 5) {
    forLoopFunction(num);
  }
};

forLoopFunction(0); //1 2 3 4 5

//Example print numbers.

let forLoopFunction = num => {
  num++;
  console.log(num);
  if (num < 5) {
    forLoopFunction(num);
  }
};

forLoopFunction(0); // 1 2 3 4 5

/*In the above program, the user passes a number as an argument when calling 
a function.
In each iteration, the number value is decreased by 1 and function countDown()
is called until the numbers is positive. Here, newNumber > 0 is the base condition.
This recursive call can be explained in the following steps: 

countDown(5) prints 5 and calls countDown(4)
countDown(4) prints 5 and calls countDown(3)
countDown(3) prints 5 and calls countDown(2)
countDown(2) prints 5 and calls countDown(1)
countDown(1) prints 5 and calls countDown(0)

When the number reaches 0, the base condition is met and the function is not 
called anymore.
*/

//SUM IN RECURSION

function sumUpTo(n) {
  if (n == 1) return 1;
  return n + sumUpTo(n - 1);
}

sumUpTo(10); //The total is 55

/*In this case :

sumUpTo(1) 2 + 1
sumUpTo(2) 3 + 3
sumUpTo(3) 4 + 6
sumUpTo(4) 5 + 10
sumUpTo(5) 6 + 15
sumUpTo(6) 7 + 21 
sumUpTo(7) 8 + 28
sumUpTo(8) 9 + 36
sumUpTo(9) 10 + 45
sumUpTo(10) 11 + 55

*/

/*NOTE: Find the maximun
 */

function maxOfTwoNumbers(x, y) {
  return Math.max(x, y);
}

console.log(maxOfTwoNumbers(10, 20)); //20

/*NOTE: Find longest word*/

const words2 = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
];

function getMax(arr) {
  if (arr.length === 0) return undefined;
  return arr.reduce((acc, cur) => {
    return acc.length > arr.length ? acc : cur;
  }, '');
}

console.log(getMax(words2)); //cocodrile

//SOLUTION WITH FOR LOOP.

const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
];

function findLongestWord(arr) {
  let longest = '';
  if (arr.length === 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

console.log(findLongestWord(words)); //cocodrile

/*NOTE: Calculate the sum with reduce and function. */

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArr(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

sumArr(numbers); //87

//Solution with reduce method

function sumArr2(num) {
  return num.reduce((acc, curr) => acc + curr);
}
console.log(sumArr2(numbers));
