/*Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:*/

function stringToNumber(str) {
  return parseInt(str);
}

/*Given an array of integers your solution should find the smallest integer.
  
  For example:
  
  Given [34, 15, 88, 2] your solution will return 2
  Given [34, -345, -1, 100] your solution will return -345
  You can assume, for the purpose of this kata, that the supplied array will not be empty. 
  */

function findSmallestInt(args) {
  let smallest = args[0];

  for (let i = 0; i < args.length; i++) {
    if (args[i] < smallest) {
      smallest = args[i];
    }
  }
  return smallest;
}

/*Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".*/

function problem(x) {
  if (typeof x !== 'number') return 'Error';

  return x * 50 + 6;
}

/*Let's play! You have to return which player won! In case of a draw return Draw!.*/

const rps = (p1, p2) => {
  if (p1 == p2) return 'Draw!';

  if (p1 == 'rock' && p2 == 'scissors') return 'Player 1 won!';
  else if (p1 == 'scissors' && p2 == 'paper') return 'Player 1 won!';
  else if (p1 == 'paper' && p2 == 'rock') return 'Player 1 won!';
  else return 'Player 2 won!';
};

/*Given a string, you have to return a string in which each character (case-sensitive) is repeated once.*/

function doubleChar2(str) {
  return str
    .split('')
    .map(function (c) {
      return c + c;
    })
    .join('');
}

/*Remove the duplicate*/

function doubleChar(str) {
  return [...new Set(str)].join('');
}

/*Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
  
  The Task
  Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
  Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.*/

let languageObj = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso',
};

function hello(language) {
  for (const property in languageObj) {
    if (property == language) {
      return languageObj[property];
    }
  }
  return 'Welcome';
}

console.log(hello('spanish'));
