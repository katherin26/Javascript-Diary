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
