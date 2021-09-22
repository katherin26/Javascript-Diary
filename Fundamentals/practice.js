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

/*NOTE: LEXICAL SCOPE
What do you think will be printed?
*/

function printSomething() {
  console.log(something);
}

function invokePrintSomething() {
  var something = 3;
  printSomething();
}

var something = 2;

invokePrintSomething();

/* Answer = 2

When a variable is referenced in Javascript, the interpreter will try to find which binding it references by looking 
through the ancestor blocks and functions to see if a variable with that name is declared in that block or function.

The nearest ancestor block(or the top level) which defines the variable with const, let or var will be identified as
the biding to use.

Here, when invokePrintSomething is called and the var something = 3 is found, the interpreter will see that the 
something is initialized with var in the same block, so the binding is to a variable local to invokePrintSomething.
Then, when printSomething is called, and it comes across console.log(something);, it will look to its ancestor blocks
to see where a variable named something is defined. The nearest (and only) ancestor block is the top level, with a 
var something which currently holds the value of 2, so 2 gets logged.
*/
