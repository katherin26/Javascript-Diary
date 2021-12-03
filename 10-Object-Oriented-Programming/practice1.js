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
