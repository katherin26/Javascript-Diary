/* VALUES AND VARIABLES =

1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your
own country (population in millions) 
2. Log their values to the console.

*/
let country = 'Greece';
let continent = 'Europe';
let population = 10.72;

console.log(country, continent, population);

/* DATA TYPES =

1. Declare a variable called 'isIsland' and set its value according to your country. The variable should
hold a Boolean value . Also declare a variable 'language', but don't assign it any value yet.

2. Log the types of 'isIsland' , 'population' , 'country' and 'language' to the console.

*/

let isIsland = false;
let language;

console.log(typeof isIsland); //boolean
console.log(typeof population); //number
console.log(typeof country); //string
console.log(typeof language); //undefined

/* LET, CONST AND VAR =

1. Set the value of 'language' to the language spoken where you live.
2. Think about which variables should be const variables (which values will never change, and which might
    change?). Then, change these variables to const. 
3. Try to change one of the change variables now, and observe what happens.

*/
language = 'Griego';
//const country = 'Greece';
//const continent = 'Europe';
//const isIsland = false;

/* BASIC OPERATORS =

1. If your country split in half , and each half would contain half the population , then how many people 
would live in each half??
2. Increase the population of your country by 1 and log the result to the console.
3. FInland has a population of 6 millions . Does your country have more people than FInland??
4. The average population of a country is 33 million people . Does your country have less people than 
the average country.
5. Based on the variables your created , create a new variable 'description' which contains a string with 
this format 'Greece is in Europe, and its 10 million people speak griego'.
*/

console.log(population / 2); //5.36
population++;
console.log(population); //11.72

let finlandPopulation = 6;
console.log(finlandPopulation > population); //false

let averagePopulationCountry = 33;
console.log(averagePopulationCountry > population); //true
const description = `Greece is in Europe, and its 10 million people speak griego`;
console.log(description);
