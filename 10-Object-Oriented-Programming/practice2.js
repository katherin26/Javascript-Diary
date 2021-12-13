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
