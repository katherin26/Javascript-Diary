'use strict';

const Human = function (firstName, birthYear) {
  //Instance properties
  //console.log(this); //Human{}
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const pepa = new Human('Pepa', 1991);
console.log(pepa); // Human {firstName: "Pepa", birthYear: 1991}

/*
1. New {} is created 
2. Function is called, this = {}

The this keyword will point to the new object  that was created in step number one , all of this happens 
only because we are calling the function using the new operator.

3. {} Linked to a prototype
4. Function automatically return {} = At this point, the object no longer needs to be empty and this is actually
the trick of making the constructor function work .
*/

const matilda = new Human('Matilda', 2017);
const jack = new Human('Jack', 1887);
console.log(matilda, jack); //Human {firstName: "Matilda", birthYear: 2017} Human {firstName: "Jack", birthYear: 1887}

console.log(pepa instanceof Human); //true
