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
