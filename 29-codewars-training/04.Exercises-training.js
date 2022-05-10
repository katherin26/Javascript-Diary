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
