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

/*NOTE: USING CLASSES
  A class allows you to create a factory that will construct objects with the properties you assign and functionality you want to implement in every object constructed by this class.
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  canDrink() {
    if (this.age >= 18) {
      return `${this.name} can have a beer!`;
    } else {
      return `${this.name} cannot have a beer!`;
    }
  }
}

/*When you construct an object using the class, You just provide the state, charactetistics the object will have in this case our class Person who has two properties name and age.
  
  As you can see, we wrote a lot less code this time, all property and method initialization is inside the class.
   */

let person1 = new Person('Bambi', 30);
let person2 = new Person('Patico', 65);
let person3 = new Person('Adita', 4);

console.log(person1.canDrink());
console.log(person2.canDrink());
console.log(person3.canDrink());

/*
  Bambi can have a beer!
  Patico can have a beer!
  Adita cannot have a beer!
   */

/*NOTE: Using Bind */

class Person {
  constructor(name) {
    this.name = name;
    this.greet = this.greet.bind(this);
  }

  greet() {
    console.log(`Hello my name is ${this.name}`);
  }
}

//Create a new Person:
let person = new Person('Pepe');
//Using greet() + person:
person.greet(); //Hello my name is pepe.

console.log(person);

/*Hello my name is Pepe 
  Person{name: 'Pepe', greet:[Function: bound greet]}
 */

//Using a diferent function.
function doSomething(fn) {
  fn();
}

doSomething(person.greet);
//Hello my name is Pepe.

//NOTE: LOG to the console the information insde the object.

const jonas = {
  firstName: 'Jonas',
  lastName: 'JJJ',
  age: 2021 - 1992,
  job: 'Teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

jonas.location = 'Portugal';
jonas['twitter'] = '@jONASSCHMEDMANT';
console.log(jonas);

//challenge "Jonas has 3 friends, and his best friend is callled michael "

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}  `
);

//NOTE: OBJECTS METHODS AND THIS.

const jonas = {
  firstName: 'Jonas',
  lastName: 'schmedmant',
  birthYear: '1991',
  job: 'Teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license `;
  },
};

console.log(jonas.getSummary());
