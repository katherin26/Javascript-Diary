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

/*NOTE: Eliminate the !!*/

function remove(string) {
  let arr = string.split('');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '!') {
      newArr.push(arr[i]);
    }
  }
  return newArr.join('');
}

console.log(remove('!Hi!!!!'));

/*NOTE:A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :) */

function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

console.log(hero(7, 5));

function lovefunc(flower1, flower2) {
  if (flower1 % 2 !== 0 && flower2 % 2 == 0) {
    return true;
  } else if (flower1 % 2 == 0 && flower2 % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

/*Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]*/

let a = 1;
let b = 4;

for (let i = a; i < b + 1; i++) {
  console.log(i);
}

function between(a, b) {
  let newArr = [];
  for (let i = a; i <= b; i++) {
    newArr.push(i);
  }
  return newArr;
}

console.log(between(1, 4));

/*This is the first step to understanding FizzBuzz.

Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

Your expected output is an array of positive integers from 1 to n (inclusive).

Your job is to write an algorithm that gets you from the input to the output.*/

function preFizz(n) {
  let newArr = [];
  for (let i = 1; i <= n; i++) {
    newArr.push(i);
  }
  return newArr;
}

console.log(preFizz(5));

function calculateAge(birthYear) {
  return birthYear - 2022;
}

console.log(calculateAge(1992));

function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(2));

/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/

function even_or_odd(number) {
  if (number % 2 === 0) {
    console.log(`Even`);
  } else {
    console.log(`Odd`);
  }
}

console.log(even_or_odd(2));
console.log(even_or_odd(3));

function even_or_odd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(even_or_odd(2));
console.log(even_or_odd(3));
