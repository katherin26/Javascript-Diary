/*NOTE: Ways to store data and make computations to make decisions in your program .

COMPARISON OPERATORS
==,!==,>,>=,<,<=

To calculate an output 

ARITHMETIC OPERATORS 

+, -, *, /, %
 */

//EXAMPLE OF computations

//INPUT
let currentYear = 2021;
let birthYear = 1980;

//PROCESS
let age = currentYear - birthYear;

//OUTPUT
if (age >= 18) {
  console.log(`You can have a beer!`);
} else {
  console.log(`You cannot have a beer!`);
}

//Ypu can have a beer!

/*Store name and age of three people and determine if they can drink a beer. */

//USING ONLY PRIMITIVE VARS

let personName1 = 'Bambi';
let personAge1 = 29;

if (personAge1 >= 18) {
  console.log(`${personName1} can have a beer.`);
} else {
  console.log(`${personName1} cannot have a beer.`);
}

//OUTPUT = Bambi can have a beer.

let personName2 = 'Chick';
let personAge2 = 32;

if (personAge2 >= 18) {
  console.log(`${personName2} can have a beer.`);
} else {
  console.log(`${personName2} cannot have a beer.`);
}

//OUTPUT = Chick can have a beer.

/*NOTE: USING OBJECT LITERAL */

/*An object has the advantage of grouping data that belongs to a single entity and you can also add functionality (methods) that work based on the data the object. */

let person1 = {
  name: 'Bambi',
  age: 29,
  canDrink() {
    if (this.age >= 18) {
      return `${this.name} can have a beer.`;
    } else {
      return `${this.name} cannot have a beer!`;
    }
  },
};

console.log(person1.canDrink());
//OUTPUT = Bambi can have a beer.

let person2 = {
  name: 'Lola',
  age: 32,
  canDrink() {
    if (this.age >= 18) {
      return `${this.name} can have a beer!`;
    } else {
      return `${this.name} cannot have a beer!`;
    }
  },
};

console.log(person2.canDrink());

//OUTPUT = Lola can have a beer!

/*As you can see the code is repetitive and there is no reusability of functionality, you need to manually construct the object every time. */
