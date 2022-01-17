//NOTE:
//NOTE: Calculate the average using for loop.

let arr = [1, 2, 3, 4, 5];

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(arr)); //3

//NOTE: Calculate the average using reduce.

function calcAverage2(arr) {
  let sum = arr.reduce((el, acc) => el + acc);

  return sum / arr.length;
}

console.log(calcAverage2(arr)); //3

//NOTE: Calculate the average using for of.

function calcAverage3(arr) {
  let sum = 0;
  for (const values of arr) {
    sum += values;
  }
  return sum / arr.length;
}

console.log(calcAverage3(arr)); //3

//NOTE: Calculate the average using for in.

function calcAverage4(arr) {
  let sum = 0;
  for (const property in arr) {
    sum += arr[property];
  }
  return sum / arr.length;
}

console.log(calcAverage4(arr)); //3

//NOTE: Calculate the average using for Each.

function calcAverage5(arr) {
  let sum = 0;
  arr.forEach(el => {
    sum += el;
  });
  return sum / arr.length;
}

console.log(calcAverage5(arr));

//NOTE:  Calculate the average using map().

function calcAverage6(arr) {
  let sum = 0;
  arr.map(el => {
    sum += el;
  });
  return sum / arr.length;
}

console.log(calcAverage6(arr)); //3

//NOTE: EXERCISE GET THE LONGEST NAME USING A FUNCTION AND FOR OF .

let pets = ['lolaaaa', 'lelee', 'liliii'];

function getLongestName(names) {
  let getLongestNameIndex;

  let maxNameLength = 0;
  for (let [index, name] of names.entries()) {
    if (name.length > maxNameLength) {
      longestNameIndex = index;
      maxNameLength = name.length;
    }
  }
  return names[longestNameIndex];
}

console.log(getLongestName(pets)); //lolaaaa

/*NOTE: Write a function that received 4 arguments and those arguments should be the data below. Inside the function print a message using the firstName and LastName. */

let movies = ['Alien', 'Matrix', 'Hitch'];
let hobby = 'Running';
let car = {
  name: 'Lambo',
};
let firstName = 'Ana';
let lastName = 'Gun';

const getNewMovieDeal = (name, lastName, hobby, car) => {
  console.log(
    `${name} ${lastName} has a hobby and is ${hobby} and also has a ${car}`
  );
};

getNewMovieDeal(firstName, lastName, hobby, car.name);

//NOTE: For loop Function

let forLoopFunction = num => {
  num++;
  console.log(num);
  if (num < 5) {
    forLoopFunction(num);
  }
};

forLoopFunction(0); //1 2 3 4 5

//NOTE: The functions can be passed as arguments to other function.

let sum = (n1, n2) => n1 + n2;
let multiply = (n1, n2) => n1 * n2;

function calcSumAndMultiply(num1, num2, sumFn, multFn) {
  let sum = sumFn(num1, num2);
  let multiply = multFn(num1, num2);

  return { sum, multiply };
}

let result = calcSumAndMultiply(5, 5, sum, multiply);
console.log(`Sum : ${result.sum}, Multiply : ${result.multiply}`);
