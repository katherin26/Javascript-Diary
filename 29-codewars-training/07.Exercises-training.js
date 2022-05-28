/*Now you have to write a function that takes an argument and returns the square of it.*/

function square2(number) {
  return number * number;
}

console.log(square2(3));

/*Use variables to find the sum of the goals Messi scored in 3 competitions
  
  Information
  Messi goal scoring statistics:
  
  Competition	Goals
  La Liga	43
  Champions League	10
  Copa del Rey	5
  
  Task
  Create these three variables and store the appropriate values using the table above:
  laLigaGoals
  championsLeagueGoals
  copaDelReyGoals
  Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.
  
  */

let laLigaGoals = 43;
let championsLeagueGoals = 10;
let copaDelReyGoals = 5;
let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

console.log(totalGoals);

/*In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
  
  For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
  
  If you can, try writing it in only one line of code.*/

function findMultiples(int, limit) {
  let result = [];

  for (let i = int; i <= limit; i = i + int) result.push(i);

  return result;
}

console.log(findMultiples(5, 25));

/*
  Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
  
  For example,
  
  [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
  The correct answer would be 17.
  
  Hint: Don't forget to check for bad values like null/undefined*/

function countSheeps(arrayOfSheep) {
  let sheeps = [];
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep === null) return;
    if (arrayOfSheep[i] === true) {
      sheeps.push(arrayOfSheep[i]);
    }
  }
  return sheeps.length;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

/*The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
  
  For example:
  
  1.08 --> 30
  Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.*/

function cockroachSpeed(s) {
  return Math.floor(s * 27.777778);
}

console.log(cockroachSpeed(1.08));

/*Task:
  Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
  
  number	price (cents)
  n < 5	100
  n >= 5 and n < 10	95
  n >= 10	90
  You can use if..else or ternary operator to complete it.
  
  When you have finished the work, click "Run Tests" to see if your code is working properly.
  
  In the end, click "Submit" to submit your code pass this kata.
  */

function saleHotdogs(n) {
  return n < 5
    ? 100 * n
    : n >= 5 && n < 10
    ? 95 * n
    : n >= 10
    ? 90 * n
    : 'none';
}

console.log(saleHotdogs(1));
console.log(saleHotdogs(4));
console.log(saleHotdogs(5));
console.log(saleHotdogs(9));
console.log(saleHotdogs(10));
console.log(saleHotdogs(100));
