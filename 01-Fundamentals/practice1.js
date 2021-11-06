//NOTE: LET AND VAR EXERCISE

/*Cannot access 'variable0 before initialization'.

console.log(variable0)
let variable0 = 'a';

*/

/*variable1 is not defined because is out of the scope.

{let variable1 = 'b'};
console.log(variable1)

*/

//The result is = c.
{
  let variable2 = 'c';
  console.log(variable2);
}

/*Implementing Hoisting.
The variable2 rises but the value of the variable remains in the line 29 ; 
therefore when the console.log is printed the result would be undefined.
*/

console.log(variable2);
var variable2 = 'd'; //undefined

/*SCOPE INSIDE A FUNCTION: 
What would happen if you replace let with var and use the console.log that 
it on line 44, the changes would come out normally it would mean that var is 
accessible from outside. 

NOW: console.log(i) if we print this after the {} for loop , an error would 
appear since i is only declared in the previous block.
*/

function start() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //console.log(i)
}

start(); //0 1 2 3 4
