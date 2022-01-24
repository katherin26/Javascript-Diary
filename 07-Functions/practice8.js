//NOTE: Write a function min that takes two arguments and returns their minimum.

function min(num1, num2) {
  return Math.min(num1, num2);
}

console.log(min(2, 3));

//NOTE: Even or odd using recursion.

function isEven(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else if (num < 0) {
    return isEven(-num);
  } else {
    return isEven(num - 2);
  }
}

console.log(isEven(50)); //true
console.log(isEven(75)); //false
console.log(isEven(-1)); //false
