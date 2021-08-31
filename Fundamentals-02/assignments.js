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

/**/
