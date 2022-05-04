/*Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.*/

function getVolumeOfCuboid(length, width, height) {
  return length * width * height;
}

console.log(getVolumeOfCuboid(1, 2, 2));

/*Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.*/

const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;

console.log(console.log(isDivideBy(-12, 6, -2))); //true

function isDivideBy2(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivideBy2(-12, 6, -2));

/*Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
  
  [Make sure you type the exact thing I wrote or the program may not execute properly]*/

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet(`Bryan`));

function checkForFactor(base, factor) {
  if (base % factor === 0) {
    return true;
  } else {
    return false;
  }
}

/*This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.*/

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

console.log(simpleMultiplication(2));

/*You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.*/

function zeroFuel(distanceToPump, mpg, fueLeft) {
  return distanceToPump / mpg <= fueLeft;
}

console.log(zeroFuel(50, 25, 2));

function zeroFuel2(distanceToPump, mpg, fueLeft) {
  return mpg * fueLeft >= distanceToPump;
}

console.log(zeroFuel2(50, 25, 2));

/*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.*/

function quarterOf(month) {
  if (month === 3 || month === 2 || month === 1) {
    return 1;
  } else if (month === 6 || month === 5 || month === 4) {
    return 2;
  } else if (month === 9 || month === 8 || month === 7) {
    return 3;
  } else {
    return 4;
  }
}

function quarterOf2(month) {
  if (month >= 1 && month <= 3) {
    console.log(1);
  } else if (month >= 4 && month <= 6) {
    console.log(2);
  } else if (month >= 7 && month <= 9) {
    console.log(3);
  } else {
    console.log(4);
  }
}

/*We need a function that can transform a number into a string.
What ways of achieving this do you know?*/

function numberToString(num) {
  return num.toString();
}

console.log(numberToString(2));

/*Given a non-empty array of integers, return the result of multiplying the values together in order.*/

function grow(x) {
  return x.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  );
}

console.log(grow([1, 2, 3, 4]));
