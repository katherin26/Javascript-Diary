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
