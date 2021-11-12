/*NOTE: Create an object which contains street, city and zipcode and then create 
a function in which you can iterate over the object and print the key and value. */

let area = {
  street: 'a',
  city: 'b',
  zipCode: 'c',
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(area);

//With constructor function.

function CreateList(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}

let createList = new CreateList('Var', 'Let', 30);
console.log(createList);

//Factory function.

function createZone(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let factoryAddress = createZone(`2020 sw 8 ST`, `Miami`, `33225`);
console.log(factoryAddress);

/*NOTE: Create a function and compare the objects literals, log to the console if they are equals or not. */

let object1 = {
  name: 'Ninja',
  lastname: 'Red',
  age: 50,
  city: 'D.C',
};

let object2 = {
  name: 'Nerd',
  lastname: 'pink',
  age: 23,
  city: 'C.D',
};

function checkObj(obj1, obj2) {
  if (obj1 === obj2) {
    console.log(`They are equals`);
  } else {
    console.log(`They are not equals`);
  }
  return;
}

checkObj(object1, object2);

function checkObj2(obj1, obj2) {
  return obj1 === obj2 ? 'Are equals' : 'Not are equals';
}

checkObj2(object1, object2);

/*NOTE: AN EXAMPLE OF FUNCTION DECLARATION = 
We can invoke or call a function before defining it!, But have you wondered why??
and in a Function Expression if we do this it gives us Error!.

The reason is because when JavaScript executes the code it moves all the functions declarations 
to the top, so  the function declaration below executes the code of the function and then the 
invocation and this is called Hoisting.

HOISTING: Is the process of moving a function declaration to the top and is done automa-
tically by Javascript engine that is executing the code.
*/

walking();
function walking() {
  console.log('walking...');
}

/*NOTE: FUNCTION EXPRESSION =
  In javascript function are objects.
  In the next example we can have a named function or we can have a anonymous function expression
  When is anonymous we call the function expression. When is anonymous we call the function
  with the value of the variable in this case run().
  We declare another variable and set it to run , move and run are referencing the same 
  anonymous function which is one object in memory.
*/

let run = function () {
  console.log('.....result');
};
run(); //.....result

let move = run;
move(); //.....result

/*NOTE: HOW WORKS THE ARGUMENTS 
We are passing 1 and 2 as an argument, but what if we only passed one argument.

console.log(sum(1)); =
The result is NaN , 
for default a = 1 and b = undefined and when we have =
 1 + undefined the result is = NaN 
 This is not a valid mathematical operation for Javascript 
 but what happens if we did not pass any argument.?

 console.log(sum()); = //NaN

 But what happens if we pass than 2 arguments??

 console.log(sum(1,2,3,4));//3 =

 The answer is 3 because Javascript takes the first 2 arguments.

*/

function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2)); //3
console.log(sum(1)); //NaN
console.log(sum()); //NaN
console.log(sum(1, 2, 3, 4)); //3

/*But if we want flexibility or dynamism of passing multiple arguments and getting the sum,
every function in Javascript has a special object called arguments.

ARGUMENT: 
In the console an object appears that has as key the indexes of the arguments that were passed
in this function, now we are going to write an algorithm that adds all the parameters.
*/

console.log(sum(1, 2, 3, 4, 5)); //15

/*NOTE: THE REST OPERATOR 
In modern Javascript if you want to have a function with a variety of numbers or parameters you
can use this Operator.

Do no get confused with the spread operator that we use in arrays since the spread operator
takes the elements individually but when we use these 3 dots... and we refer it in a function
it is called rest operator.
*/

function sum2(...args) {
  console.log(args); //[1,2,3,4,5,6,7,8,9,10]
  return args.reduce((a, b) => a + b);
}
console.log(sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //55

/*NEXT LEVEL EXAMPLE = 
Now we are gonna used this function to calc the total of the items in a shopping cart and 
we want a discount factor , So we need to add the parameter discount and parameter prices.
*/

function sum3(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum3(0.1, 20, 30)); //45

/*NOTE: DEFAULT VALUES:
It depends on the exercise or the problem, We need to put default values in some 
parameters of a function.

Example: 
A function that calculates the total interest (principal, rate, years).
*/

function interest(principal, rate, years) {
  return ((principal * rate) / 100) * years;
}
console.log(interest(10000, 3.5, 5)); //1750

/*But what if we want to add default values to interest, rate and years.
The or operator || =  If rate has a value and is a truthy value we use it but otherwise
we will use 3.5 .
In Conclusion: We can use the or || operator to obtain a default value.
*/

function interest1(principal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;
  return ((principal * rate) / 100) * years;
}
console.log(interest1(10000)); //1750

/*ES6 = Now with ES6 we have another way to do this!
Instead of putting the expressions with or || operator. We can put the default value inside the
parameters.
*/

function interest2(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}
console.log(interest2(10000)); //1750

/*NOTE:  SUM ARGUMENTS ARRAY AND NUMBERS*/

function sum(...arg) {
  if (arg.length === 1 && Array.isArray(arg[0])) arg = [...arg[0]];
  return arg.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4, 5])); //11

/*NOTE: EXERCISE ERROR HANDLING WITH TRY AND CATCH*/

try {
  const numbers = [1, 2, 3, 4];
  const count = countOcurrences(null, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}
function countOcurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error('Invalid array.');

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}

/*NOTE:  FUNCTIONS, RETURN AND PASS THE VALUE TO  A VARIABLE.*/

function sumA(x, y) {
  return x + y;
}

let result = sumA(1, 2);
console.log(result);

/*NOTE: Function declaration , Function expression , Arrow function */

function func1() {
  return 'Hi1';
}

const func2 = () => {
  return 'Hi2';
};

const func3 = () => 'Hi3'; // The return here is implide so you don't have
// to use return or curly braces.

/*Write a function that received 4 arguments and  those arguments should be the data below.
Inside the function print a message using the firstName and LastName.
*/

let movies = ['Alien', 'Matrix', 'Hitch'];
let hobby = 'Running';
let car = {
  name: 'Lambo',
};
let firstName = 'Ana';
let lastName = 'Gun';

const getNewMovieDeal = (name, lastName, hobby, car) => {
  console.log(`${name} ${lastName} has a hobby ${hobby} and has a ${car} `);
};

getNewMovieDeal(firstName, lastName, hobby, car.name);
