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
