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

/*TITTLE: CODING CHALLENGE 3 
1. Use a constructor function to implement an Electric car (called EV = Electric vehicle) as a CHILD "class"
of Car. Besides a make and current speed , the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 
'chargeTo';
3.Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. 
Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge
  to 90%) . Notice what happens when you 'accelerate'!.

  DATA CAR 1 : 'Tesla' going at 120 km/h, with a charge of 23%
*/

const Car3 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car3.prototype.accelerate = function () {
  console.log(`${this.make} ${(this.speed += 10)}km/h New Speed`);
};

Car3.prototype.brake = function () {
  console.log(`${this.make} ${(this.speed -= 5)}km/h New Speed`);
};

const ElectricVehicle = function (make, speed, battery) {
  Car3.call(this, make, speed);
  this.battery = battery;
};

//LINK THE PROTOTYPES
ElectricVehicle.prototype = Object.create(Car3.prototype);

Car3.prototype.chargeBattery = function (chargeTo) {
  this.battery = chargeTo;
};

Car3.prototype.accelerate = function () {
  console.log(
    `${this.make} going at ${(this.speed += 20)} with a charge of ${this
      .battery--}%`
  );
};

const tesla = new ElectricVehicle('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla); //ElectricVehicle {make: "Tesla", speed: 120, battery: 90}
tesla.accelerate(); //Tesla going at 140 with a charge of 90%

/*TITTLE: CODING CHALLENGE 4

1. Re-create challenge 3 , but this time using ES6 classes: create an 'EVCL' child class of the 'CarCl'
class.
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 
'brake' method in the Car class . They experiment with chaining.

DATA CAR 1 : 'Rivian' going at 120 km/h, with a charge of 23%
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    console.log(`${this.make} ${(this.speed += 10)}km/h New Speed`);
  }
  brake() {
    console.log(`${this.make} ${(this.speed -= 5)}km/h New Speed`);
    return this;
  }
}

class EVCL extends CarCl {
  //Public field
  //Private field
  #charge;
  constructor(make, speed, charge) {
    super(make, speed, charge);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    console.log(
      `${this.make} going at ${(this.speed += 20)} with a charge of ${this
        .#charge--}%`
    );
    return this;
  }
}

const rivian = new EVCL('rivian', 120, 23);
console.log(rivian);
//console.log(rivian.#charge);
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate();
