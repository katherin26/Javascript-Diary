/*Function:
All functions work the same, they receive an input(s) and produce an output.

n1 and n2 represent the parameters (inputs) this function expects when you invoket it.
The parameters can have any name, choose a name that has meaning based on that the function is doing since we are doing a math operation it is reasonable to call then number1 and number2.
 */

let input1 = 10;
let input2 = 7;

function multiply(number1, number2) {
  /*Logic
    Process the inputs and generate an output result 
    represents the output of this function this is what the function will return.
   */
  let result = number1 * number2;
  /*Don't forget the return if you don't specify it, it will return undefined by default. */
  return result;
}

/*To invoke a function just use its name with parenthesis and include the arguments it expects functionName(arg1,arg2)
Let's invoke it.
Call it with literal values
 */
multiply(10, 9); //returns 90

//Call it using variables that hold the numbers.
multiply(input1, input2); //Return 70.

/*You can pass the invokation to a console.log to see.
What a function returns just print the returned value. What Javascript does is that it first executes the function, gets the returned value and passes it to the console.log function, which prints it on the screen.
 */

console.log(multiply(2, 2));

//Use template literals to concatenate a text with the returned value.

console.log(`5 x 5 =${multiply(5, 5)}`); // 5 x 5 = 25

//You can also use the old concatenation a method.

console.log(`5 x 5 =` + multiply(5, 5)); // 5 x 5 = 25

/*The two examples above work as expected, but we did not store the returned value if you need to use the returned 
value later, for example to do other math operations, you need to store it in a variable.
To save the result, assign the returned value to a variable now we can use output somewhere else
*/

let output = multiply(input1, input2); //returns 70

//Use the returned value for other operation

let sum = output + 30; //100

/*Now let's see how we can represent the same function in different ways .
Create a function that sums up two numbers.

Method 1 : Using function declaration, remember function declaration are hoisting.
*/

function sum1(number1, number2) {
  return number1 + number2;
}

console.log(`Invoking sum1(2,2) result is ${sum1(2, 2)}`); //4

/*Method 2 : Using function expression with anonymous function. */

let sum2 = function (number1, number2) {
  return number1 + number2;
};

console.log(`Invoking sum2 (4,4) result is : ${sum1(4, 4)}`); //8

//Method 3 : Using function expression with arrow function.

let sum3 = (number1, number2) => {
  return number1 + number2;
};

//You can use shorter version (number1, number2) => number1 + number2

console.log(`Invoking sum3(5,5) result is: ${sum1(5, 5)}`);
