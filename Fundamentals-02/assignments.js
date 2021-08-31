'use strict';

/* FUNCTIONS =

1. Write a function called 'describeCountry' which takes three parameters: 'country' , 'population'
and 'capitalCity'. Based on this input , the function returns a string with this format : 'Finland has 6 
million people and its capital city is Helsinki'

2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 
3 different variables , and log them to the console.
*/

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

let country1 = describeCountry('Spain', 13, 'madrid');

let country2 = describeCountry('Greece', 20, 'Athens');

let country3 = describeCountry('Italy', 10, 'Rome');

console.log(country1);
console.log(country2);
console.log(country3);

/* FUNCTIONS DECLARATIONS VS EXPRESSIONS =

1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' 
which receives a 'population' value, and returns the percentage of the world population that the given 
population represents. For example, China has 1441 million people , so it's about 18.2% of the world population.

2. To calculate the percentage , divide the given 'population' value by 7900 and then multiply by 100.
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, 
and log them to the console.
4. Create a function expression , which does the exact same thing , called 'percentageOfWorld2' , and also call
it with 3 country populations (can be the same populations).
*/

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

let countryChina = percentageOfWorld1(1441);

let countryItaly = percentageOfWorld1(60);

let countrySpain = percentageOfWorld1(50);

console.log(countryChina);
console.log(countryItaly);
console.log(countrySpain);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

let countryPolonia = percentageOfWorld2(1441);
let countryArgentina = percentageOfWorld2(60);
let countryPeru = percentageOfWorld2(50);

console.log(countryPolonia);
console.log(countryArgentina);
console.log(countryPeru);

/* ARROW FUNCTIONS =
1. Recreate the last assignment , but this time create an arrow function caled 'percentageOfWorld3'
*/

const percentageOfWorld3 = p => (p / 7900) * 100;

let countryKorea = percentageOfWorld3(1441);
let countryVietnam = percentageOfWorld3(60);
let countryRussia = percentageOfWorld3(50);

console.log(countryKorea);
console.log(countryVietnam);
console.log(countryRussia);

/* FUNCTIONS CALLING OTHER FUNCTIONS =
1. Create a function called 'describePopulation' . Use the function type you like the most . This function
takes in two arguments: 'country' and 'population' and returns a string like this : 'China has 1441 million 
people, which is about 18.2% of the world.'

2.To calculate the percentage, 'describePopulation' call the 'percentageOfWorld1' you created earlier

3. Call 'describePopulation' with data for 3 countries of your choice.
*/

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

function describePopulation(country, population) {
  const percentage = percentageOfWorld2(population);
  const description = `${country} has ${population} million
    people , which is about ${percentage} of the world`;
  console.log(description);
}

describePopulation('china', 1441);
describePopulation('latin', 2020);

/* INTRODUCCION TO ARRAYS =
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false).
3. Create an array called 'percentages' containing the percentages of the world population for these 4 
populations values . Use the function 'percentageOfWorld1' that you created earlier to compute the 4 
percentage value.
*/

let populationsArr = [1441, 60, 50, 30];

console.log(populationsArr.length === 4);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

let percentagesArr = [
  percentageOfWorld1(populationsArr[0]),
  percentageOfWorld1(populationsArr[1]),
  percentageOfWorld1(populationsArr[2]),
  percentageOfWorld1(populationsArr[3]),
];

console.log(percentagesArr);

/* BASIC ARRAY OPERATIONS (METHODS)=

1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country
which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country.
So add it to the end of the 'neighbours' array .
3. Unfortunately , after some time , the new country is dissolved. So remove it from the end of the array.
4. If the 'neighbours' array does not include the country 'Germany' , log to the console: 'Probably not a 
central European country :D'
5. Change the name of one of your neighbouring countries. To do that , find the index of the country in the 
'neighbours' array, and then use that index to change the array at that index position .For example , you can
search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

let neighbours = ['macarena', 'lolostr', 'poleome'];

neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
  console.log(`Probably not a central European
  country =D`);
}

neighbours[neighbours.indexOf('macarena')] = 'Republic of Macarena';
console.log(neighbours);

/* INTRODUCTION TO OBJECTS =
1. Create an object 'myCountry' for a country of your choice, containing properties 'country', 'capital',
'language' , 'population' and 'neighbours' (an array like we used in previous assignments)
*/

myCountry = {
  country: 'Finland',
  capital: 'kokoloco',
  language: 'another kokoloco',
  population: 6,
  neighbours: ['jfdsf', 'fsfsfds', 'werew'],
};

/* DOT VS BRACKET NOTATION =

1. Using the object from the previous assignment, log a string like this to the console:
` ${pais} has ${numero} million ${language}-speaking people, ${numero} neighbouring countries and a 
capital called ${name}`
2.Increase the country's population by two million using dot notation, and then decrease it by two 
million using brackets notation. 
*/

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking 
people, ${myCountry.neighbours.length} neighbouring countries and a  capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log();

myCountry['population'] -= 2;
console.log(myCountry.population);

/* OBJECT METHODS =

1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
*/

myCountry = {
  country: 'Finland',
  capital: 'kokoloco',
  language: 'another kokoloco',
  population: 6,
  neighbours: ['jfdsf', 'fsfsfds', 'werew'],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million 
        ${this.language} -speaking people, ${this.neighbours.length} neighbours countries and a capital called ${this.capital}`
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

/* ITERATION : THE FOR LOOP
1. There are elections in your country! In a small town, there are only 50 voters.
Use a for loop to simulate the 50 people voting, by logging a string like this to
the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

*/

for (let i = 0; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting.`);
}

/* LOOPING ARRAYS , BREAKING AND CONTINUING =

1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is
*/

let populationsArr = [1441, 60, 50, 30];
let percentages2 = [];

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

for (let i = 0; i < populationsArr.length; i++) {
  percentages2.push(percentageOfWorld1(populationsArr[i]));
}

console.log(percentages2);

/* LOOPING BACKWARDS AND LOOPS IN LOOPS

1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country
3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
worry if it's too difficult for you! But you can still try to figure this out anyway �
*/

let listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(` Neighbours: ${listOfNeighbours[i][j]}`);
  }
}

/* THE WHILE LOOP =

1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?
*/

const percentages3 = [];
let i = 0;
while (i < populationsArr.length) {
  const perc = percentageOfWorld1(populationsArr[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
