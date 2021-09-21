'use strict';

/*NOTE: What gets logged when I try to log fetch?? */

console.log(fetch);

/*What happens when you console.log(fetch) really depends on you current enviroment. If you console.log it in a 
browser version that has a window.fetch method, you will log the fetch function. If you have an older browser, 
or are not in a browser enviroment, you will receive a Reference Error. */

/*NOTE: What gets logged in the following scenario?? */

console.log(2 + '1');
console.log(2 - '1');

/* "21" 1 =
The first expression evaluates to "21" because the + operator results in string concatenation when either operand 
is a string. On the other hand, the - operator cannot act on string so "1" gets converted to a number in the eva-
luation of the second expression.
*/

/*NOTE: Consider the following code block. What gets logged?? */

console.log(typeof Object, typeof Array, typeof Number); // function function function

/*Because Objec, Array, Number are all constructors functions*/

/*NOTE: Consider the following scenario. What gets logged?? */

const A1 = 0.1;
const B1 = 0.2;
const C1 = 0.3;

console.log(A1 + B1 === C1); //FALSE

/*
A1 + B1 = 0.30000000000000004;

Decimal numbers as we know them are most commonly represented using floating-point arithmetic.
Floating-point numbers only approximate real numbers and cannot accurately represent numbers like 0.1,0.2 or 0.3
at all. In the case of 0.1 + 0.2, this results in small rounding errors before we event get to the addition part.
The final sum then equals to 0.30000000000000004.

Similarly, the decimal system cannot represent 1/3 (one third) accurately. And if we took a rounded value like 0.333
, you wouldn't expect 0.333 + 0.333 + 0.333 to add up to 1,either.
*/
