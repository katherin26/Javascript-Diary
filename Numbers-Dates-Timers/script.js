'use strict';

//TITTLE: CONVERTING AND CHECKING NUMBERS

/*NOTE: All numbers are presented internally as floating point numbers, So basically , always as decimals .
Also , numbers are represented internally  in a 64 base 2 format , So that means that numbers are always 
stored in a binary format*/

console.log(23 === 23.0); //true

/*Base 10 - 0 to 9
1/10 = 0.1 
3/10 = 3.333*/

/*Binary base 2 - 0 1 */

console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

//CONVERSION
console.log(Number('23')); //23
//+ = this works because when Javascript sees the plus operator, it will do type coercion
console.log(+'23'); //23

//PARSING
console.log(Number.parseInt('30px')); //30 = The string needs to start with a number
console.log(Number.parseInt('e23')); //NaN

console.log(Number.parseFloat('2.5rem')); //2.5
console.log(Number.parseFloat('2.5rem')); //2.5

//isNaN = Check if value is NaN

console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(20 / 0)); //false//

//isFinite = Checking if value is number.

console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20X')); //false
console.log(Number.isFinite(20 / 0)); //false

//isInteger

console.log(Number.isInteger(23)); //True
console.log(Number.isInteger(23.0)); //True
console.log(Number.isInteger(23 / 0)); //False
