//NOTE: ITERATE OVER AN ARRAY OF NAMES.

let names = ['Pepe', 'Giro', 'Lulu'];

//Method 1 = Regular For Loop.

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
} //Pepe Giro Lulu

/*Method 2 : Using For Of Loop.
For of automatically iterates over the values of an array, so you don't need to deal with the key(index).
*/

for (let name of names) {
  console.log(name);
} //Pepe Giro Lulu

/*Method 3 : Using For In Loop
For In automatically iterates over the keys of an array.
*/

for (let index in names) {
  console.log(names[index]);
} //Pepe Giro Lulu

/*Method 4 : Using forEach()
Executes the given function for every element in the array.
*/

names.forEach(function (cur, i) {
  console.log(cur); //Pepe Giro Lulu
  console.log(i); //0 1 2
});

//NOTE: Using map change the name to uppercase.

let patients = [
  {
    name: 'John',
    temp: 38,
  },
  {
    name: 'Eva',
    temp: 39,
  },
  {
    name: 'Ocelot',
    temp: 40,
  },
  {
    name: 'Snake',
  },
];

function converttoUpperCase(arr) {
  let newObj = arr.map(function (paciente) {
    let objClone = { ...paciente };
    objClone.name = objClone.name.toUpperCase();

    return objClone;
  });
  return newObj;
}
console.log(converttoUpperCase(patients));

/*NOTE: ARRAY FILTERING 
Filtering an array means checking that every element meets a certain condition and the add these elements to other array.
 */

//Array of numbers.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*Get even numbers.
Method 1 : Use for Loop and create a new array to store even numbers.

This block executess for every element in the array.
First check number is even using mod operator.
If num at index i has a mod of 2 equal 0, it meas is an even number.
Then add number at index i to evenNumbers1 array.
*/

let evenNumbersNew = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) evenNumbersNew.push(nums[i]);
}

console.log(evenNumbersNew);

/*NOTE: METHOD 2 
Using Array.prototype.filter().

The given function will be executed for every element in the array, when the function results true the element will be 
added to the result array.
*/

let evenNumbers2 = nums.filter(function (num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(evenNumbers2);

/*NOTE: Bonus, using shorthand syntax with arrow function, it does exactly the same. */

let evenNumber3 = nums.filter(n => n % 2 === 0);
console.log(evenNumber3);

/*NOTE: ARRAY MAPPING 
Mapping an array means processing every element using a mapping function, the return value of the mapping function will
be added to a result array.
An array of pet objects.
*/

//An array of pet objects

let pets = [
  { name: 'Deda', age: 2 },
  { name: 'Bisac', age: 2 },
  { name: 'Julieth', age: 2 },
];

/*First : Create a new array with the same pets but with their names in uppercase.
Clone object to avoid modifying the original.
Convert name to uppercase and reassign it to the name property.
Once the processing is finished, add the processed element to the result array.
*/

//Method 1 : Using for of Loop.

let petsWithUpperCaseName = [];
for (let pet of pets) {
  let petClone = { ...pet };
  petClone.name = petClone.name.toUpperCase();
  petsWithUpperCaseName.push(petClone);
}

console.log(petsWithUpperCaseName);
