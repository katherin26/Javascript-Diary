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
