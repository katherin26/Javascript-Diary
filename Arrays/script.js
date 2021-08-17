'use strict';
//TITTLE: --------------------------------METHODS--------------------------------------//
let arr = ['a', 'b', 'c', 'd', 'e'];

//TITTLE: -------------SLICE = We can extract part of any array, but without changing the original array.------//

console.log(arr.slice(2)); //first parameter = index at which we will start extracting , return a new array.
//(3) ["c","d","e"]

console.log(arr.slice(2, 4)); //(2) ["c","d"]

//NOTE: NEGATIVES

console.log(arr.slice(-2)); //(2) ["d", "e"]

console.log(arr.slice(1, -2)); //(2) ["b", "c"]

//NOTE: CREATE A SHALLOW COPY
//We can use this is when you want to chain multiple methods together , calling one after the other.
console.log(arr.slice()); //(5) ["a", "b", "c", "d", "e"]

//NOTE: SAME RESULT WITH SPREAD OPERATOR
console.log([...arr]); // (5) ["a", "b", "c", "d", "e"]

//TITTLE: ---------------------------SPLICE = Splice change the original array---------------------------------//

//console.log(arr.splice(2)); //(3) ["c", "d", "e"] = it takes part of the array.
console.log(arr.splice(-1)); //remove the last element // ["e"]
console.log(arr); //(2) ["a", "b"]

//TITTLE: -----------------------------------REVERSE-------------------------------------------------//
//NOTE: this method does actually mutate the original array.
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

//TITTLE: -----------------------------------CONCAT--------------------------------------------------//

const letters = arr.concat(arr2);
console.log(letters); //(9) ["a", "b", "c", "d", "f", "g", "h", "i", "j"]

//NOTE: SAME RESULT WITH SPREAD OPERATOR = and not mutate any of the involved arrays.
console.log([...arr, ...arr2]); //(9) ["a", "b", "c", "d", "f", "g", "h", "i", "j"]

//TITTLE: ------------------------------------JOIN---------------------------------------------------//

console.log(letters.join('-')); // a-b-c-d-f-g-h-i-j

//TITTLE: -----------------------------LOOPING ARRAYS = forEach--------------------------------------//

//NOTE: forEach is technically a higher order function, which requires a callback function in order to tell it
//what to do.
//forEach loop over the array and in each iteration it will execute this callback function.
//Also as the forEach method calls this callback function in each iteration it will pass in the current element
//It's a lot easier of the array as an argument to get access to the current index, We can specify them in our
//parameter list

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  //entries return an array of arrays
  if (movement > 0) {
    console.log(`Movement ${i + 1}: ,You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); //Math.abs() remove the sign
  }
}

movements.forEach(function (movement, i, arr) {
  //current element,current index ,entire array
  if (movement > 0) {
    console.log(`Movement ${i + 1}: ,You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`); //Math.abs() remove the sign
  }
});

//in iteration 0: function(200)
//in iteration 1: function(450)
//in iteration 2: function(400)
//....

//NOTE: When should you use forEach and for of =
/*
1) You cannot break out of the  forEach Loop, So the continue and break statements do not work in a forEach
loop at all. ForEach will always loop over the entire array .

If you need to break out of a loop then you have to keep isong the for of loop
*/

//TITTLE: ----------------------FOREACH WITH MAPS AND SETS----------------------------------------------//

/*NOTE: This is an array of arrays and this inner array will be one entry of the map ,
where this 'USD' is the key and 'United States dollar' is the value , and so we can call forEach also on 
a map.*/

//NOTE: MAP AND FOREACH

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

/*
USD: United States dollar
EUR: Euro
GBP: Pound sterling*/

//NOTE: SET AND FOREACH

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); //Set(3) {"USD", "GBP", "EUR"}

/*currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});*/

currenciesUnique.forEach(function (value, _value, map) {
  console.log(`${value}: ${value}`);
});
/*
USD: USD
GBP: GBP
EUR: EUR
*/

/*The key is exactly the same as the value = Well , a set doesn't have keys and it doesn't have indexes
either and so there is no value that would make sense for the  key , so essentially this key here makes no
sense at all */

//TITTLE: Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). For now, they are just interested in knowing 
whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy 
if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and 
does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So
 create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a 
 bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 
years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets


TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

function checkDogs(dogsJulia, dogsKate) {
  let copyDogsJulia = [...dogsJulia];
  let copyDogsKate = [...dogsKate];
  let correctDogsJulia = copyDogsJulia.slice(1, 3);
  let totalDogs = correctDogsJulia.concat(copyDogsKate);

  totalDogs.forEach(function (current, i, arr) {
    if (current >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult, and is ${current} years old`
      );
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶!!`);
    }
  });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//TITTLE:------------------DATA TRANSFORMATIONS : MAP , FILTER , REDUCE---------------------------------//

/*MAP = The map method is another method that we can use to loop over arrays, so map is similar
to the forEach method but with the difference that map creates a  new array based on the original array.
So essentially the map method takes an array, loops over that array and in each iteration it applies a callBack
function  that we specify on our code to the current array element.

Example = in this array we say that each element should be multiplied by two

1) original array = [3,1,4,3,2]

MAP = current * 2 ======> [6,2,8,6,4] = map returns a new array containing the results of applying an operation
on all original array elements.
*/

/*FILTER =  Is used to filter elements in the original array which satisfy a certain condition

Example = So in this example we are only looking for elements greater than two , so all the elements that 
pass the test that we specified will make it into a new filtered array, In other words elements for which the 
condition is true will be included in a new array that the filter method returns, all other elements will
get filtered out so they will not be included in the new array

2) original array = [3,1,4,3,2];

FILTER = current > 2 ======> [3,4,3] = filter returns a new array containing the array elements that passed a 
specified test condition.
*/

/*REDUCE = An example of this can be to add all the elements of an array together 

acc = Accumulator variable 
-- then as the reduce method loops over the array it keeps adding the current element
into the accumulator until at the end of the loop we have the total sum of all the elements

3) original array = [3,1,4,3,2] ===> acc + current = 13

REDUCE = ======> = Reduce boils ("reduces") all array elements down to one single value (e.g adding all elements
  together)
*/

//TITTLE: ----------------------------------THE MAP METHOD----------------------------------------------//

//NOTE: LINE 57 ARRAY MOVEMENTS

const eurToUsd = 1.1;

/*const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});*/

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

//NOTE: Solution with for of === > Here we simply loop over one array and then manually create a new one.
const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * eurToUsd);
console.log(movementUSDfor);

//NOTE: ARROW FUNCTION , MAP AND RETURNIG VALUES
/*const movementsDescriptions = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withDrew ${Math.abs(mov)}`;
  }
});*/

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'Withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
/*8) ["Movement 1: You deposited 200", "Movement 2: You deposited 450",
 "Movement 3: You withDrew 400", "Movement 4: You deposited 3000", "Movement 5: You withDrew 650", 
 "Movement 6: You withDrew 130", "Movement 7: You deposited 70", "Movement 8: You deposited 1300"] */
