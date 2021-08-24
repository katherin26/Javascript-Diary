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

//TITTLE: MATH AND ROUNDING

//NOTE: SQUARE ROOT

console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2

//NOTE: MAXIMUN VALUE

console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); //23
console.log(Math.max(5, 18, '23px', 11, 2)); //NaN

//NOTE: MATH MIN
console.log(Math.min(5, 18, 23, 11, 2)); //2

//NOTE: MATH PI
console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592

//NOTE: MATH TRUNC AND MATH RANDOM
console.log(Math.trunc(Math.random() * 6) + 1); //6

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
//0...1 -> 0...(max - min) -> min ...max
console.log(randomInt(15, 20));
/*Why (max-min) = It is because , it gives us a number between zero and one so Math.random is between 0 and 1
So if we multiply this by max - min then we get a number between 0 and max - min and now if we add min to all
of this so the minimun value then we get min to max minus min plus min, So we added min on both sides here
basically of the equation and so then we can cancel this minus min plus min , and we end up with a range
between the minimun and the maximun value that we specified .*/

//ROUNDING INTEGERS
//Math Round
console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24
//Math Ceil
console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24
//Math Floor
console.log(Math.floor(23.3)); //23
console.log(Math.floor('23.9')); //23
//Math Trunc
console.log(Math.trunc(23.3)); //23

//When is Math.trunc and Math.ceil
//NOTE: Math.trunc and Math.ceil = Both cut off the decimal part when we are dealing with positive numbers.

//When is Math.trunc or Math.floor
console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24
//NOTE: floor now gets rounded to -24, Because with negative numbers rounding works the other way around
//And so actually a floor is a little bit better than trunc because it works in all situations.

//ROUNDING DECIMALS
console.log((2.7).toFixed(0)); //3 = String
console.log((2.7).toFixed(3)); //2.700 = String
console.log((2.7).toFixed(2)); //2.70 = String
console.log(+(2.7).toFixed(2)); //2.7 = Number = because we add (+)

/*NOTE: This works in a similar way than the string methods, this is a number , so it's a primitive
and primitives actually don't have methods and so behind the scenes , Javascript will do boxing and boxing 
is basically transform this (2.7) to a number object , then call the method on that object and then once 
the operation is finished it will convert it back to a primitive. */

//TITTLE: THE REMAINDER OPERATOR

console.log(5 % 2); //1

console.log(5 / 2); //2.5 // 5 = 2 *2 + 1 ===> 1 is the remainder

console.log(8 % 3); //2
console.log(8 / 3); //2.6 // 8 = 2 * 3 + 2

console.log(6 % 2); //0
console.log(6 / 2); //3
console.log(7 % 2); //1
console.log(7 / 2); //3.5

const isEven = n => n % 2 === 0;
console.log(isEven(8)); //true
console.log(isEven(23)); //false
console.log(isEven(514)); //true
