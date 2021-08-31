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

/* STRINGS AND TEMPLATE LITERALS = 
1. Recreate the 'description' variable from the last assignment , this time using the template literal syntax.

*/

console.log(
  `${country} is in ${continent}, and its ${population} million speak ${language}`
);

/* TAKING DECISIONS : IF/ELSE STATEMENTS 

1. If your country's population is greater that 33 million , log a string like this to the console:
'Portugal's population is 22 million below average'(the 22 is the average of 33 minus the country's population)
2. After checking the result, Change the population temporarily to 13 and then to 130 . See the different 
results, and set the population back to original.

*/

if (country > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

/* TYPE CONVERSION AND COERCION =
1. Predict the result of these 5 operations without executing them: 

            '9' - '5';
            '19' - '13' + '17';
            '19' - '13' + 17;
            '123' < 57;
             5 + 6 + '4' + 9 - 4 - 2;
  
*/

//4 - 617 - 23 -  false - 1143

/* EQUALITY OPERATORS : == VS ===
1. Declare a variable 'numNeighbors' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbor, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbors'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbors', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbors'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbors' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation
*/

let numNeighbors = Number(
  prompt(`How many neighbour countries does your country
have?`)
);

if (numNeighbors === 1) {
  console.log(`Only 1 border!!`);
} else if (numNeighbors > 1) {
  console.log(`More than 1 border!!`);
} else {
  console.log(`No borders !!`);
}

/* LOGICAL OPERATORS =

1. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
2. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
3. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
4. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
  
Canada :D)
*/
