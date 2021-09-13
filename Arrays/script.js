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

If you need to break out of a loop then you have to keep going the for of loop
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

/*The key is exactly the same as the value = Well , a set doesn't have keys and it doesn't have index
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

//TITTLE: -------------------------COMPUTING USERNAMES--------------------------------//

/* 
const user = 'Steven Thomas Williams'; //stw
const username = user
  .toLocaleLowerCase()
  .split(' ')
  .map(
    function(name){
      return name[0];
    })
  .join('');
console.log(username);
*/

const user = 'Steven Thomas Williams'; //stw
const username = user
  .toLocaleLowerCase()
  .split(' ')
  .map(
    name => name[0] //return the first letter
  )
  .join('');
//console.log(username);
//(3) ["steven", "thomas", "williams"]
//(3) ["s", "t", "w"]
//stw

//NOTE: DATA FOR COMPUTING USERNAMES EXERCISE AND FOR EACH

console.log(`dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`);
const account1 = {
  owner: 'Cat Dog',
  movements: [800, 480, -600, 8000, -250, -230, 90, 1500],
  interestRate: 5.2,
  pin: 1254,
};

const account2 = {
  owner: 'Hot Dog',
  movements: [9000, 8400, -450, -990, -8210, -4000, 500, -70],
  interestRate: 5.5,
  pin: 6254,
};

const accounts = [account1, account2];

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0]) //return the first letter.
      .join('');
  });
};

createUserNames(accounts); // username: "cd" , username: "hd"
console.log(accounts);

//TITTLE: -------------------------THE FILTER METHOD--------------------------------//
/*Only the values that pass the condition will then make it into the new array*/
//NOTE: movements line 57

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits); //(5) [200, 450, 3000, 70, 1300]

//WITH FOR OF LOOP

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor); //(5) [200, 450, 3000, 70, 1300]

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals); // (3) [-400, -650, -130]

//TITTLE: -------------------------THE REDUCE METHOD--------------------------------//

/*NOTE:accumulator => snowball , reduce also loops over the array and calls this callback in each iteration, but now what
  will we actually do in each of these iterations , since the accumulator is the value that we will keep 
  adding to what we're gonna do here is to add the current value to the accumulator ,so the accumulator +
  the current value . And this works because in each call of  the callback function, the accumulator will
  be the current sum of all previous values and so we will really keep adding to this accumulator in each 
  iteration of the loop , Finally we also need to return this value here from the callback and so this is 
  how the new accumulator can then be used in the next iteration of the loop , so basically in each loop
  iteration we return the updated accumulator so the current one , plus the new current value and so like 
  this , we can then keep adding to it in the next iteration . So this callback function is the first argument
   of the reduce method , but the reduce method actually has another as a second parameter and that is the 
   initial value of the accumulator so the value that we specify in this case is gonna be zero is the initial
   value of the accumulator in the first loop iteration , we want to start adding at zero  */

//NOTE: REDUCE
/*const balance = movements.reduce(function (acc, curr, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
 Iteration 0: 0
 Iteration 1: 200
 Iteration 2: 650
 Iteration 3: 250
 Iteration 4: 3250
 Iteration 5: 2600
 Iteration 6: 2470
 Iteration 7: 2540
  return acc + curr;
}, 0);
console.log(balance); // 3840*/

//NOTE: REDUCE WITH ARROW FUNCTION

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance); // 3840

//NOTE: SOLUTION WITH FOR OF LOOP

let balance2 = 0; // we always need an external variable.

for (const mov of movements) balance2 += mov;
console.log(balance2); // 3840

//NOTE: MAXIMUN VALUE = In this case acc will keep track of the current maximun value.
/* We got 3000, So we started at 200 so in this iteration is the accumulator greater that the movement
 well, is it not and so return the current movement. But the first iteration in not that important it gets
 interesting here in the second one, So now our accumulator is at 200 and the current movement is at 450 . So 
 the (else statement)  is false again and so now we return to movement as the new accumulator in the next iteration .
 All right , and so in the next iteration that accumulator is 450 now, the current movement is -400 , and here
 is (450 > -400) ,Yes of course it is and so let's simply return the accumulator so that it stays the same 
 in the next iteration and so that's the logic all the way until the  end of the array and  by this , we then 
 end up with this maximun value */
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]); //====> movements[0] = 200
console.log(max); //3000

//TITTLE: Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);
  /* 
  [36,  4, 32, 2,76, 48, 28]
  [80, 40, 56, 36,40,  2, 32]*/
  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);
  /*
  [ 36, 32, 76, 48, 28 ]
  [ 80, 40, 56, 36, 40, 32 ]*/
  /*const average = adults.reduce((acc,age)=> acc + age ,0) / 
  adults.length;*/
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1); //44
console.log(avg2); //47.333

//TITTLE: ----------------------------CHAINING METHODS----------------------------------------//
//NOTE: 224 eurToUsd = 1.1 AND 57 movements
/*1) */

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD); //5522.00

//TITTLE: Coding Challenge #3

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an
 arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/
const calcAverageHumanAge2 = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg3 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
console.log(avg3); //4
const avg4 = calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);
console.log(avg4); //47.33

//TITTLE: --------------------------THE FIND METHOD----------------------------------------//
//NOTE: We can use the find method to retrieve one element of an array based on a condition.
/*THe find method also needs a callback function that returns a Boolean */

const firstWithdrawal = movements.find(mov => mov < 0); //Basically this here will return the first withdrawal.
console.log(movements); //[200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(firstWithdrawal); // -400

const account = accounts.find(acc => acc.owner === 'Cat Dog');
console.log(account); //{owner: "Cat Dog", movements: Array(8), interestRate: 5.2, pin: 1254, username: "cd"}

//TITTLE: --------------------------SOME AND EVERY----------------------------------------//

console.log(`SOMEEEE AND EVERYYYYYYYYYYYYYYYYYYY`);
console.log(movements);
console.log(movements.includes(-130)); //true

/*We can use the includes method to test if an array includes a certain value, now we can only really
test for equality, so basically includes here returns true if any value in the array is exactly equal to
-130, this is essentially testing for equality but what if we wanted to test for a condition instead
And so that's where this some method comes into play */

//EQUALITY
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits); //true

//SOME: CONDITION
console.log(movements.some(mov => mov === -130)); //true
const anyDeposits2 = movements.some(mov => mov > 0);
console.log(anyDeposits2); //false

//EVERY: CONDITION
console.log(movements.every(mov => mov > 0)); //false
console.log(account1.movements.every(mov => mov > 0)); //false

//SEPARATE CALLBACK
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); //true

//TITTLE: --------------------------------FLAT AND FLATMAP---------------------------------------//

//NESTED ARRAY:
const nestedArr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(nestedArr.flat()); //(8) [1, 2, 3, 4, 5, 6, 7, 8]

const nestedDeepArr = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(nestedDeepArr.flat(2)); //(8) [1, 2, 3, 4, 5, 6, 7, 8]

//FLAT
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance); // 13970

//FLAT MAP
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2); // 13970

//TITTLE: --------------------------------SORT METHOD---------------------------------------//

//NOTE: STRINGS
const owners = ['Juca', 'Nath', 'Ariel', 'Mile'];
console.log(owners.sort()); //["Ariel", "Juca", "Mile", "Nath"]
console.log(owners); //["Ariel", "Juca", "Mile", "Nath"] ---> is mutated!

//NOTE: NUMBERS
console.log(movements);
console.log(movements.sort()); //[-130, -400, -650, 1300, 200, 3000, 450, 70]

//return < 0, A, B (keep order)
//return > 0, B, A (switch order)

//Ascending
/*movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});*/

movements.sort((a, b) => a - b);
console.log(movements); //[-650, -400, -130, 70, 200, 450, 1300, 3000]

//Descending
/*movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});*/

movements.sort((a, b) => b - a);
console.log(movements); //[3000, 1300, 450, 200, 70, -130, -400, -650]

//TITTLE: -------------------------MORE WAYS OF CREATING AND FILLING ARRAYS---------------------------//
//NOTE: So far we have always simply created arrays like this :

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(
  x
); /*[empty × 7] ,This creates a new array with seven empty elements in there and it simply
contains nothing*/

/*NOTE: FILL METHOD = is a little similar to the slice method. In this method we can also specify where we want 
it to start to fill*/

x.fill(1, 3, 5);
console.log(x); //[empty × 3, 1, 1, empty × 2] ====> x.fill(1,3,5)
console.log(x); //[empty × 3, 1, 1, 1, 1] ====> x.fill(1,3)
console.log(x); //[1, 1, 1, 1, 1, 1, 1] ====> x.fill(1)

array.fill(23, 4, 6);
console.log(array); //[1, 2, 3, 4, 23, 23, 7]

//NOTE: we wanted to create this arr array programmatically , So we used Array.from() function.

//Array.from()
const y = Array.from({ length: 7 }, () => 1);
console.log(y); //[1, 1, 1, 1, 1, 1, 1]

const z = Array.from(
  { length: 7 },
  (_, i) => i + 1
); /*(_ this means a throwaway variable and in this
 case is good to use this convention because we do not need this current value at all)*/
console.log(z); //[1, 2, 3, 4, 5, 6, 7]

/*NOTE:This Array.from() was initially introduced into Javascript in order to create
Arrays from array like structures, things like strings , maps or sets they are iterables in
Javascript, and so they can be converted to real arrays using Array.from().

Another example is using querySelectorALl(), this one return something called a NodeList which is something 
like an array which contains all the selected elements but is not a real array, We would first need to 
convert the NodeList to an array and for that Array.from() is perfect */

/*
const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
console.log(movementsUI); // [div.movements__value, div.movements__value]

console.log(`array.from()--------------------`);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', '')) //this line is the second parameter.
  );
  console.log(movementsUI);
});
*/

/*[div.movements__value, div.movements__value, div.movements__value, div.movements__value, 
div.movements__value, div.movements__value, div.movements__value, div.movements__value]*/

// [1300, 70, -130, -650, 3000, -400, 450, 200]

/*NOTE:  Recap, We used Array.from() to create an array from the result of the querySelectorALl(), which is a 
NodeList , which is not really an array , but an array like structure and that array like structure can 
be easily be converted to an array using Array.from(), and then as a second step , we even included a mapping
function which then forms that initial array to an array exactly as we want it , So basically converting 
the raw element to its text content and replacing the Euro sign with nothing , in the end , we  end up exactly
with the array of numbers that we intented*/

//TITTLE:----------------------------ARRAY METHODS PRACTICE------------------------------------//

//1.NOTE: EXERCISE WITH FLATMAP FILTER AND REDUCE
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum); //28770

//2.NOTE:

/*const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;*/

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0); //or prefixed ++ operator =  ++count

console.log(numDeposits1000); //4

//3.NOTE:

const { deposits: a, withdrawals: b } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      //cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(a, b); // {deposits: 28770, withdrawals: -14800}

//4.NOTE:

const convertTittleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTittleCase('example and title')); //Example and Title
console.log(convertTittleCase('this is another EXAMPLE')); //This Is Another Example
console.log(convertTittleCase('Here is ANOTHER EXAMPLE WITH WITH WITH ....')); // Here Is Another Example with with with ....
console.log(convertTittleCase('and HERE IS another example')); //And Here Is Another Example

//TITTLE: Coding Challenge #4
/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

/*1. Loop over the array containing dog objects, and for each dog, 
calculate the recommended food portion and add it to the object as a new property. 
Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28.
 (The result is in grams of food,and the weight needs to be in kg)*/

//dogs.forEach(dog =>(dog.recFood = Math.trunc(dog.weight ** 0.75 * 28))
//);

dogs.forEach(function (dog, i) {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

/*2. Find Sarah's dog and log to the console whether it's eating too much or too little.*/

//console.log(dogs.find(d => d.owners.includes('Sarah')));

function findDogOwner(arr) {
  const dog = arr.find(dog => dog.owners.includes('Sarah'));
  console.log(dog);
  console.log(
    `Sarah's dog is eating too ${
      dog.curFood > dog.recommendedFood ? 'Much' : 'Little'
    }`
  );
}

//findDogOwner(dogs);

/*3 Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with 
all owners of dogs who eat too little ('ownersEatTooLittle').*/

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);

/*4. Log a string to the console for each array created in 3., like this:
 "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!" */

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!!'`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!!'`);

/* 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is 
recommended (just true or false)*/

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

/*6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)*/

const checkEatingOkay = dog =>
  dog.curFood > dog.recoomendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(checkEatingOkay));

/*7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition 
  used in 6.)*/
console.log(dogs.filter(checkEatingOkay));

/*8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending
 order (keep in mind that the portions are inside the array's objects) */

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
