/*Given a list of battlefield players, maps, and games, create a leader board score showing the scores in descending order*/

const players = [
  { id: 1, name: 'Ada', country: 'USA' },
  { id: 2, name: 'Jill', country: 'Guinea' },
  { id: 3, name: 'Kathe', country: 'England' },
  { id: 4, name: 'Isaac', country: 'Germany' },
  { id: 5, name: 'Bryan', country: 'Japan' },
];

const maps = [
  { id: 1, name: 'SOLOMON ISLANDS' },
  { id: 2, name: 'PACIFIC STORM' },
  { id: 3, name: 'WAKE ISLAND' },
];

const games = [
  {
    id: 1,
    mapId: 1,
    scores: [
      { playerId: 1, score: 2000 },
      { playerId: 2, score: 3000 },
      { playerId: 3, score: 2000 },
      { playerId: 4, score: 4000 },
      { playerId: 5, score: 2000 },
    ],
  },
  {
    id: 1,
    mapId: 1,
    scores: [
      { playerId: 1, score: 12000 },
      { playerId: 2, score: 4000 },
      { playerId: 3, score: 2000 },
      { playerId: 4, score: 1000 },
      { playerId: 5, score: 200 },
    ],
  },
  {
    id: 2,
    mapId: 2,
    scores: [
      { playerId: 1, score: 1000 },
      { playerId: 2, score: 2000 },
      { playerId: 3, score: 5000 },
      { playerId: 4, score: 2000 },
      { playerId: 5, score: 5000 },
    ],
  },
  {
    id: 3,
    mapId: 3,
    scores: [
      { playerId: 1, score: 7000 },
      { playerId: 2, score: 6000 },
      { playerId: 3, score: 5000 },
      { playerId: 4, score: 6000 },
      { playerId: 5, score: 5000 },
    ],
  },
];

//First step : Iteration over games nested array and creating a new array with only the scores.

let results = [];

for (let j = 0; j < games.length; j++) {
  //console.log(games[j]);
  for (let k = 0; k < games[j].scores.length; k++) {
    results.push(games[j].scores[k]);
  }
}

//Iteration over players and games and creating a new object with new Map();

const usingMap = new Map();

let resultUsingMap = [];
for (let i = 0; i < results.length; i++) {
  let sum = usingMap.get(results[i].playerId);
  if (sum === undefined) sum = 0;

  sum += results[i].score;
  usingMap.set(results[i].playerId, sum);
}

//The output : console.log(usingMap)
/*Map { 1 => 10000, 2 => 11000, 3 => 12000, 4 => 12000, 5 => 12000 }*/

//Getting Getting Final Results.

let finalResults = [];
for (let [playerId, totalScore] of usingMap.entries()) {
  const found = players.find(el => el.id === playerId);
  finalResults.push({ playerId, playerName: found.name, totalScore });
}

//Sorting the results

finalResults.sort(function (x, y) {
  return y.totalScore - x.totalScore;
});

//Print the final Results name and score .

for (const values of finalResults) {
  console.log(`Name: ${values.playerName} Score: ${values.totalScore}`);
}
