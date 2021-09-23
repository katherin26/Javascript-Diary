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

/*NOTE: OPERATOR ASSOCIATIVITY
Given the following lines, what will be the output??
*/

console.log(1 < 2 < 3);
console.log(3 > 2 > 1); //true and false

/*The operators < and > follow left to right associativity, meaning that they will be interpreted starting from the 
left. For demonstration, left to right evaluated expressions like a OP b OP c can be written as (a OP b) op c.

Following this scheme, the first expression becomes (1<2) <3. The part in parenthesis evaluates to true leaving 
true < 3. Because the right hand side is a number, the true on the left hand side is coerced into the number 1.
Hence, the whole expression evaluates to true.

In the second example (visualized as (3 > 2) > 1), the first part (3 > 2) evaluates to true. The remaining portion 
true > 1 then gets converted to 1 > 1. As 1 is not greater than itself, the whole expression evaluates to false.
*/

/*NOTE: TWO MANY DOTS??
What is the return of the following console.log()??
*/

const n = 5;

console.log((1).n); //Undefined

/*This is not a syntax error. Rather, to call a method directly on a Number.prototype, two dots are requited for it
to not be interpreted as a decimal. In this case, 1..n tries to access the property n on 1, which is undefined. A 
practical example of this would be 1..toString(),which would result in the string "1".

What's going on here is that a decimal point is permitted at the end of a number even if there are no decimal digits
.1. is interpreted as a numeric literal equivalent to 1 -the dot is an optional decimal point, and is not indicating
property access. If you add another., the interpreter is forced to treat the second . as the property access operator.

Another way to call a method on a numeric literal without the confusing .. is to surround the number in parentheses,
eg (1).toString().
*/

/*NOTE: IMPLICIT TYPE COERCION
Consider the following variables greeting and year. Which of the following is an example of implicit coercion in 
Javascript??
*/

const greeting = 'Hello';
const year = 2019;

/*
 1) greeting + year.toString()
 2) greeting + String(year)
 3) greeting + year  ====> CORRECT ANSWER 
*/

/*Some programming languages have a concept called type casting. This means that, if you want to convert one type
to another type, you have to make the conversion explicit. In JS there is a mechanism called implicit coercion, 
which converts type to other types as necessary, In this case, the addition operator + automatically converts 2019
to a string so it can be concatenated with the string "Hello". In contrast, year.toString() and String(year) are 
both explicitly converting it to a string. */

/*NOTE: IDENTITY CRISIS 
Consider the following comparison function and its applications. What gets logged?
*/

const compare = a => a === a;

console.log(compare(null)); //true
console.log(compare(undefined)); //true
console.log(compare(NaN)); //false
console.log(compare([NaN])); //true

/*Out of all JS values, NaN(Not a Number) is the only one that compares unequal to every other value, including 
itself.

Note that [NaN] is just a regular array that contains a single element so it will be always equal to itself.
*/

/*NOTE: DIRECTION OF LOOPS
In which direction will the following code scan an image?
*/

const image = new Image();
const maxHeight = image.height + 1;
const maxWidth = image.width + 1;

for (let i = 0; i < maxHeight; i++) {
  for (let j = 0; j < maxWidth; j++) {
    // Obtaining values of pixels, assuming function getPixel(y, x)
    //takes argument y as Y-coordinate and x as X-coordinate
    const pixel = getPixel(i, j);
    const pixelValues = {
      red: pixel.getRed(),
      green: pixel.getGreen(),
      blue: pixel.getBlue(),
    };
    //Update pixel color scheme
    pixelValues.red /= 2;
    pixelValues.green /= 3;
    pixelValues.blue *= 2;
  }
}

/*Scans across a row before going to the one below =  because value i will only update
once all of the values of j have been processed. So, it will read across the row first before going to the next one
below. Note all the pixel code is essentially a distraction.*/

/*NOTE: What does this snippet of code return?? */

function Greetings(name) {
  return;
  'Good Morning' + name;
}

Greetings('Giovanni'); //undefined

/*There are a number of keywords and syntax constructions which are not permitted to have newlines at a particular
point. For example, return, continue, break, throw, and yield, if connected with another JS token on the right-hand
side, are forbidden to be separated from the token by a newline.
For example, when throwing something, the start of the thrown expression must be on the same line as the throw.

When the interpreter is parsing JS text and comes across one of these situations where a newline is forbidden, but 
a newline is found, and the preceding token (return, continue,etc) does not end with a semicolon, a semicolon will 
be inserted. So, the interpreter parses the code above into:

               function Greetings(name){
                 return 
                   "Good Morning," + name;
               }

               Greetings("Giovanni");

Nothing is returned, so the return value is undefined.

The correct way is =

                function Greetings(name){
                  return "Good Morning," + name; 
               }

               Greetings("Giovanni");// Good Morning, Giovanni
 
*/

/*NOTE: PALINDROME??
Does the following function correctly assess "hannah" to be a palindrome? In other words, what gets logged?
*/

function isPalindrome(str) {
  var reverseText = str.split('').reverse().join('');
  return str == reverseText;
}

isPalindrome('hannah'); //hannah ====> TRUE ANSWER

/*split(') will split the string into an array of letters : [ 'h', 'a', 'n', 'n', 'a', 'h' ]
  reverse() will reverse that array, and join('') will join the letters back together. If that reversed text is 
  equal to the initial string, then we indeed know we have a palindrome! 
*/

/*NOTE: TRIPLE PLUS 
Consider the following code block. What is the result??
*/

let b = '4';
console.log(b++ + 3, b); //7 5

/*The postfix Increment operator (++) takes precedence over the addition operator (+), and will coerce strings to
numbers. The expression with  the operator will evaluate to the coerced value, and (in line with the "Post" part of
"Postfix") will increment the variable immediately afterwards.

The code block in the question is equivalent to 

                               let b = '4';
                               console.log((b++) + 3, b);

First, b is coerced to a number, and the increment expression evaluates to that number:

                               console.log((4) + 3, b);

b is then incremented from 4 to 5. This resolves to: 

                                console.log(7, 5);
*/
