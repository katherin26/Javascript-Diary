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
