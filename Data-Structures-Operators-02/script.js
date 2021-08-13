'use strict';
/* NOTE:
We're building a football betting app!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1) se usa destructuring para players array

const [players1, players2] = game.players;
console.log(players1, players2); // esto extrae 2 arrays con los nombres de los jugadores.

//2)

const [gk, ...fieldPlayers] = players1; // Rest operator
console.log(gk, fieldPlayers); // never (10)  ['Pavard etc...']

//3)
const allPlayers = [...players1, players2]; //  Spread operator.
console.log(allPlayers);

//4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final); //Spread operator y se agrega los 3 ultimos jugadores al array.

//5)
// const { team1, draw, team2 } = game.odds;
// console.log(team1, draw, team2); //1.33 undefined 6.5

// const { odds } = game;
// console.log(odds); //{team1:1.33 , x:3.25, team2:6.5}

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2); // 1.33 3.25 6.5

//6)
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

//printGoals('Davies', 'Muller', 'Lewandoski'); //3 goals were scored
printGoals(...game.scored); //Spread operator //4 goals were scored

//7)
team1 < team2 && console.log('Team 1 is more likely to win'); // AND operator
team1 > team2 && console.log('Team 2 is more likely to win');

//NOTE: CHALLENGE PART 2
//1)
/*Loop over the game.scored array and print each player name 
to the console, along with the goal number (example:'Goal 1: lewandoski')*/

for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1} : ${player}`);

/*
 Goal 1 : Lewandowski
 Goal 2 : Gnarby
 Goal 3 : Lewandowski
 Goal 4 : Hummels
*/

//2)
/*Use a loop to calculate the average
odd and log it to the console (We already studied how to calculate averages)*/

let avg = 0;
const odds = Object.values(game.odds);
for (const odd of odds) avg += odd;
avg /= odds.length;
console.log(avg); //3.693333

//3)
/*Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of Victory Bayern Munich : 1 :33
Odd of Draw : 3.25
Odd of VIctory Borrusia Dortmund: 6.5*/

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

/*
Odd of Victory Bayern Munich 1.33
Odd of draw 3.25
Odd of Victory Borrussia Dortmund 6.5
*/

//4)
/*CREATE an object called 'scorers' which contains the names of the players who scored as properties ,
and the number of goals as tha value . In this game , it will look like this:/*

//{Gnarby:1,
//Hummels:1,
//Lewandowski:2
//}

/*So the solution is to loop over the array, and add the array elements as object properties, 
  and then increase the count as we encounter a new occurence of a certain element.*/

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

/*
Lewandowski: 2, Gnarby: 1, Hummels: 1}
Gnarby: 1
Hummels: 1
Lewandowski: 2  
*/

//TITTLE:--------------------------CONTINUE WITH THE FOOTBALL BETTING APP------------------------------//

/*This time , we have a map with a log of the events that happened during the game. 
The values are the events themselves , and the keys are the minutes in which each 
event happened (a football game has 90 minutes plus some extra time).

1.Create an array 'events' of the different game events that happened (no duplicates).
2.After the game has finished , is was found that the yellow card from minute 64 was unfair . 
So remove this event from the game event log.
3.Print the following string to the console; : "An event happened , on average , every 9 minutes" 
(keep in mind that a game has 90 minutes)
4.Loop over the events and log them to the console , marking whether it's in the first half or 
second half (after 45 min) of the game , like this:
     [FIRST HALF] 17 : GOAL*/

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow Card'],
  [69, 'Red Card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow Card'],
]);

//1)
const event = [...new Set(gameEvents.values())];
console.log(event); //(4) ["GOAL", "Substitution", "Yellow Card", "Red Card"]

//2)
gameEvents.delete(64);

//3)
const times = [...gameEvents.keys()].pop();
console.log(times);

/*[
  17, 36, 47, 61, 69,
  70, 72, 76, 80, 92
]  --- when we added pop() // 92 que es el ultimo minuto del partido*/
console.log(
  `An event happend, on average ,every ${times / gameEvents.size} minutes` //92/10
);

//4)
for (const [min, value] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`${half} [HALF] ${min}: ${event}`);
}

//TITTLE:--------------------------CHALLENGE WITH STRING------------------------------//
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.body.append(document.createElement('p'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  //NOTE: SPLIT THE TEXT
  let list = text.split('\n');
  // console.log(list);//split lo convierte en array DE 5 ELEMENTOS.

  //NOTE: FOR LOOP AND INVOKING A FUNCTION
  let newArr = []; //THis solution when you use  a array variable.
  let newList = ''; //This solution when you use a string variable.
  for (let [i, text] of list.entries()) {
    let newText = toCamelCase(text);
    newArr.push(newText);
    newList += newText + `\n`;
  }

  //NOTE: FUNCTION TO CAMELCASE WITH DESTRUCTURING
  function toCamelCase(str) {
    const [a, b] = str.trim().split('_');
    return a.toLowerCase() + b[0].toUpperCase() + b.slice(1).toLowerCase();
  }

  document.querySelector('p').textContent = newArr.join('\n'); //Show the new list.
  console.log(newList); //Show the new list in the console.
});

//NOTE: ---------------------------SOLUTION WITH REPLACE---------------------------------//
/*
document.querySelector('button'),
  addEventListener('click', function () {
    const text = document.querySelector('texttarea').value;
    const rows = text.split('\n');
    console.log(rows);

    for (const [i, row] of rows.entries()) {
      //added desctrunturing and entries() + repeat(i+1)
      const [first, second] = row.toLowerCase().trim().split('_'); //aqui ya se hace el lowercase , trim y split de todo el row para que despues se haga el uppercase.
      const output = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
      )}`; //replace (variable name and index , el segundo parametro es por lo que se quiere reemplazar.)
      console.log(`${output.padEnd(20)}${'*'.repeat(i + 1)}`);
    }
  });
*/

//TITTLE: ---------------------FLIGHT EXERCISE WITH STRING-----------------------------//

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

/* 🔴 Delayed Departure from FAO to TXL (11h25)
             Arrival from BRU to FAO (11h45)
  🔴 Delayed Arrival from HEL to FAO (12h05)
           Departure from FAO to LIS (12h30)*/

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ''
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(36);
  console.log(output);
}
