'use strict';

/*NOTE: DATE CONSTRUCTOR 
Consider the following code block which calls the Date constructor with 2 type of values. In a US environment, what 
will be the output of console.log?
*/

let date1 = new Date('2019,1,1').toLocaleDateString();
let date2 = new Date(2019, 1, 1).toLocaleDateString();
console.log(date1, date2); //1/1/2019 2/1/2019

/* The Date constructor, new Date(), creates a date object at given date or the current date if no date is given
.It can be called in many ways. If the Date constructor is passed as a string, JS will attempt to interpret the 
string as a date. In this case, "2019,1,1" is interpreted as January 1,2019. If the Date constructor is passed 
three numbers, the first value will be interpreted as the year, the second value the month, and the third the day.
The catch here in JS starts in month indexing at 0, so month 1 is February.*/

/*NOTE: Creating an Object */

//Method 1 : Literal Object.

let robot = {
  name: 'Lucia',
  age: 5,
};

console.log(robot.name); //This prints robot's name = Lucia.

/*Method 2 : Using Constructor Function.
This function is called constructor function because it constructs objects in this case it 
creates an object with two properties name and age, such object represents a pet in order 
for this object to return an object you need to call it with new.
'this' is a keyword that serves as a placeholder for the object being constructed and it's 
the one returned at the end.
Under the hood this is equal to {}.
*/

/*Behind the scenes this = {} is like pet = {} in method 1.
It will return the new object created even though there is no return here , If you add a 
return value, it will ignore whatever you do 'this'.

Remember to call it with new, If you call it without new, it will act as a regular function
and it will return undefined because the Pet function does not have a return value.

*/

function Pet(name, age) {
  this.name = name;
  this.age = age;
}

//Wrong way
let incorrectWay = Pet('Dug', 8); //Undefined

//Right way, When you add new, it make a constructor call instead of a regular invokation call.

let myFirstPet = new Pet('Lala', 4);
console.log(myFirstPet); //Pet {name: 'Lala', age:4}

/*Method 3 : Using the class Syntax. This function behaves exactly the same as the 
constructor function in method 2.
*/

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //Add you can also add methods.
  getName() {
    return this.name;
  }

  sayWoofWoof() {
    return `Woof Woof! I am ${this.name}`;
  }
}

//As in method 2 use new to create a new object.

let mySecondPet = new Animal('fairy', 2);
console.log(mySecondPet); //Animal {name: 'fairy', age:2}
console.log(mySecondPet.name); //fairy

//This invokes mySecondPet method sayWoofWoof
console.log(mySecondPet.sayWoofWoof());

/*You could have implemented methods in method 2, but that is a little bit more difficult, 
you need to use prototypes that way many people prefer method 3, it is easy to implement 
methods, encapsulate and inherit methods from other classes.
*/

/*NOTE: GETTERS AND SETTERS: 
They are a special kind of methods in objects .
In this example we have an object and we want to print the full name! 
*/

const person = {
  firstName: 'Amiie',
  lastName: 'Mai',
};

console.log(person); // {firstName:'Amiie', lastName:'Mai'}
console.log(person.firstName); //Amiie
console.log(person.lastName); //Mai
console.log(`${person.firstName} ${person.lastName}`); //Amiie Mai

/*If we want to use this information and print it as many times as we want in
another part of our application, we would have to repeat this template over and
over again in many places, which implies more memory occupation and slowing down
the process.

We are going to define a method in the object and we will call it fullName and
move this expression ${person.firstName} ${person.lastName}.

But we found another problem, in this implementation we cannot change the first 
and last name from outside, it would only print what is already in the object.
*/

const person1 = {
  firstName: 'Minako',
  lastName: 'Aino',
  fullName() {
    return `${person1.firstName} ${person1.lastName}`;
  },
};

console.log(person1.fullName()); //Minako Aino
