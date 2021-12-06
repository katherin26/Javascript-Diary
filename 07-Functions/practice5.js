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

/*Sometimes a function can receive another function as parameter and invoke that function inside lets create a 
function that receives three parameters two numbers and a formatter function which will format the end result.
*/

function divide(number1, number2, formatterFunction) {
  //Divide first
  let division = number1 / number2;

  /*The format division with formatterFunction update division value with the returned value of formatterFunction*/
  division = formatterFunction(division);
  return division;
}

/*There 4 ways to invoke divide  
Method 1 : formatterFunction as a declared function (can also be a function expression)
let toNumberWithTwoDecimals = function()...*/

//Declare formatterFunction first

function toNumberWithTwoDecimals(number) {
  let result = number.toFixed(2);
  return result;
}

/*Invoke divide function with the three arguments it expects, Notice that we pass only the functions name (toNumberWithTwoDecimals)
We don't invoke it.
*/

let division1 = divide(10, 4, toNumberWithTwoDecimals);
console.log(`Invoking divide with method 1: ${division1}`);

//Method 2 : Passing formatterFunction directly as the third parameter.
/*Here we pass the function declaration directly, internally javascript assign this to the parameter named formatterFunction. */

let division2 = divide(10, 4, function toNumberWithTwoDecimals(number) {
  let result = number.toFixed(2);
  return result;
});

console.log(`Invoking divide with method 2 : ${division2}`);

/*Method 3 : Passing anonymous function as third parameter
Pass a function without name as third parameter internally javascript assign this anonymous function to the parameter
named formatterFunction.
*/

let division3 = divide(10, 4, function (number) {
  let result = number.toFixed(2);
  return result;
});

console.log(`Invoking divide with method 3 : ${division3}`);

//Method 4 : Passing arrow function as third parameter.

let division4 = divide(10, 4, number => {
  let result = number.toFixed(2);
  return result;
});

console.log(`Invoking divide with method 4 : ${division4}`);

//NOTE: Function katas (passing a function as a parameter)

function divide(n1, n2, formatterFunction) {
  let division = n1 / n2;
  divsion = formatterFunction(division);
  return division;
}

function toNumberWithTwoDecimals(number) {
  let result = number.toFixed(2);
  return result;
}

let resultDivision1 = divide(10, 4, toNumberWithTwoDecimals);
console.log(resultDivision1); //2.5

//NOTE: METHOD 2 = Passing a function as a argument.

let resultDivision2 = divide(10, 4, function toNumberWithTwoDecimals(number) {
  let result = number.toFixed(2);
  return result;
});

console.log(resultDivision2); //2.5

//NOTE: METHOD 3
let resultDivision3 = divide(10, 4, function (num) {
  let result = num.toFixed(2);
  return result;
});

console.log(resultDivision3); //2.5

//NOTE: METHOD 4 = with arrow function

let resultDivision4 = divide(10, 4, number => {
  let result = number.toFixed(2);
  return result;
});

console.log(resultDivision4); //2.5

/*NOTE: Square every digit of a number, For example, if we run 9119 through the function, 811181 will come out because 92 is 81 and 12 is 1.
note : The function accepts an integer and returns an integer.
 */

function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .map(n => n * n)
      .join('')
  );
}

console.log(squareDigits(9119));

//Using Math.pow
function squareDigits2(b, e) {
  return Math.pow(b, e);
}

console.log(squareDigits2(9, 2));
