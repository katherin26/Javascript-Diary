'use strict';

/*NOTE: What gets logged when we test the following equality scenarios?? */

const a = c => c;
const b = c => c;

console.log(a == b); //false
console.log(a(7) === b(7)); // true

/*
In the first test, a and b are different objects in memory; it doesn't matter that the parameters and return values
in each function definition are identical. Therefore, a is not equal to b. In the second test, a(7) returns the 
number 7 and b(7) returns the number 7. THese primitive types are strictly equal to each other.

In this case, the equality (==) vs identity (===) comparison operators don't matter; no type coercion will affect
the result.
*/

/*NOTE: Let's say myFunc is a function, val1 is a variable, and val2 is a variable. Is the following syntax allowed
in Javascript? */

myFunc(val1)(val2); //yes

/*This is a common pattern for a higher-order function. If myFunc(val1) returns a function, then that function 
will be called with val2 as an argument. Here's an example of this in action :

const timesTable = num1 => {
    return num2 => {
        return num1 * num2;
    };
    console.log(timesTable(4)(5));
};
*/
