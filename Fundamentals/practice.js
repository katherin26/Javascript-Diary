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
