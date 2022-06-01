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
