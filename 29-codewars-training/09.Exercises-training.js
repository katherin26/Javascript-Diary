/*Write a function that returns the total surface the total surface area and volume of a box as an array: [area,volume]*/

function getSize(width, height, depth) {
  let volume = width * height * depth;

  let area = 2 * (depth * width + depth * height + width * height);

  return [area, volume];
}

console.log(getSize(4, 2, 6));

/*Give you a function animal, accept 1 paremeter:obj like this: 
  {name:"dog",legs:4,color:'white'}
  and return a string like this : 
  
  "This white dog has 4 legs."
  */

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

console.log(animal({ name: 'dog', legs: 4, color: 'white' }));

/*What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
  
  Example: 
  
  "apple ban" ==> ['apple 5', 'ban 3']
  
  You task is to write a function that takes a string and returns an array/list with the length of each word added to each element. 
  */

function addLength(str) {
  let arr = str.split(' ');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(`${arr[i]} ${arr[i].length}`);
  }
  return newArr;
}

console.log(addLength('you will win'));

/*Find the mean (average) of a list of numbers in an array.
 */

function findAverage(nums) {
  let sum = nums.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );

  return sum / nums.length;
}

console.log(findAverage([1, 3, 5, 7]));

/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
  
  x < 5
  x > 5
  */

function fakeBin(x) {
  let arr = x.split('');
  let newArr = [];
  for (let value of arr) {
    if (value >= `5`) {
      newArr.push('1');
    } else {
      newArr.push('0');
    }
  }
  return newArr.join('');
}

console.log(fakeBin(`4554`));

/*NOTE: Using .length, shift(), arr.length -1, push(), pop())*/

function getLength(arr) {
  return arr.length;
}
console.log(getLength([1, 2, 3]));

function getFirst(arr) {
  return arr.shift();
}
console.log(getFirst([1, 2, 3]));

function getLast(arr) {
  return arr[arr.length - 1];
}
console.log(getLast([1, 2, 3]));

function pushElement(arr) {
  var el = 1;
  arr.push(el);
  return arr;
}
console.log(pushElement([1, 2, 3]));

function popElement(arr) {
  arr.pop();
  return arr;
}
console.log(popElement([1, 2, 3]));

/*Using if else statement*/

function Sleigh(name, password) {
  if (name === 'Santa Claus' && password === 'Ho Ho Ho!') {
    return true;
  } else {
    return false;
  }
}

console.log(Sleigh('Santa Claus', 'Ho Ho Ho!'));

/*Playing Cards*/

function defineSuit(card) {
  let arr = card.split('');
  if (arr[1] === '♦') {
    return 'diamantes';
  } else if (arr[1] === '♥') {
    return 'hearts';
  } else if (arr[1] === '♣') {
    return 'clubfs';
  } else {
    return 'spades';
  }
}

console.log(defineSuit('3♦'));

/*EVEN OR ODD*/

function pickIt(arr) {
  let odd = [];
  let even = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      odd.push(arr[i]);
    } else {
      even.push(arr[i]);
    }
  }

  return [even, odd];
}

console.log(pickIt([1, 2]));

/*Remove the 0*/

function noBoringZeros(n) {
  if (n === 0) return n;

  let str = n.toString();
  let arr = str.split('');

  while (true) {
    if (arr[arr.length - 1] === '0') {
      arr.pop();
    } else {
      break;
    }
  }
  return parseInt(arr.join(''));
}

console.log(noBoringZeros(0));
console.log(noBoringZeros(9600000));

/*Create a function finalGrade, which calculates the final grade of a student depending on two parameters: 
1. a grade for the exam and 
2. a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above).

The function should return a number (final grade). There are four types of final grades:

1. 100, if a grade > 90 && projects > 10.
2. 90, if a grade > 75 && projects > 5
3. 75, if a grade > 50 && projects > 2.
4. 0, in other cases 
*/

/*
1. write a function
2. parameters : exam and projects
input ==> type integer
3. if else statement , and > && operators.
4. output ===> type integer
*/

function finalGrade(exam, projects) {
  if (exam >= 90 && projects >= 10) {
    return 100;
  } else if (exam >= 75 && projects >= 5) {
    return 90;
  } else if (exam >= 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

/*Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0. 

Return the results as an array.
 */

/*
1. x = number that is going to be a multyple
2. n = quantity of multyple
3. x and n ====> positive numbers.
3.1 math operation
4. output = array with all the multiples
*/

// let x = 2;
// let n = 10;
// let multiples = []

// for(let i = x ; i <= n ; i++){
//   if(i % x === 0){
//       multiples.push(i)
//   }
// }
// console.log(multiples)

function countBy(x, n) {
  let z = [];
  let i = x;

  while (z.length < n) {
    if (i % x === 0) {
      z.push(i);
    }
    i++;
  }
  return z;
}

/*
1. Write a function called apple
2. parameter is going to be = x
3. if(x) squared is more than 1000, return `It's hotter than the sun!!`
4. Else return `Help yourself to a honeycomb Yorkie for the glovebox`.
5. x = number and string
*/

function apple(x) {
  let num = parseInt(x);
  if (Math.pow(num, 2) > 1000) {
    return `It\'s hotter than the sun!!`;
  } else {
    return `Help yourself to a honeycomb Yorkie for the glovebox.`;
  }
}

console.log(apple('50'));
console.log(apple(4));

/*Each number should be formatted that it is rounded to two decimal places.
You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
*/

function twoDecimalPlaces(n) {
  let str = n.toFixed(2);
  return Number(str);
}

console.log(twoDecimalPlaces(4.659725356));
console.log(twoDecimalPlaces(173735326.3783732637948948));
console.log(twoDecimalPlaces(4.653725356));
