/*Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.*/

function combat(health, damage) {
  return health < damage ? 0 : health - damage;
}
/*
  console.log(combat(100,5));
  console.log(combat(92,8));
  console.log(combat(20,30));
  */

/*In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
  
  For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
  
  Your function will be tested with pre-made examples as well as random ones.
  
  If you can, try writing it in one line of code.*/

function loop(arr1, arr2) {
  let volume1 = arr1.reduce((a, b) => a * b);
  let volume2 = arr2.reduce((a, b) => a * b);

  return volume2 - volume1;
}

console.log(loop([2, 2, 3], [5, 4, 1]));

/*In this kata you will create a function that takes in a list and returns a list with the reverse order.
 */

function reverseList(list) {
  return list.reverse();
}

console.log(reverseList([1, 2, 3, 4]));

/*Input: Array of elements
  
  ["h","o","l","a"]
  
  Output: String with comma delimited elements of the array in th same order.
  
  "h,o,l,a"
  
  Note: if this seems too simple for you try the next level*/

function printArray(array) {
  return array.join();
}

console.log(printArray(['h', 'o', 'l', 'a']));

/*Write a hello world function*/

function helloWorld() {
  var str = 'Hello World!';
  console.log(str);
}

console.log(helloWorld());

/*Define a function that removes duplicates from an array of numbers and returns ot as a result.
  The order of the sequence has to stay the same.
  */

function distinct2(a) {
  let uniqueArr = [...new Set(a)];
  console.log(uniqueArr);
}

console.log(distinct2([1, 2, 3, 4, 5, 5]));

/*You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
  
  Write a program that returns the girl's age (0-9) as an integer.
  
  Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.*/

function getAge(inputString) {
  switch (inputString) {
    case '0 years old':
      return 0;
    case '1 years old':
      return 1;
    case '2 years old':
      return 2;
    case '3 years old':
      return 3;
    case '4 years old':
      return 4;
    case '5 years old':
      return 5;
    case '6 years old':
      return 6;
    case '7 years old':
      return 7;
    case '8 years old':
      return 8;
    case '9 years old':
      return 9;
  }
}

console.log(getAge(`4 years old`));

/*OOP*/

function animal(obj) {
  return;
}

/*Write function Remove Exclamation Marks which removes all exlamation marks from a given string.*/

function removeExclamationMarks(s) {
  let newWords = [];
  let splited = s.split('');

  for (let i = 0; i < splited.length; i++) {
    if (splited[i] !== '!') {
      newWords.push(splited[i]);
    }
  }
  return newWords.join('');
}

console.log(removeExclamationMarks('Hello world!'));

/*Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b*/

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return Math.pow(a, b);
}

function subt(a, b) {
  return a - b;
}

console.log(add(1, 2));
console.log(multiply(1, 2));
console.log(divide(2, 1));
console.log(mod(1, 2));
console.log(exponent(1, 2));
console.log(subt(1, 2));

/*Messi is a soccer player with goals in three leagues:

    LaLiga
    Copa del Rey.
    Champios

Complete the function to return his total number of goals in all three leagues.

Note: The imput will always be valid.
*/

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

console.log(goals(43, 10, 5));

/*When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"*/

function position(letter) {
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === letter) {
      console.log(`Letter at position : ${i + 1}`);
    }
  }
}

console.log(position('a'));
console.log(position('z'));
console.log(position('e'));
