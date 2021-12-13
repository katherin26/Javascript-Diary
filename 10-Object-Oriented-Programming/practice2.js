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
