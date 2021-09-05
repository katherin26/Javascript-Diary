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
