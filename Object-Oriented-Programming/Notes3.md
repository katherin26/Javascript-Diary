# **Setters and Getters**

```
Are basically functions that get and set a value so just as the name says , but on the outside they still look
like regular properties.

Setters and Getters can actually be very useful for data validation , look in the clas example set fullName(name)
```

**Example with Object literal**

```
const account = {
owner: 'Jonas',
movements: [200, 530, 120, 300],
```

**Getter**

```
get latest() {
return this.movements.slice(-1).pop();
},
set latest(mov) {
//1 parameter
this.movements.push(mov);
},
};

console.log(account.latest); //300

account.latest = 50;
console.log(account.movements); //[200, 530, 120, 300, 50];
```

**Example with Class**

```
class PersonCl {
constructor(fullName, birthYear) {
this.fullName = fullName;
this.birthYear = birthYear;
}

calcAge() {
console.log(2020 - this.birthYear);
}

greet() {
console.log(`Hey ${this.firstName}`);
}

//Getter
get age() {
return 2030 - this.birthYear;
}

//Setter
//Set a property that already exist
set fullName(name) {
console.log(name);
if (name.includes(' ')) this._fullName = name;
else alert(`${name} is not a full name!!!!`);
}

get fullName() {
return this._fullName;
 }
}
```

```
const maty = new PersonCl('MatyV', 1990);
console.log(maty); //PersonCl {firstName: "Maty", birthYear: 1990}
maty.calcAge(); //30
console.log(maty.age); //40
```

**STATIC METHODS**

```
The best way to understand what a static method actually is the build in Array.from method  */

This converts any array like structure to a real Array, .from is attached to the entire constructor and not
to the prototype property of the constructor, therefore all the arrays do not inherit this method.
Array.from(document.querySelectorAll('h1')); //[h1]
```

```
Car.hey = function () {
  console.log(` r u n run `);
};
```

```
Car.hey(); // Whatever object is calling the method will be the this keyword inside of that function, is simply
//that the entire constructor function
```

**CLASS PersonCl**

```
All we need to do is to add the static keyword
Instance methods

{
  get fullName(){
    return this._fullName;
  }

  static hey('Hey there');
  console.log(this);
}

PersonCl.hey(); //Hey there!!
```

## **OBJECT CREATE**

```
Object.create  = works in a pretty different way than constructor functions and classes .
There is still the idea of prototypal inheritance , but the prototype properties is not involved  and also
no constructor function , and no new operator.

Instead , we can use Object.create to essentially manually set the prototype of an object to any other object
that we want.
```

```
const PersonProto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  },
};
```

```
const steven = Object.create(PersonProto);
console.log(steven); //calcAge: f calcAge()
steven.name = 'Steven';
steven.birthYear = 2020;
steven.calcAge();
```

```
Object [steven]

name : 'Steven'
birthYear : 2020
__proto__:
PersonProto

Object.create = We can set the prototype of objects manually to any object that we want and in this case we
manually set the prototype of the steven object to the person proto object , now the two objects are effectively linked through the proto property just like before
```

```
const PersonProto = {
  calcAge() {
    console.log(2020 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven); //calcAge: f calcAge()
steven.name = 'Steven';
steven.birthYear = 2020;
steven.calcAge();
console.log(steven.__proto__ === PersonProto); //{calcAge: f} true
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();


```
