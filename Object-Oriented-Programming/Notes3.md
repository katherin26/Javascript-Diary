# **CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR**

```
const Human = function (firstName, birthYear) {

//Instance properties

//console.log(this); //Human{}
this.firstName = firstName;
this.birthYear = birthYear;
};
```

```
const pepa = new Human('Pepa', 1991);
console.log(pepa); // Human {firstName: "Pepa", birthYear: 1991}
```

1. New {} is created
2. Function is called, this = {}

```
The this keyword will point to the new object that was created in step number one , all of this happens
only because we are calling the function using the new operator.
```

3. {} Linked to a prototype
4. Function automatically return {} = At this point, the object no longer needs to be empty and this is actually the trick of making the constructor function work .

```
const matilda = new Human('Matilda', 2017);
const jack = new Human('Jack', 1887);
console.log(matilda, jack); //Human {firstName: "Matilda", birthYear: 2017} Human {firstName: "Jack", birthYear: 1887}

console.log(pepa instanceof Human); //true
```

## **PROTOTYPES**

```
Each and every function in Javascript automatically has a property called prototype and that includes
constructor functions , Now every object that's created by a certain constructor function will get access
to all the methods and properties that we define on the constructors prototype property _/

console.log(Human.prototype); //{constructor: ƒ}
Human.prototype.calcAge = function () {
console.log(2020 - this.birthYear);
};
```

```
pepa.calcAge(); //29 = We have access because of prototypal inheritance.
```

```
The this keyword in each object is as always set to the object that is calling the method.
Any object always has access to the methods and properties from its prototype and the prototype of Pepa
and Matilda is Human.prototype.
```

```
console.log(pepa.__proto__); // {calcAge: ƒ, constructor: ƒ}

This is the prototype of pepa and inside we can see the calcAge method and that's why pepa
is able to use this method. So the prototype of pepa object is essentially the prototype property
of the constructor function.
```

```
console.log(pepa.__proto__ === Human.prototype); //true

IMPORTANT: CONFUSING PART =
Human.prototype is not the prototype of Human, But instead , it is what's gonna be used as the prototype
of all the objects that are created with the Human constructor function.


console.log(Human.prototype.isPrototypeOf(pepa)); //true
```

```
__proto__ = step number three = linked to prototype, and it sets its value to the prototype property of
the function that is being called
It sets the proto property on the object to the prototype property of the constructor function and this
is how Javascript knows internally that the pepa object is connected to Human.prototype
When you see the pepa object, you can see that property in there :

__proto__: Object
calcAge: f()

And then you see Human.prototype which contains calcAge function
```

## **SET PROPERTIES ON THE PROTOTYPE**

```
Human.prototype.species = 'Homo Sapiens';
console.log(pepa, matilda);
```

```
__proto__:
calcAge: f()
species: "Homo Sapiens"

```

```
console.log(pepa.species, matilda.species); // Homo Sapiens Homo Sapiens
Both of these objects will then inherit so they will get access to this property from the
prototype.
```

```
When we take a look at these objects , Well this property is not really directly in the object so it's
not it's own property .
Own properties are only the ones that are declared directly on the object itself, So not including the
inherited properties.
```

```
console.log(pepa.hasOwnProperty('firstName')); //true
console.log(pepa.hasOwnProperty('lastName')); //false
```

## **HOW PROTOTYPAL INHERITANCE / DELEGATION WORKS**

```
                       .prototype
Constructor function  ------------->       Prototype
    [Person()]                        [Person.prototype]
                      ------------->   calcAge: function
                      .constructor
                                                / \
const Person = function(name, birthYear){        |      PROTOTYPAL INHERITANCE/DELEGATION
    this.name = name;                            |      PROTOTYPE CHAIN
    this.birthYear = birthYear;                  |
};                                            Object

                                              [Pepa]
                                            name: 'Pepa'
                                            birthYear: 1990
                                            __proto__:         <---- Always points to an object's prototype.
                                            Person.prototype


const pepa = new Person('Pepa',1990);
pepa.calcAge();

This is how it works with function
constructors and ES6 classes.

When we call the calcAge function on the pepa object ,Javascript can not find the calcAge function
directly in the pepa object.
If a property or a method cannot be found in a certain object Javascript will look into his prototype
in this case is : calcAge: function and tha's how the calcAge function can run correctly and return a result.
And this behavior is what we called prototypal inheritance.
We can create as many person objects as we like and all of them will then inherit this method.
So we can call this calcAge method on all the person objects without the method being directly attached to all
the objects themselves
Now the fact that Pepa is connected to a prototype and the ability of looking up methods and properties in a prototype is what we call the prototype chain, The pepa object and it's prototype basically from a prototype chain.
```

**THE NEW OPERATOR**

```
1. An empty object is created.
2. This keyword in constructor function call is set to the new object.
3. The new object is linked (__proto__property) to the constructor function's prototype property.
4. The new object is returned from the constructor function call.
```

**THE PROTOTYPE CHAIN**

```
Constructor function ==>     Prototype   ==> null
    [Object()]             [Object.prototype]
                                  / \
                                   |
                                   |
                                   |
Constructor function ==>       Prototype
   [Person()]             [Person.prototype]

```

```
The pepa object is linked with .__proto__ to its prototype = [Person.prototype], but [Person.prototype] is an
object itself! , every object in Javascript has a prototype and the prototype of person.prototype is
object.prototype and this is an object which means that it has been built by the built in object constructor function (Constructor function [Object()]) that is called behind the scenes.

NOTE: Built-in constructor function for objects. This is used when we write an object literal:
{...} === new Object(...)

Prototype chain = series of links between objects, linked through prototypes(similar to the scope chain).
Object.prototype is usually the top which means that it's prototype is null, which then marks the end of the
prototype chain
```

## **PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS**
