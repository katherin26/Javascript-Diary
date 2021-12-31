//NOTE: Destructuring objects.

const game = {
  team1: 'chest 1',
  team2: 'chest 2',
  players: [
    ['Gorsssi', 'Pavard', 'Martinez'],
    ['Brandt', 'Sancho', 'Gotze'],
  ],
  score: '4:0',
  scored: ['Gorsssi', 'Pavard', 'Martinez'],
  date: 'Nov 9th, 2021',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Destructuring Object game in player1 and player2 variable.

let [players1, players2] = game.players;
console.log(players1); //[ 'Gorsssi', 'Pavard', 'Martinez' ]
console.log(players2); //[ 'Brandt', 'Sancho', 'Gotze' ]

//Destructuring, rest syntax.
//add a new variable called chestLeader and use rest operator for the rest of the players.

let [chestLeader, ...rest] = players1;
console.log(chestLeader); //Gorsssi
console.log(rest); //[ 'Pavard', 'Martinez' ]

//Spread operator.
//Create a new variable called allPlayers using rest operator and spread operator.

let allPlayers = [...players1, ...players2];
console.log(
  allPlayers
); /*[ 'Gorsssi', 'Pavard', 'Martinez', 'Brandt', 'Sancho', 'Gotze' ] */

//Spread operator and adding values at the end.
let players1Final = [...players1, 'Gonzales', 'loo', 'li'];
console.log(players1Final);
/*[ 'Gorsssi', 'Pavard', 'Martinez', 'Gonzales', 'loo', 'li' ] */

///NOTE: Using spread and rest operator merch starterMenu and mainMenu in one single variable called menu, then print each value using a for of loop.

const restaurant = {
  name: 'CLassico Italiano',
  location: 'Via Angelo Tavanti 23,Firenze, Italy',
  categories: ['Italian', 'Pizzeria', ' Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}
