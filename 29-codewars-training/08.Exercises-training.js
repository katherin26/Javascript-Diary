/*
Create a function that takes a string and an integer (n).
The function should return a string that repeats the input string n number of times.
If anything other than a string is passed in you should return "Not a string"

Example
"Hi", 2 --> "HiHi"
1234, 5 --> "Not a string"
*/

function repeatIt(str, n) {
  if (typeof str !== 'string') {
    return `Not a String`;
  } else {
    return str.repeat(n);
  }
}

/*Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.*/

function getChar(c) {
  return String.fromCharCode(c);
}

/*Write a function called repeatStr which repeats the given string string exactly n times.
  
  repeatStr(6, "I") // "IIIIII"
  repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"*/

function repeatStr(n, s) {
  return s.repeat(n);
}

/*This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
  
  Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
  
  For example:
  
  derive(7, 8)
  In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.
  
  derive(7, 8) --> this should output "56x^7" 
  derive(5, 9) --> this should output "45x^8" 
  Notes:
  
  The output of this function should be a string
  The exponent will never be 1, and neither number will ever be 0
  */

function derive(coefficient, exponent) {
  let multiply = coefficient * exponent;
  let subtraction = exponent - 1;

  return multiply + 'x' + '^' + subtraction.toString();
}

console.log(derive(7, 8));

/*Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
  
  Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
  
  [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
     7      6      5      4      3            2      1
  If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
  
  Note: there will always be exactly one wolf in the array.
  
  Examples
  Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
  Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
  
  Input: ["sheep", "sheep", "wolf"]
  Output: "Pls go away and stop eating my sheep"*/

function warnTheSheep(queue) {
  if (queue[queue.length - 1] === `wolf`)
    return 'Pls go away and stop eating my sheep';
  for (let i = queue.length - 1; i >= 0; i--) {
    if (queue[i] === 'wolf') {
      return `Oi! Sheep number ${
        queue.length - (i + 1)
      } ! You are about to be eaten by a wolf!`;
    }
  }
}

console.log(
  warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep'])
);

/*Loop backwards*/

function forLoopBack(num) {
  for (let i = num - 1; i >= 0; i--) {
    console.log(i);
  }
}

console.log(forLoopBack(10));

/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.*/

function invert(array) {
  let arr = [];
  for (let value of array) {
    if (value >= 0) {
      arr.push(parseInt('-' + value));
    } else {
      arr.push(Math.abs(value));
    }
  }
  return arr;
}

console.log(invert([-1, 1, 2, 3, 4, 5]));

/**** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

Looking for more, loop-restrained fun? Check out the other kata in the series:
*/

function check(a, x) {
  return a.includes(x);
}

console.log(check([66, 101], 66));

/*Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

Examples (Input -> Output)
15  -> '101.25 Chinese Yuan'
465 -> '3138.75 Chinese Yuan'
The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")*/

function usdcny(usd) {
  let result = usd * 6.75;
  return result.toFixed(2);
}

console.log(usdcny(2));

/*Complete the solution so that it reverses the string passed into it*/

function solution(str) {
  let arr = str.split('');
  return arr.reverse().join('');
}

console.log(solution('world'));

/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.nu*/

function makeNegative(num) {
  if (num === 0) {
    return num;
  } else if (num > 0) {
    return parseInt(`-${num}`);
  } else {
    return num;
  }
}

console.log(makeNegative(15));
console.log(makeNegative(-15));
console.log(makeNegative(0));

/*Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

function points(games) {
  let x = [];
  let y = [];
  let total = 0;

  for (const value of games) {
    let arr = value.split('');
    x.push(arr[0]);
    y.push(arr[2]);
  }

  for (let i = 0; i < x.length; i++) {
    if (x[i] > y[i]) {
      total += 3;
    } else if (x[i] < y[i]) {
    } else {
      total += 1;
    }
  }
  return total;
}

console.log(points(['1:0', '2:0', '3:0', '0:0']));
