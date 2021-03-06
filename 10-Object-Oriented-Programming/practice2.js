/*NOTE: Class exercise */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  isAdult() {
    if (this.age >= 18) {
      return true;
    } else {
      return false;
    }
  }
}

let person1 = new Person('Lola', 30);
console.log(person1); // Person{name: 'Lola', age: 30}

let person2 = new Person('Bambi', 40);
console.log(person2); // Person{name: 'Bambi', age: 30}

let isAdult = person1.isAdult();

if (person1.isAdult()) {
  console.log('You can have a beer!!');
} //You can have a beer!!

console.log(isAdult); //true

//Second exercise using this

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  isAdult() {
    if (this.age >= 18) {
      return `${this.name} You can have a beer because your age is ${this.age} !!`;
    } else {
      return `${this.name} You cannot have a beer because your age is ${this.age}!!`;
    }
  }
}

let person3 = new Person2('Snorlax', 45);
console.log(person3); //Person2 { name: 'Snorlax', age: 45 }

console.log(person3.isAdult()); //Snorlax You can have a beer because your age is 45 !!

//NOTE: CLASS EXERCISE STACK.

class Stack {
  constructor() {
    this.stack = [];
    this.MAX_SIZE = 5;
  }

  push(item) {
    this.stack.push(item);
  }
  canPush() {
    return this.stack.length < this.MAX_SIZE;
  }
  pop() {
    return this.stack.pop();
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  display() {
    return this.stack;
  }
}

let libros = new Stack();

libros.push(`You don't know JS`);
libros.push(`You know JS`);
libros.push(`Eloquent JS`);
libros.push(`ABC JS`);
libros.push(`CDF JS`);

console.log(libros);

/*
Stack{
  stack:[
    "You don't know JS",
    "You know JS",
    "Eloquent JS",
    "ABC JS",
    "CDF JS"
  ],
  MAX_SIZE: 5
}
 */

let juegos = new Stack();

juegos.push('MGS1');
juegos.push('MGS2');
juegos.push('MGS3');
juegos.push('MGS4');
juegos.push('MGS5');

console.log(juegos);

/*
Stack {
  stack: [ 'MGS1', 'MGS2', 'MGS3', 'MGS4', 'MGS5' ],
  MAX_SIZE: 5
} */

console.log('IsEmpty', juegos.isEmpty()); //false

console.log('canPush', juegos.canPush()); //false

console.log(libros.display());

/*
[
  "You don't know JS",
  'You know JS',
  'Eloquent JS',
  'ABC JS',
  'CDF JS'
]
 */

juegos.pop();
juegos.pop();
juegos.pop();
console.log(juegos.display());
/*[ 'MGS1', 'MGS2' ] */

/*NOTE: Class exercise with constructor and methods. */
class Person {
  constructor(name, pet, age, weight) {
    this.name = name;
    this.pet = pet;
    this.age = age;
    this.weight = weight;
  }

  sayHello() {
    return `Mi nombre es ${this.name} y el 
    de mi perro es ${this.pet}`;
  }

  isAdult() {
    if (this.age >= 18) {
      return `${this.name}, Puedes tomar cerveza eres mayor de edad`;
    } else {
      return `${this.name}, No puedes tomar cerveza porque no eres mayor de edad.`;
    }
  }

  eatBrunch() {
    this.weight = this.weight + 1;
  }

  exercise() {
    this.weight = this.weight - 1;
  }

  pesarme() {
    return `Mi peso actual es ${this.weight}`;
  }
}

let ejercicio = new Person('Rambo', 'Rocky', 28, 60);
console.log(ejercicio);
/*Person { name: 'Rambo', pet: 'Rocky', age: 28, weight: 60 } */

console.log(ejercicio.pesarme()); //Mi peso actual es 60.

ejercicio.eatBrunch();
ejercicio.eatBrunch();
ejercicio.eatBrunch();
ejercicio.eatBrunch();

console.log(ejercicio.pesarme()); //Mi peso actual es 64

ejercicio.exercise();
ejercicio.exercise();

console.log(ejercicio.pesarme()); //Mi peso actual es 62

ejercicio.eatBrunch();
ejercicio.eatBrunch();
ejercicio.eatBrunch();
ejercicio.eatBrunch();
ejercicio.eatBrunch();
ejercicio.eatBrunch();
ejercicio.eatBrunch();
ejercicio.eatBrunch();
ejercicio.eatBrunch();
ejercicio.eatBrunch();

console.log(ejercicio.pesarme()); //Mi peso actual es 72

//NOTE: EXERCISE CLASS CONSTRUCTOR = CALCULATING THE POLYGON

class Poligono {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const cuadrado = new Poligono(10, 10);
console.log(cuadrado.area); //100

//NOTE: EXERCISE WITH CLASS CONSTRUCTOR AND PUSH().

class Person {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  sayHello() {
    return `My name is ${this.name}`;
  }
  addPet(element) {
    this.pets.push(element);
  }
}

let result = new Person('Bulma');
console.log(result); //Person { name: 'Bulma', pets: [] }

console.log(result.sayHello()); //My name is Bulma

result.addPet('Ada');
console.log(result); //Person { name: 'Bulma', pets: [ 'Ada' ] }

result.addPet('Isaac');
console.log(result); //Person { name: 'Bulma', pets: [ 'Ada', 'Isaac' ] }

result.addPet('Jill');
console.log(result); //Person { name: 'Bulma', pets: [ 'Ada', 'Isaac', 'Jill' ] }
