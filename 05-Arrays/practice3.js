/*NOTE: COMBINING AND SLICING ARRAYS */

const animals = ['Dog', 'Cat', 'Bird', 'Guinea Pig'];

const animals2 = ['Bunny', 'Butterfly', 'Pig', 'Snake'];

//Concat method

const combined = animals.concat(animals2);
console.log(combined); //['Dog',   'Cat','Bird',  'Guinea Pig','Bunny', 'Butterfly','Pig',   'Snake'];

/*Slice method
We have 2 ways :
start : number
end : number
*/

//slice(2) prints all elements from position 2 .
const slice = combined.slice(2);
console.log(slice); //[ 'Bird', 'Guinea Pig', 'Bunny', 'Butterfly', 'Pig', 'Snake' ]

//slice(2,4) take a piece from position 2 to 4
const slice2 = combined.slice(2, 4);
console.log(slice2); //[ 'Bird', 'Guinea Pig' ]

/*slice() clone the array
In consideration: If you are dealing with primitive data,
these primitives will be copied to a target array but if you have objects 
they are not copied they are referenced.*/

const clone = combined.slice();
console.log(clone); //['Dog',   'Cat','Bird',  'Guinea Pig','Bunny', 'Butterfly','Pig',   'Snake']
