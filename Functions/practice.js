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

/*NOTE: When passing an object as an argument to a function, can the original object be mutated? In the following 
example, will somePerson.valid be true or undefined*/

const somePerson = { username: 'Davey154' };

const personValidator = person => {
  person.valid = person.username.length > 5;
  return person.valid;
};

personValidator(somePerson);
console.log(somePerson.valid); //true

/* In our function, person will point to the same object in memory that somePerson points to. This means any 
mutation we do to person within our function also happens to somePerson!!*/

/*NOTE: What gets logged in the following code?? */

let dog = {
  breed: 'Border Collie',
  sound: 'Wooh',
  getBreed: () => {
    return this.breed;
  },
  getSound: function () {
    return this.sound;
  },
};

console.log(dog.getBreed(), dog.getSound()); // Undefined, Wooh

/*The this inside an arrow function does not depend on how the function was called. Instead, they inherit the this
of the parent scope. This is called "lexical scoping". In sloppy mode, this on the top level refers to the global
object, so getBreed's this.breed refers to the breed property on the global object, which doesn't exist. */

/*NOTE: When running Javascript in the browser, what gets logged when we try to call myFunction()? */

function myFunction() {
  console.log(this);
}

myFunction(); //Window

/*In this case, this references the window. Why?? Because myFunction was not called on an object, nor was a 
particular this set via .bind or .call. It's a plain standalone function which was invoked without a calling 
context, so inside it, this will refer to the global object(which is the window).(If we were in stric mode 
instead, the value of this when there is no calling context is undefined.) */

/*NOTE: What would be the output of the following three console.logs?? */

function withVar() {
  const b = () => a;
  var a = 24;
  return b;
}

function withLet() {
  const b = () => a;
  let a = 24;
  return b;
}

function changingValue() {
  let a = 24;
  const b = () => a;
  a = 42;
  return b;
}

console.log(withVar()()); // 24
console.log(withLet()()); // 24
console.log(changingValue()()); // 42

/*Closure = occur when a function remembers and accesses its lexical scope, even when it is executed 
outside of that scope. by Kyle Simpson in YDKJS.
When the internal functions b are returned from all the three functions, each function b gets a "closure" over
the value of a defined in its parent function's scope. However, the value of a closed over by b in all cases is
the "latest" value of a, or in other words, b has closure over the variable a itself, not its value. Hence, even 
when the value of a is changed, b always has the most recent value assigned to a.

That is why, in withVar, even though a is undefined when b is first defined, however by the time b is executed (
inside the console.log), the value of a has been updated to 24, and that is what is returned by b .Similarly,
in withLet, the a variable is no longer in the "Temporal Dead Zone" by the time b is executed. And finally, the
"updated" value of a is returned by changingValue.
*/

/*NOTE: In this question, We have a Dog constructor function. Our dog obviously knows the speak command. What
gets logged in the following example when we ask Pogo to Speak*/

function Dog(name) {
  this.name = name;
  this.bark = function () {
    return 'Woof';
  };
}

const dog = new Dog('Pogo');

Dog.prototype.bark = function () {
  return 'arf';
};

console.log(dog.bark()); //Woof

/*Every time we create a new Dog instance, we set the bark property of that instance to be a function 
returning the string Woof. since this is being set every time we create a new dog instance, the interpreter never 
has to look farther up the prototype chain to find a speak property. As a result, the speak method on 
Dog.prototype.speak never gets used. */

/*NOTE: IIFE, HOF , OR BOTH :
Does the following snippet illustrate an Immediately-Invoked Function Expression (IIFE), a Higher-Order Function
(HOF), both or neither.?
*/

((fn, val) => {
  return fn(val);
})(console.log, 5);

/*The snippet clearly illustates an IIFE as we immediately invoke a function by passing console.log and 5 to it.
Additionally, we find that this is a HOF as fn is a function, and a HOF is defined as any function that takes 
another function as a parameter or returns a function. */

/*NOTE: RECURSION :
Consider the following recursive function. If we pass the string "hello world" to it, what gets logged?
*/

const recursionExpl = str => {
  if (str.length > 1) {
    return recursionExpl(str.slice(1));
  }
  return str;
};

console.log(recursionExpl('Hello world')); //d

/*The first time we call the function, str.length is greater than 1 ("Hello world" is 11 characters), so we 
return the same function called on str.slice(1), which is the string "ello world".
We repeat this process until the string is only one character long: the character "d", which gets returned to the
initial call of recursionExpl. We then log that character. */

/*NOTE: Consider the following superheroMaker function. What gets logged when we pass the following two inputs.*/

const superheroMaker = a => {
  return a instanceof Function ? a() : a;
};

console.log(superheroMaker(() => 'Batman'));
console.log(superheroMaker('Superman'));

/* "Batman" "Superman" :

When passing () => 'Batman' to superheroMaker, a is an instance of Function. Therefore, the function gets called, 
returning the string Batman. When passing 'Superman' to superheroMaker, a is not an instance of Function and there-
fore the string 'Superman' is just returned. Therefore, the output is both Batman and Superman.
*/

/*NOTE: Pass by value: 
When setting variables equal to each other and then changing one of them, does it change the other? Consider the 
following core. What is logged? 
*/

let variable1 = {
  name: 'Johnny',
  hobby: 'Football',
};
let variable2 = 'Lisa prefers Johnny';
let variable3 = ['Denny', 'Michelle', 'Chris R'];

let variable4 = variable1;
let variable5 = variable2;
let variable6 = variable3;

variable4.hobby = 'roofsitting';
variable5 = 'Lisa prefers Mark';
variable6[2] = 'Doggy';

console.log(variable1.hobby); //roofsitting
console.log(variable2); //Lisa prefers Johnny
console.log(variable6[2]); //Doggy

/*Because variable4 and variable6 refer to the same objects in memory as variable1 and variable3, when their 
properties hobby and [2] were changed, those changes could also be seen through variable1 and variable3. The 
change made to variable5 was not changing a property, rather,replacing the variable5 variable itself. Replacing 
a variable with a new value has no effect on the original value. so variable2 remained unchanged, */

/*NOTE: HOISTING: 
Consider the following declarations and expressions. What gets logged?? */

immaBeOnTop();
var immaBeOnTop;

function immaBeOnTop() {
  console.log('first');
}

immaBeOnTop = function () {
  console.log('second');
};

foo();

function foo() {
  console.log(1);
}

var foo = function () {
  console.log(2);
};

function foo() {
  console.log(3);
}

foo();

/*first 3 2 =

The answer is first for the first question. While both function declarations and variable declarations are hoisted,
function declarations are hoisted first and the variables. Duplicate var declarations (but not assignments) are 
also ignored.So the result is ! 

function immaBeOnTop(){
  console.log('first);
}
immaBeOnTop(); //'first'

immaBeOnTop = function(){
  console.log('second');
};

The answer is 3 2 for the second question. While duplicate var declarations are ignored, subsequent declarations and 
variable assignments do override previous ones. So what's happening with the code above is:

function foo(){
  console.log(1);
}
function foo(){
  console.log(3);
}
foo();//3

foo = function(){
  console.log(2); 
}

foo();//2

*/
