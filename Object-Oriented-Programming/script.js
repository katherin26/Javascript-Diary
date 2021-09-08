'use strict';

/*TITTLE: CODING CHALLENGE 

1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed 
property is the current speed speed of the car in km/h; 
2. Implement an 'accelerate' method that will incrase the car's speed by 10 , and log the new speed 
to the console.
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const car1 = new Car('BMW', 120);
console.log(car1);
const car2 = new Car('Mercedes', 95);

Car.prototype.calcAccelerate = function (speed) {
  console.log(`${this.make} ${(this.speed += 10)}km/h New Speed`);
};
car1.calcAccelerate();

Car.prototype.calcBrake = function (brake) {
  console.log(`${this.make} ${(this.speed -= 5)}km/h New Speed`);
};

car1.calcBrake();
car2.calcBrake();
car2.calcBrake();
car2.calcBrake();
car2.calcBrake();

/*TITTLE: CHALLENGE 2 
1.Re-create challenge 1 , but this time using and ES6 class;
2. Add a getter called 'speedUs' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUs' which sets the current speed in mi/h (but converts it to km/h before
storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods , and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h
*/

class Car2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  calcAccelerate() {
    console.log(`${this.make} ${(this.speed += 10)}km/h New Speed`);
  }

  calcBrake() {
    console.log(`${this.make} ${(this.speed -= 5)}km/h New Speed`);
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

let result1 = new Car2('Ford', 120);

console.log(result1.speedUs); //75
console.log(result1); //Car2{make: 'ford', speed:120}
result1.calcAccelerate(); //Ford 130km/h New Speed
console.log(result1.speedUs); //81.25
result1.speedUs = 50;
console.log(result1); //Car2 {make: "Ford", speed: 80}

/*TITTLE: INHERITANCE BETWEEN "CLASSES" : CONSTRUCTOR 
FUNCTIONS*/

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(
    this,
    firstName,
    birthYear
  ); /*The call method indeed can call Person function and we can specify the
  this keyword as the first argument in this function, in this case , we want the this keyword inside this
  function to simply be the this keyword. */

  /*this.firstName = firstName;
  this.birthYear = birthYear;*/
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce(); // My name is Mike and I study Computer Science
