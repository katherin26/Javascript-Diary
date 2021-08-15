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

//TITTLE: FOREACH WITH MAPS AND SETS

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
