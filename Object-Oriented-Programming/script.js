'use strict';

//TITTLE: CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR

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

//TITTLE: PROTOTYPES
/*Each and every function in Javascript automatically has a property called prototype and that includes
constructor functions  , Now every object that's created by a certain constructor function  will get access
 to all the methods and properties that we define on the constructors prototype property */

console.log(Human.prototype); //{constructor: ƒ}
Human.prototype.calcAge = function () {
  console.log(2020 - this.birthYear);
};

pepa.calcAge(); //29 = We have access because of prototypal inheritance.
/*The this keyword in each object is as always set to the object that is calling the method.
Any object always has access to the methods and properties from its prototype and the prototype of Pepa 
and Matilda is Human.prototype*/

console.log(pepa.__proto__); // {calcAge: ƒ, constructor: ƒ}
/*This is the prototype of pepa and inside we can see the  calcAge method and that's why pepa 
is able to use this method. So the prototype of pepa object is essentially the prototype property 
of the constructor function.*/
console.log(pepa.__proto__ === Human.prototype); //true
/*IMPORTANT: CONFUSING PART =
Human.prototype  is not the prototype of Human, But instead , it is what's gonna be used as the prototype 
of all the objects that are created with the Human constructor function
*/

console.log(Human.prototype.isPrototypeOf(pepa)); //true

/*__proto__ = step number three = linked to prototype, and it sets its value to the prototype property of
the function that is being called  
It sets the proto property on the object to the prototype property of the constructor function and this 
is how Javascript knows internally that the pepa object is connected to Human.prototype 
When you see the pepa object, you can see that property in there :

__proto__: Object
  calcAge: f()

And then you see Human.prototype which contains  calcAge function 
*/

//SET PROPERTIES ON THE PROTOTYPE

Human.prototype.species = 'Homo Sapiens';
console.log(pepa, matilda);

/*__proto__:
   calcAge: f()
   species: "Homo Sapiens"
*/

console.log(pepa.species, matilda.species); //  Homo Sapiens Homo Sapiens
/*Both of these objects will then inherit so they will get access to this property from the 
prototype */

/* When we take a look at these objects , Well this property is not really directly in the object so it's
not it's own property .
Own properties are only the ones that are declared directly on the object itself, So not including the 
inherited properties   */

console.log(pepa.hasOwnProperty('firstName')); //true
console.log(pepa.hasOwnProperty('lastName')); //false
