# **Setters and Getters**

```
Are basically functions that get and set a value so just as the name says , but on the outside they still look
like regular properties.

Setters and Getters can actually be very useful for data validation , look in the class example set fullName(name)
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

# **INHERITANCE BETWEEN "CLASSES"**

1. Constructor functions
2. ES6 Classes
3. Object.create()

```
                                                                   "CLASS" 2 (Parent)
                                                                     PERSON

 Constructor   ====>  Prototype
   Function              / \
                          |    INHERITANCE BETWEEN "CLASSES"
                          |
 Constructor   ====>  Prototype                                     "CLASS" 1 (child)
   Function                                                           STUDENT
                         / \
                          |                                         More specific type of person
                          |                                          ideal as child class.
                          |
                          |
                       OBJECT
```

```
Inheritance =
Child classes can share behavior from their parent classes, In this diagram, basically what we want to do is to make Person.prototype the Prototype of student.prototype.

We need to create this connection manually, so to link these two prototype objects, We are gonna use object.create, defining prototypes manually is exactly what object.creates does (see linking prototypes in the example.)
```

```


                                                                        ====> Prototype           ===> null
Constructor function   ======>  Prototype             Person.prototype       [Object.prototype]
   [Person()]                  [Person.prototype]     {species:"Homo}
                                                        calcAge: f()
                                             / \
                                              |
  Student.prototype = Object.create(Person.   |  .__proto__       <==== Create connection manually
       prototype);                                                         using Object.create()

Constructor function   ======>   Prototype
   [Student()]                 [Student.prototype]
                                    proto__:
                                 Person.prototype

                                             / \
                                              |
           const mike = new Student('Mike',)  |  .__proto__

                                            Object
                                            [mike]

                                            proto__:
                                        Student.prototype
```

## **INHERITANCE BETWEEN "CLASSES" : CONSTRUCTOR FUNCTIONS**

```
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2040 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);

  The call method indeed can call Person function and we can specify the this keyword as the first
  argument in this function, in this case , we want the this keyword inside this function to simply be
  the this keyword.
  /*this.firstName = firstName;
  this.birthYear = birthYear;*/

  this.course = course;
};
```

**LINKING PROTOTYPES**

```
Student.prototype inherits from person.prototype ,we need to create this connection before we add any
more methods to the prototype object of student and that's because Object.create will return an empty object.
So at this point Student.prototype is empty and we can add methods like (.introduce)
```

```
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');

mike.introduce(); // My name is Mike and I study Computer Science
mike.calcAge(); //20

console.log(mike.__proto__); //Person{introduce: f} this object contains the introduce method.
console.log(mike.__proto__.__proto__); //{calcAge: ƒ, constructor: ƒ} This contains the calcAge function.

console.log(mike instanceof Student); //true
console.log(mike instanceof Person); //true
console.log(mike instanceof Object); //true

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor); //ƒ Student(firstName, birthYear, course)
```

## **INHERITANCE BETWEEN "CLASSES" : ES6 CLASSES**

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
    console.log(`Hey ${this.fullName}`);
  }

  //Getter
  get age() {
    return 2020 - this.birthYear;
  }

  //Setter
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!!!!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hey there!!!`);
  }
}

const jason = new PersonCl('JasonM', 1994);
```

```
 To implement inheritance between ES6 classes, we need the extend keywords and the super function,
so to make this student class inherit from the person class all we need to do is to say extends and then
the person class
```

```
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    /*Super function
    Always needs to happen first! and then we will be able to access the this keyword.
    In this case the super function would automatically be called with all the arguments that are passed
    into this constructor. */
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I styudy ${this.course}`);
  }

  /*This method overrode the one that was already there in the prototype chain and that's because
  this new calcAge method appears first in the prototype chain.*/
  calcAge() {
    console.log(`I'm ${
      2037 - this.birthYear
    } years old, but as a student I feel more like
    ${2037 - this.birthYear + 10}`);
  }
}

const martin = new StudentCl('Martin PO', 2012, 'Computer Science');
console.log(martin);
martin.introduce();
martin.calcAge();
```

## **INHERITANCE BETWEEN "CLASSES" : OBJECT.CREATE**

```

                                          Prototype
                                        [PersonProto]        <- - - - - - - -|
                                      calcAge: function                      |
                                             / \                             |
  const StudentProto =                        |                              |
  Object.create(PersonProto);                 |    .__proto__                |
                                              |                              |
                                          Prototype
                                        [StudentProto]               Student inherits
                                            proto :                     from Person
                                          PersonProto

  const jay =                                / \
  Object.create(StudentProto);                |    .__proto__
                                              |
                                              |
                                            Object
                                            [jay]

                                            proto:
                                         StudentProto


```

```
const PersonProto = {
  calcAge() {
    console.log(2050 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
```

```
Now we want to add another prototype in the middle of the chain, between PersonProto and the object ,
so what we are going to do is to make student inherit directly from person.
```

```
const bella = Object.create(PersonProto);
```

```
Prototype of students
The StudentProto object is now the prototype of the jay object and the PersonProto object is in turn the
prototype of StudentProto, so therefore , PersonProto is a parent prototype of jay which means that's in the
Prototype chain
```

```
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2020, 'Computer Science');
console.log(jay);
jay.introduce();
jay.calcAge();
```
