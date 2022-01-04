/*
1.Create an array 'events' of the different game events that happened (no duplicates).
2.After the game has finished , is was found that the yellow card from minute 64 was unfair . So remove this event from the game event log.
3.Print the following string to the console; : "An event happened , on average , every 9 minutes" (keep in mind that a game has 90 minutes)
4.Loop over the events and log them to the console , marking whether it's in the first half or second half (after 45 min) of the game , like this:
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

//SOLUTION
//1.

const event = [...new Set(gameEvents.values())];

console.log(event);

//[ 'GOAL', 'Substitution', 'Yellow Card', 'Red Card' ]

//2.

gameEvents.delete(64); //true

//3.

const time = [...gameEvents.keys()].pop();
console.log(time); //92
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//An event happened, on average, every 9.2 minutes

//4.

for (const [min, value] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`${half} [half] ${min} : ${event}.`);
}

/*First [half] 17 : GOAL,Substitution,Yellow Card,Red Card.
      First [half] 36 : GOAL,Substitution,Yellow Card,Red Card.
      Second [half] 47 : GOAL,Substitution,Yellow Card,Red Card.
      Second [half] 61 : GOAL,Substitution,Yellow Card,Red Card.
      Second [half] 69 : GOAL,Substitution,Yellow Card,Red Card.
      Second [half] 70 : GOAL,Substitution,Yellow Card,Red Card.
      Second [half] 72 : GOAL,Substitution,Yellow Card,Red Card.
      Second [half] 76 : GOAL,Substitution,Yellow Card,Red Card.
      Second [half] 80 : GOAL,Substitution,Yellow Card,Red Card.
      Second [half] 92 : GOAL,Substitution,Yellow Card,Red Card. */

/* NOTE: SPREAD OPERATOR
 In other words =

 - Unpack values
 - Expand values
 - It extracts values or properties from an array or object and puts the in the destination.
 */

//SPREAD OPERATOR WITH ARRAYS.

const arrExample = [1, 2, 3];

function calcSum(n1, n2, n3) {
  return n1 + n2 + n3;
}

console.log(calcSum(arrExample[0], arrExample[1], arrExample[2])); //6

console.log(calcSum(...arrExample)); //6

//NOTE: MERGE ARRAYS.

let numbers = [1, 2, 3, 4, 5, 6, 7];
const totalNumbers = [...numbers, 8, 9, 10];

console.log(totalNumbers); //[1, 2, 3, 4,  5,6, 7, 8, 9, 10]

//NOTE: CLONE ARRAYS.

const cloneArr = [...totalNumbers];
console.log(cloneArr); //[1, 2, 3, 4,  5,6, 7, 8, 9, 10]
