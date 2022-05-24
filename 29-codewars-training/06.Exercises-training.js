/*Complete the function that receives as input a string, and produces outputs according to the following table:
 */

function getDrinkByProfession(param) {
  let word = param.toLowerCase();

  return word === 'jabroni'
    ? 'Patron Tequila'
    : param === 'school counselor'
    ? 'Anything with alcohol'
    : param === 'programmer'
    ? 'hipster craft beer'
    : param === 'bike gang member'
    ? 'Moonshine'
    : param === 'politician'
    ? 'Your tax dollars'
    : param === 'rapper'
    ? 'cristal'
    : 'beer';
}

console.log(getDrinkByProfession('programmer'));

/*Capitalize the first letter of each word in a string*/

const str = 'programmer';
const str2 = str.charAt(0).toUpperCase() + str.slice(1);

/*Find the sum of all multiplies of n below m
  
  - n and m are natural numbers(positive integers).
  - m is excluded from the multiples.
  */

function mult(n, m) {
  if (n >= m) return 'INVALID';

  let sum = 0;

  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}

console.log(mult(2, 9));

/*You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
  
    As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
  */

function reverse(string) {
  let arr = string.split(' ');
  let strReversed = arr.reverse();

  return strReversed.join(' ');
}

console.log(reverse('Hello World'));

/*Your are going to have a baby!*/

function chromosomeCheck(sperm) {
  return sperm === 'XX'
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}

console.log(chromosomeCheck('XX'));

/*Create an array of numbers*/

function arr(num) {
  let arr = [];
  for (let i = 0; i < num - 1; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(arr(4));

/*You will be given an array a and value x. All you need to do is check whether the provided array contains the value.
  
  Array can contain numbers or strings. X can be either.
  
  Return true if the array contains the value, false if not.
  */

function check(a, x) {
  return a.find(element => element === x) ? 'true' : 'false';
}

console.log(check([101, 45, 75, 105, 99, 107], 107));

/*NOTE: PRINT ALL THE NUMBERS*/

function pipeFix(numbers) {
  let newList = [];
  for (let i = 0; i < numbers.length; i++) {
    newList.push(numbers[i]);
    if (numbers[i + 1] !== undefined && numbers[i + 1] !== numbers[i] + 1) {
      newList.push(numbers[i] + 1);
    }
  }
  return newList;
}

console.log(pipeFix([1, 2, 3, 12]));

function pipeFix2(numbers) {
  let newList = [];
  //[1,2,3,12]
  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    let expectedNextNumber = currentNumber + 1;
    let actualNextNumber = numbers[i + 1];
    newList.push(currentNumber);
    while (
      actualNextNumber !== undefined &&
      actualNextNumber !== expectedNextNumber
    ) {
      newList.push(expectedNextNumber);
      expectedNextNumber = expectedNextNumber + 1;
    }
  }

  return newList;
}

function pipeFix3(numbers) {
  let arr = [];
  let lastNumber = numbers[numbers.length - 1];
  let startingNumber = numbers[0];

  for (let i = startingNumber; i <= lastNumber; i++) {
    arr.push(i);
  }

  return arr;
}

console.log(pipeFix2([1, 2, 3, 12]));
console.log(pipeFix3([1, 2, 3, 12]));

/*NOTE: Write a function that always returns 5 
  Sounds easy right ? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
*/

function unusualFive() {
  return 'jesus'.length;
}

console.log(unusualFive());

/*Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

function getGrade(s1, s2, s3) {
  let sum = s1 + s2 + s3;
  let average = sum / 3;

  if (90 <= average && average <= 100) {
    return 'A';
  } else if (80 <= average && average < 90) {
    return 'B';
  } else if (70 <= average && average < 80) {
    return 'C';
  } else if (60 <= average && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(100));

/*Write a function that checks if a given string (case insensitive is a palindrome. */

function isPalindrome(x) {
  let word = x.split('');
  let reversed = word.reverse();
  let X = x.toLowerCase();
  let reversedX = reversed.join('');

  return X == reversedX.toLowerCase() ? true : false;
}

/*NOTE: Just count Sheep !!!*/

function countSheep(num) {
  if (num === 0) return '';
  for (let i = 0; i <= num; i++) {
    console.log(`${i + 1} sheep...`);
  }
}

console.log(countSheep(1));
console.log(countSheep(0));

/*NOTE: Write a function to split a string and convert it into an array of words.*/

function stringToArray(string) {
  return string.split(' ');
}

console.log(stringToArray('Robin Singh'));

/*Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.*/

function include(arr, item) {
  let found = arr.find(el => el === item);

  return found !== undefined ? true : false;
}

console.log(include([0, 1, 2, 3, 4], 0));

/*Create a function called shortcut to remove the lowecase vowels (a,e,i,o,u) in a given string.*/

function shortcut(string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let strSplited = string.split('');

  return strSplited.filter(word => !vowels.includes(word)).join('');
}

console.log(shortcut('hello'));
