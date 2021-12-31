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

//NOTE: ENHANCED OBJECT LITERALS AND COMPUTED PROPERTIES.

//ES5

/*We are creating an object. Prior to ES6, if we want to initialize a property in an object using object literals, we will do the following. */

function getLaptop(make, model, year) {
  return {
    make: make,
    model: model,
    year: year,
  };
}
/*{ make: 'Apple', model: 'Mackbook', year: '2015' } */

let result1 = getLaptop('Apple', 'Mackbook', '2015');
console.log(result1);

//ES6

/*ES6 Removes all of that repetetition. Here's how we will write our getLaptop function. */

function getLaptop2(make, model, year) {
  return {
    make,
    model,
    year,
  };
}

let result2 = getLaptop2('Acer', 'Laptop', '2021');
console.log(result2);

/**{ make: 'Acer', model: 'Laptop', year: '2021' } */

//COMPUTED PROPERTIES AND OBJECT LITERALS.

/*There are two ways to specify a key when accessing an object property: the dot notation and bracket notation. The bracket notation allows us to access a property using expressions. Computed property names allows to us write an expressions wrapped in square brackets instead of the regular property name. Whatever the expression evaluates to will become the property name. This means that we can do this.

The value of name was Computed to make and this was used as the name of the property. This is why we can access the property using laptop.make;
 */

var name = 'make';
const laptop = {
  [name]: 'Apple',
};
console.log(laptop.make); //Apple

//Similarly, This will work.

var name = 'make';
var i = 0;

const laptop2 = {
  [name + ++i]: 'Apple',
  [name + ++i]: 'Dell',
  [name + ++i]: 'HP',
};

console.log(laptop2.make1);
console.log(laptop2.make2);
console.log(laptop2.make3);