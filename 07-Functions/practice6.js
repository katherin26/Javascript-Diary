/*NOTE: Implement the function unique_in_order which takes as argument a sequence and 
returns a list of items without any elements with the same value next to each other and
preserving the original order of elements. */

//SOLUTION WITH FUNCTION

function unique_in_order(sequence) {
  let arrToFilter = Array.isArray(sequence) ? sequence : sequence.split('');

  let filtered = arrToFilter.filter(function (word, index) {
    if (arrToFilter.indexOf(word) === index) {
      return true;
    } else {
      return false;
    }
  });
  return filtered;
}

console.log(unique_in_order('AAAABBBCCDAABBB'));

//WITHOUT FUNCTION

const str = 'AAAABBBCCDAABBB';

const result = str.split('');
const filtered = result.filter(function (word, index) {
  if (result.indexOf(word) === index) {
    return true;
  }
});

console.log(filtered);

//NOTE: Using a function inside another function like a helper function.

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//NOTE: Using helpers functions.

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1982, 'mike'));

//NOTE: Exercise with function, arrays and average .

let dolphinsScoreData1 = [44, 23, 71];
let koalasScoreData1 = [85, 54, 41];
let dolphinsScoreData2 = [65, 54, 49];
let koalasScoreData2 = [23, 34, 27];

//ARROW FUNCTION
const calcAverage = arr => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};

const totalAverageDolphins1 = calcAverage(dolphinsScoreData1);
console.log(totalAverageDolphins1); //46

const totalAverageKoalas1 = calcAverage(koalasScoreData1);
console.log(totalAverageKoalas1); //60

const totalAverageDolphins2 = calcAverage(dolphinsScoreData2);
console.log(totalAverageDolphins2); //56

const totalAverageKoalas2 = calcAverage(koalasScoreData2);
console.log(totalAverageKoalas2); //28

//---------------arrow function--------------------------
// const calcAverage= (a,b,c) => (a+b+c)/3;
// console.log(calcAverage(3,4,5));
// let scoreDolphins = calcAverage(44,23,71);
// let scoreKoalas = calcAverage(65,54,49);
// console.log(scoreDolphins,scoreKoalas);

//FUNCTION DECLARATION
// function calcAverage(arr){
//   let total = 0;
//   for(let i = 0; i < arr.length; i++){
//     total += arr[i];
//   }
//   return total/ arr.length;
// }
// const totalAverage = calcAverage(dolphinsScoreData1);
// console.log(totalAverage);

function checkWinner(avg1, avg2) {
  if (avg1 >= 2 * avg2) {
    console.log(`dolphins is the winner (${avg1} vs ${avg2})`);
  } else if (avg2 >= 2 * avg1) {
    console.log(`Koalas is the winner (${avg2} vs ${avg1})`);
  } else {
    console.log(`We don't have a winner!!`);
  }
}

checkWinner(totalAverageDolphins1, totalAverageKoalas1);

//NOTE: CALCULATING A TIP.

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let bills = [125, 555, 44, 100];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let total = [bills[0] + tips[0]];
console.log(bills, tips, total);

console.log(
  `The bill was ${bills} , the tip was ${tips}, and the total value ${
    bills + tips
  }`
);

//NOTE: Ternary operator inside a function.

let greeting = person => {
  let name = person ? person.name : 'stranger';
  return `Howdy, ${name}`;
};

console.log(greeting({ name: `Alice` })); //Alice
console.log(greeting(null)); //stranger
console.log(greeting({ name: `MATHEW` })); //MATHEW
console.log(greeting()); //stranger

//NOTE: Passing spread operator like argument.

function sum3(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum3(0.1, 20, 30));

//NOTE: Get the max value.

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function getMax2(arr) {
  if (arr.length === 0) return undefined;
  return arr.reduce((acc, cur) => {
    return acc > cur ? acc : cur;
  });
}

const max = getMax2(numbers);
console.log(max);

//NOTE: FILTER,SORT,REVERSE,MAP

const movies = [
  {
    title: 'a',
    year: 2015,
    rating: 8.8,
  },
  {
    title: 'b',
    year: 2012,
    rating: 4.7,
  },
  {
    title: 'c',
    year: 2016,
    rating: 5.0,
  },
];

const titles = movies
  .filter(m => m.year === 2015 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);

console.log(titles);

//NOTE: GLOBAL FUNCTION EXAMPLE

//FUNCTION => GLOBAL(WINDOW,GLOBAL).

const movie1 = {
  title: 'Disaster',
  play() {
    console.log(this);
  },
};

movie1.play();

function PlayMovie2(title) {
  this.title = title;
  console.log(this);
}

const m = new PlayMovie2('Matrix');
