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
