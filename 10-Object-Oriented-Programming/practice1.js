/*NOTE: Circle object using the object literal syntax radius property = 
circle.radius = 2 , circle.area = 20.*/

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);

/*NOTE: Literal object o constructors */

//3 WAYS TO CREATE A TEXT STRING

//Constructor

let st1 = new String('My string Contructor');
console.log(st1); //[String: 'My string constructor!']

//Literal object

let st2 = 'Simple literal string';
console.log(st2); //Simple literal string!

//Boxed string

let st3 = String('Just string!');
console.log(st3); //Just String!

//Now Numbers

let n1 = 7;
console.log(n1);

let n2 = new Number(7);
console.log(n2);

let n3 = Number(7);
console.log(n3);

//Boolean
let b1 = true;
console.log(b1);

let b2 = new Boolean(true);
console.log(b2);

let b3 = Boolean(true); //Boxed
console.log(b3);

//Literal Object =

let object = {
  name: 'Br',
  lastName: 'Men',
  age: 12,
};
console.log(object);

//Constructor =

function person1(name, age) {
  this.name = name;
  this.age = age;
}

let datos = new person1('Ka', '27');
console.log(datos);

// Methods

let persona = {
  name: 'Br',
  printName1: function () {
    console.log(this.name);
  },
  printName2: () => {
    console.log(this.name); //binding this, lexical scope
  },
};

persona.printName1();
persona.printName2(); //undefined por el lexical scope,

//NOTE: Objects adding keys and values and copy by reference.

let object = {
  name: 'Teo',
  lastName: 'Doro',
  age: 12,
};

object.new = 'New Position'; //new : "New Position"
object.inventor = 'Albert'; //inventor : "ALbert"
let object1 = { ...object }; //This is a copy by reference.

//NOTE: OBJECT CONSTRUCTOR

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const book = new Book('Hippie', 'Paulo Coelho', '2021');
console.log(book);
const book2 = new Book('Hip', 'Coel', '2020');
console.log(book2);

//NOTE: The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

book instanceof Book; //True

//NOTE: Object.create() , Object.create(proto,[propertiesObject]);

const Book2 = {
  summary: function () {
    console.log(`${this.title} is written by ${this.author}.`);
  },
};

const book = Object.create(Book2);
book.author = 'PAPA NOEL';
book.title = 'NAVIDAD';
console.log(book.summary());

//NOTE: CLASS - special functions.

function Book(name) {
  this.name = name;
}

function HorrorBook(name) {
  Book.call(this, name);
}

HorrorBook.prototype = Object.create(Book.prototype);
const book3 = new HorrorBook('The Alchemist');
console.log(book3);

//NOTE: Creating Object.

//Method 1: Literal Object.

let pet = {
  name: 'Bambi',
  age: 6,
};

//This prints pet's  name
console.log(pet.name); //Bambi

/*Method 2 : Using Constructor Function.
This function is called constructor function because it constructs objects in this case it creates an object with two properties name and age, such object represents a pet in order for this object to return an object you need to call it with new. 
'this' is a keyword that serves as a placeholder for the object being constructed and it's the one returned at the end.
Under the hood this is equal to {}.

Behind the scenes this = {} is like pet = {} in method 1.

It will return the new object created even though there is no return here, If you add a return value, it will ignore whatever you do to 'this' (don't do that, but if you want to experiment.)

Remember to call it with new if you call it without new, it will act as a regular function and it will return undefined because the Pet function does not have a return value.

//Wrong way 

let incorrectWay = Pet('Isaac',5); undefined.
*/

function Pet(name, age) {
  this.name = name;
  this.age = age;
}

/*Right way, 
When you add new, it make a constructor call instead of a regular invokation call.
 */
let myFirstPet = new Pet('Bambi2', 6);
console.log(myFirstPet); //Pet { name: 'Bambi2', age: 6 }

/*Method 3 : Using the class syntax. 

This function behaves exactly the same as the constructor function in method 2.
*/

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //and you can also add methods.

  getName() {
    return this.name;
  }

  sayWoofWoof() {
    return `Woof Woof! I am ${this.name}`;
  }
}

//As is method 2, use new to create a new object.

let mySecondPet = new Animal('Ada', 2);

//This prints name.

console.log(mySecondPet.name);

//This invokes mySecondPet method sayWoofWoof.

console.log(mySecondPet.sayWoofWoof());

/*You could have implemented methods in method 2, but that is a little bit more difficult, you need to use prototypes
 that way many people prefer method 3, it is easy to implement methods, encapsulate and inherit methods from other 
 classes. */

//NOTE: Print the value of the object.
let animal = {
  name: 'Sasha',
  age: 5,
};

console.log(animal); //{name: 'Sasha', age: 5}
console.log(animal.name); //Sasha
console.log(animal.age); //5

//NOTE: With a function and the object constructor.

function Pet(name, age) {
  this.name = name;
  this.age = age;
}

let firstPet = new Pet(`Isa`, 5);
let secondPet = new Pet(`Ada`, 2);
console.log(firstPet, secondPet); //Pet { name: 'Isa', age: 5 } Pet { name: 'Ada', age: 2 }

// NOTE: Classes example using constructor , super and methods.

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  sayWoofWoof() {
    return `Woof Woof! My name is ${this.name} and I am ${this.breed}`;
  }
}

let dog1 = new Dog('Ada', 2, 'Poodle');
console.log(dog1.sayWoofWoof()); //Woof Woof! My name is Ada and I am Poodle.

//NOTE: Print the day using new Date and .getDay()

let resultNewDate = new Date(1997, 2, 14);
console.log(`The day is : ${resultNewDate.getDay()}`); //5

/*NOTE: Write a Javascript program to display the current day and time in the following format.

Sample Output : Today is : Tuesday.
Current Time is : 10PM : 30 : 38
*/

let weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function currentDay(arr) {
  let currentDay = new Date();
  let day = currentDay.getDay();
  let hours = currentDay.getHours();

  if (hours > 12) {
    hours = hours - 12;
    hours = `${hours} PM`;
  } else {
    hours = `${hours} AM`;
  }

  let minutes = currentDay.getMinutes();
  let seconds = currentDay.getSeconds();

  return `Today is : ${weekdays[day]} ${hours}: ${minutes} : ${seconds}`;
}

console.log(currentDay());
