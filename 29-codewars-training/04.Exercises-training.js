/*Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8*/

let num = 8;

function summatory(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(summatory(num));

/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/

function abbrevName(name) {
  let words = name.split(' ');
  let initials = words[0][0] + '.' + words[1][0];

  return initials.toUpperCase();
}

console.log(abbrevName('name name'));

//Dinamic way

function abbrevName2(name) {
  let initials = [];
  let words = name.split(' ');
  for (let i = 0; i < words.length; i++) {
    initials.push(words[i][0]);
  }
  return initials.join('.');
}

console.log(abbrevName2('name name name'));

/*The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock*/

function sayHello(name) {
  return 'Hello ' + name;
}

console.log(sayHello('Mr.Kathe'));

/*Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"*/

function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(3, 'k'));

//Other solution

function repeatStr2(n, s) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += s;
  }
  return str;
}

console.log(repeatStr2(5, 'k'));

/*NOTE: MERGE , REMOVE DUPLICATES AND SORT AN ARRAY*/

function mergeArrays(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr.sort(function (a, b) {
    return a - b;
  });
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

/*NOTE: Very simple, given an integer or a floating-point number, find its opposite.*/

function opposite(number) {
  return -number;
}

console.log(opposite(1));

/*NOTE: A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
  
  Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.*/

function isPalindrome(line) {
  let words = line.toString();
  const arrayValue = words.split('');
  const reverseArr = arrayValue.reverse();
  const resultReverse = reverseArr.join('');

  if (words == resultReverse) {
    return true;
  } else return false;
}

console.log(isPalindrome('ada'));

/*NOTE: Make a function that receive age, and return what they drink
  
    Rules : 
  
          Children under 14 old. (drink toddy)
          Teens under 18 old. (drink coke)
          Young under 21 old. (drink beer)
          Adults have 21 or more. (drink whisky)
  */

function peopleWithAgeDrink(old) {
  if (old < 14) {
    return 'drink toddy';
  } else if (old >= 14 && old <= 18) {
    return 'drink coke';
  } else if (old >= 18 && old <= 21) {
    return 'drink beer';
  } else {
    return 'drink whisky';
  }
}

console.log(peopleWithAgeDrink(13));
console.log(peopleWithAgeDrink(15));
console.log(peopleWithAgeDrink(19));
console.log(peopleWithAgeDrink(22));

/*NOTE: You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
  
  Your function will accept three arguments:
  The first and second argument should be numbers.
  The third argument should represent a sign indicating the operation to perform on these two numbers.
  
  if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.*/

function calculator(a, b, sign) {
  if (sign == '+') {
    return a + b;
  } else if (sign == '-') {
    return a - b;
  } else if (sign == '*') {
    return a * b;
  } else {
    return 'unknown value';
  }
}

console.log(calculator(1, 2, '+'));
