# **OOP IN JAVASCRIPT: PROTOTYPES**

## **CLASSICAL OOP: CLASSES**

```
**CLASS**
    |
    |
    | INSTANTIATION
    |
    |
    V
**INSTANCE**
```

```
Objects (instances) are instantiated from a class, which functions like a blueprint.

```

## **OOP IN JS: PROTOTYPES**

```
**PROTOTYPE**
     |
     |
     |
     |
     |
     V
**OBJECT**
```

- Objects are linked to a prototype object;
- Prototypal inheritance: The prototype contains methods (behavior) that are accessible to all objects, linked
  to that prototype.
- Behavior is delegated to the linked prototype object.

## **EXAMPLE : ARRAY**

```
const num = [1,2,3];
num.map(v => v * 2);
```

```
Each time that we used an array method like map , we are able to use that method because of prototypal inheritance.

MDN web docs = Array.prototype.map()

This Array prototype is the prototype object of all the arrays that we create in Javascript and contains all the array methods , including map.

It means that num is linked to that prototype and therefore , it has access to all the methods that are defined
on the array.prototype.object

Our array inherits the map method or again, We can also say that the array delegated the behavior of mapping to its prototype.
```

- HOW DO WE ACTUALLY CREATE PROTOTYPES?
- AND HOW DO WE LINK OBJECTS TO PROTOTYPES?
- HOW CAN WE CREATE NEW OBJECTS, WITHOUT HAVING CLASSES?

**CONSTRUCTOR FUNCTIONS**

- Techique to create objects from a function.
- This is how built-in objects like Arrays, Maps or Sets are actually implemented.

**ES6 CLASSES**

- Modern alternative to constructor function syntax.
- "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor functions.
- ES6 classes do NOT behave like classes in "classical OOP" (last lecture)

**Object.create()**

- The easiest and most straighforward way of linking an object to a prototype object.
