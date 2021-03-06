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

//NOTE: REST OPERATOR.

const people = {
  name: 'Lupe',
  age: 15,
  country: 'Mexico',
};

const { name, ...others } = people;
console.log(name); //Lupe
console.log(others); //{age:15, country: 'Mexico'}

function greetPeople({ name, ...otherProps }) {
  console.log(
    `Hello ${name}, you have this props ${JSON.stringify(otherProps)}`
  );
}

greetPeople(people); //Hello Lupe, you have this props {"age":15,"country":"Mexico"}

//NOTE: Exercise with arrays.

let person1Data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let person2Data = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//Copy of the array.

let person1DataCopy = [...person1Data];
console.log(person1DataCopy);
//[1, 2, 3, 4,  5,6, 7, 8, 9, 10]

//Slice Method.

let correctPerson1Data = person1DataCopy.slice(1, 3);
console.log(correctPerson1Data); //[2,3]

//NOTE: CONCAT

let totalData = person1Data.concat(person2Data);

console.log(totalData);

/*[
   1,  2,  3,  4,  5,  6,  7,
   8,  9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20
] */

//NOTE: Using for each to iterate and print the value in the array.

totalData.forEach(function (current, i, arr) {
  if (current > 3) {
    console.log(
      `Dog number ${i + 1} is an adult, and is ${current} yearls old.`
    );
  } else {
    console.log(`Dog number ${i + 1} is still a puppy!!`);
  }
});

//NOTE: EXERCISE WITH FOREACH, FIND AND ARRAYS.

const plants = [
  { weight: 10, brandFood: 'Organic Food', owners: ['lily', 'Peace'] },
  { weight: 5, brandFood: 'Organic Food', owners: ['Mathew', 'lop'] },
  { weight: 1, brandFood: 'Organic Food', owners: ['Marcus', 'Prim'] },
  { weight: 4, brandFood: 'Organic Food', owners: ['Lola'] },
];

//Using for each loop over the array ann print the weight of each flower.

plants.forEach(el => console.log(el.weight)); //10 5 1 4

//Find Marcus's in the array and log the weight of the plant and the brand food.

function findPlant(arr) {
  const plant = arr.find(plant => plant.owners.includes('Marcus'));
  console.log(
    `Marcus plant is eating ${plant.brandFood} and the weight: ${plant.weight} lb`
  );
}

console.log(findPlant(plants)); //Marcus plant is eating Organic Food and the weight: 1 lb

//NOTE: USING MAP().
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);
console.log(doubled);
//[2,4,6,8,10]

//Square Roots.

let numbers2 = [1, 4, 9];
let roots = numbers2.map(function (num) {
  return Math.sqrt(num);
});
console.log(roots);
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]

//Reformat objects in an array.

let arrExample = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

let reformattedArr = arrExample.map(obj => {
  let newObj = {};
  newObj[obj.key] = obj.value;
  return newObj;
});

console.log(reformattedArr);
//[{'1':10},{'2':20},{'3':30}]

//Filtered numbers with map().
let numbers3 = [1, 2, 3, 4];
let filteredNumbers = numbers3.map(function (num, index) {
  if (index < 3) {
    return num;
  }
});

console.log(filteredNumbers);
// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]
