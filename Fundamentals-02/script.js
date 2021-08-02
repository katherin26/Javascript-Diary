'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive =s`);

//---------------FUNCTION DECLARATION-----------------//
function logger() {
  console.log('My name is ...');
}
//CALLING - RUNNING - INVOKING
logger();

//----------------BASIC EXERCISE---------------------//
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//-----------------FUNCTION DECLARATION VS FUNCTION EXPRESSION--------------//
function calcAge1(birthYear) {
  return 2020 - birthYear;
}
const age1 = calcAge1(1980);
console.log(age1); //40

const calcAge2 = function (birthYear) {
  return 2020 - birthYear;
};
const age2 = calcAge2(1980);
console.log(age2); //40

//-----------------FUNCTION CALLING OTHER FUNCTIONS----------------//

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${apples} and ${applePieces} pieces of apples and ${oranges} and ${orangePieces} pieces of oranges...:p`;
  return juice;
}
console.log(fruitProcessor(2, 3));

//---------------------ARROW FUNCTIONS----------------------------//

const calcAge3 = birthYear => 2020 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2020 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement} years!`;
};

console.log(yearsUntilRetirement(1991, 'Pepe'));

//---------------------REVIEWING FUNCTIONS----------------------------//

const calcAge = function (year) {
  return 2037 - year;
};

const yearsUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years....`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired...=J`);
    return -1;
  }

  //return retirement;
  //return `${firstName} retires in ${retirement} Years ...!!!`
};

console.log(yearsUntilRetirement(1992, 'Pepe 2'));
console.log(yearsUntilRetirement(1970, 'MIke'));

//---------------EXERCISE DOLPHIGNS AND KOALAS----------------//
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

//--------------------------Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas); //46 56.

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`NO one wins =s`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

//---------------------------Test 2----------------------------//

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

//-----------------------ARRAYS----------------------------//

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020); // new keyword and array function
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length); //3
console.log(friends[friends.length - 1]);

friends[2] = 'Jay'; // peter por jay.
console.log(friends);

const firstName = 'COCO'; //pones esta variable dentro del array.
const coco = [firstName, 'Disney', 2037 - 1980, 'teacher', friends]; //friends = array.
console.log(coco);
console.log(coco.length); //5

//----------------------- BASIC EXERCISE----------------------------//
const calcAge4 = function (birthYear) {
  return 2037 - birthYear;
};

const years4 = [1990, 1967, 2002, 2010, 2018];
const ages1 = calcAge(years[0]);
const ages2 = calcAge(years[1]);
const ages3 = calcAge(years[years.length - 1]);

console.log(ages1, ages2, ages3); //46 53 17

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages); // (3) [46,53,17]

//-----------------BASIC ARRAY OPERATIONS METHODS ----------------------------------//
const frinds = ['Michael', 'Steven', 'Peter'];
const newLength = frinds.push('Jay');
console.log(frinds); //console.log(frinds);
console.log(newLength); //4

frinds.unshift('John');
console.log(frinds); //[ 'John', 'Michael', 'Steven', 'Peter', 'Jay' ]

frinds.pop(); //Peter
const popped = frinds.pop();
console.log(popped); //Jay
console.log(frinds); //[ 'John', 'Michael', 'Steven']

frinds.shift();
console.log(frinds);

console.log(frinds.indexOf('Steven'));
console.log(frinds.indexOf('Bob')); // si no lo encuentra sale -1.,

console.log(frinds.includes('Steven')); //true
console.log(frinds.includes('Bob')); //false

if (frinds.includes('Steven')) {
  console.log('You have a friend called steven');
}

//-----------------EXERCISE ----------------------------------//
function calcTipp(bill) {
  const tip = (bill <= 300) & (bill >= 50) ? bill * 0.15 : bill * 0.2;
  return tip;
}

/*const calcTip2 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};*/

/*const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;*/

const bills = [125, 555, 44];

const tips = [calcTipp(bills[0]), calcTipp(bills[1]), calcTipp(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals); //(3) [125, 555, 44] (3) [18.75, 111, 8.8] (3) [143.75, 666, 52.8]

//--------------------------------OBJECTS---------------------------------//
const aliceArray = [
  'Ali',
  'Ce',
  2037 - 1991,
  'Teacher',
  ['Michael', 'Peter', 'Steven'],
];
console.log(aliceArray[0]);

//-------------------------OBJECT LITERAL SINTAX-------------------------//

const aliceM = {
  firstName: 'Ali', //propertie and value
  lastName: 'CeM',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};
console.log(aliceM.firstName);

//----------------------DOT VS BRACKET NOTATION----------------------------//
const kathe = {
  firstName: 'Kat',
  lastName: 'Luiii',
  age: 2037 - 1950,
  job: 'eeeeee',
  friends: ['ds', 're', 'Is'],
};
console.log(kathe.firstName);
console.log(kathe['lastName']);

const nameKey = 'Name';
console.log(kathe['first' + nameKey]);
console.log(kathe['last' + nameKey]);

const interestedIn = prompt(
  'What do you want to know about Kathe ?? Choose between firstName, lastName, age . job, and friends...'
);

if (kathe[interestedIn]) {
  console.log(kathe[interestedIn]);
} else {
  console.log('Wrong request!!');
}

kathe.location = 'Antartida';
kathe['twitter'] = '@kattttt';
console.log(kathe);

// Challenge
// Kat has 3 best friends, and his best friend is called Michael
console.log(kathe.firstName);
console.log(kathe.friends.length);
console.log(kathe.friends[0]);

console.log(
  `${kathe.firstName} has ${kathe.friends.length} friends and his best friend is called ${kathe.friends[0]}.`
);

//-------------------------OBJECT METHODS ----------------------------------//
const katanddog = {
  firstName: 'Kat',
  lastName: 'Dog',
  birthYear: 1801,
  job: 'nothing',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  //calcAge: function (birthYear) {
  //    return 2037 - birthYear
  //}

  calcAge: function () {
    //console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  //CHALLENGE -----------------------------------------
  //"Katanddog is a 46 years old teacher, and she has a driver's license"

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      katanddog.job
    }, and she has ${this.hasDriversLicense ? 'a' : 'no'} drivers's license.`;
  },
};

console.log(katanddog.calcAge());
console.log(katanddog.age);
console.log(katanddog.getSummary());

//------------------------CODING CHALLENGE ----------------------------------//

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  heigth: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.heigth ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  heigth: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.heigth ** 2;
    return this.bmi;
  },
};

john.calcBMI(); //24.19
mark.calcBMI(); //27.30

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}

//----------------------------------FOR LOOP--------------------------------//

for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i}`);
}

const katheA = [
  'Kat',
  'Schmed',
  2037 - 1984,
  'Student',
  ['Michael', 'Peter', 'Steven'],
  true,
];

const types = [];
for (let i = 0; i < katheA.length; i++) {
  //Reading from katheA array
  console.log(katheA[i], typeof katheA[i]);

  //FIlling types array
  //types[i] = typeof katheA[i];
  types.push(typeof katheA[i]);
}

console.log(types);

//--------------------------BASIC EXERCISE---------------------------------//
//LOOP THROUGH YEARS AND PUSH THE AGE TO OTHER ARRAY

const yearsE = [1999, 2007, 1969, 2020];

const agesS = [];

for (let i = 0; i < yearsE.length; i++) {
  agesS.push(2037 - yearsE[i]);
}

console.log(agesS); // (4) [38, 30, 68, 17]

//---------------------CONTINUE AND BREAK------------------------//

console.log(`---ONLY STRINGSSS`);

for (let i = 0; i < katheA.length; i++) {
  if (typeof katheA[i] !== 'string') continue;
  console.log(katheA[i], typeof katheA[i]);
}

console.log('---- BREAK WITH NUMBER');

for (let i = 0; i < katheA.length; i++) {
  if (typeof katheA[i] === 'number') break;
  console.log(katheA[i], typeof katheA[i]);
}

//-------------------LOOPING IN ARRAY BACKWARDS LOOPS AND LOOPS----------------//
const dogArray = [
  'Dog',
  'Array',
  2037 - 1991,
  'teacher',
  ['michael', 'Peter', 'Steven'],
];

for (let i = dogArray.length - 1; i >= 0; i--) {
  console.log(i, dogArray[i]);
}

//---------------------------------------------------------------

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} : Lifting weight repetition ${rep}`);
  }
}

//----------------------------WHILE LOOP----------------------------------------//

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE===Lifting weights repetition ${rep}`);

  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1; // el uno es para == uno de seis.

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log('Loop is about to end...');
}

//-----------------------------CODING CHALLENGE-------------------------------------//

const billsS = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52, 100];

const tipsS = [];
const totalS = [];

function calcTip(bill) {
  const tip = (bill <= 300) & (bill >= 50) ? bill * 0.15 : bill * 0.2;
  return tip;
}

console.log(calcTip(250));

for (let i = 0; i < billsS.length; i++) {
  tipsS.push(calcTip(billsS[i]));
  totalS.push(billsS[i] + calcTip(billsS[i]));
}
console.log(tipsS);
console.log(totalS);

//------------------BONUS--calcular el average-------------------------------------//

const calcAverageS = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverageS(totalS));

//-----------------PROBLEM 1---------------------------------------------------------------------------------//

//WE WORK FOR A COMPANY BUILDING A SMART HOME THERMOMETER , OUR MOST RECENT TASK IS THIS : "GIVEN AN ARRAY OF TEMPERATURES OF ONE DAY
//CALCULATE THE TEMPERATURE OF ONE DAY , CALCULATE THE TEMPERATURE AMPLITUDE, KEEP IN MIND THAT SOMETIMES THERE MIGHT BE A SENSOR ERROR."

//DEBUG: c
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) Understanding the problem.
//-what is temp amplitude? answer = difference between highest and lowest temp.
//- how to compute max and min temperatures?
//- what's a sensor error? and what to do?

//2)Breaking up into sub-problems

// How to ignore errors?
// Find max value in temp array
// Find min value in temp array
// SUbtract min from max (amplitude) an return it.

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min; //amplitude es la resta entre max and min.
};

//calcTempAmplitude([3, 7, 4, 23, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//-----------PROBLEM 2-------------------------------------------------------------------------//

//FUnction should now receive 2 arrays of temps
//1) Understanding the problem
// - with 2 arrays , should we implement functionality twice?? NO !!! jUST MERGE TWO ARRAYS.
//merge arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//---------------FUNCTION THAT RESEVES WHATEVER WE PASS INTO IT-------------------------------------------------------//

//EXAMPLES

//REVERSE ARRAY
let array = [1, 2, 3, 4, 5, 6, 7];

//MANUAL METHOD
let reverseArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reverseArray.push(array[i]);
}

console.log(array.reverse());

//REVERSE A TEXT
let name = 'Katherin';

//INTERNALY A TEXT IS STORED IN AN ARRAY
console.log(name.charAt(0));
console.log(name[1]);

//MANUAL METHOD
let reverseName = '';

for (let i = name.length - 1; i >= 0; i--) {
  reverseName += name[i];
}
console.log(reverseName);

//REVERSE NUMBERS
let number = 10977;
let numberString = String(number);
let reversedNumber = '';

for (let i = numberString.length - 1; i >= 0; i--) {
  reversedNumber += numberString[i];
}

console.log(reversedNumber);
console.log(Number(reversedNumber));

//----------------------------------------------------------------------------------------------------------------//

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    //c) FIX
    value: Number(prompt('Degrees celsius:')),
  };

  //B) FIND
  console.table(measurement);

  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
