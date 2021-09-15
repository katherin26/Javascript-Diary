'use strict';

/*NOTE: Consider the following Set of objects spread into a new array. What gets logged?? */

const mySet = new Set([{ a: 1 }, { a: 1 }]);
const result = [...mySet];
console.log(result);

/*
[{a:1, {a:1}}] ===> Correct answer 
[{a:1}]

Set object will remove duplicates, the two values we create our set with are refereces different objecs in memory,
despite having identical key-value pairs. This is the same reason {a:1} === {a:1} false.
*/

/*NOTE: Consider the following object representing a user, Joe, and his dog, Buttercup. We use Object.freeze to
preserve our object and the attempt to mutate Buttercup's name. What gets logged?*/

const user = {
  name: 'Joe',
  age: 25,
  pet: {
    type: 'dog',
    name: 'Buttercup',
  },
};

Object.freeze(user);

user.pet.name = 'Daffodil';
console.log(user.pet.name);

/*
Daffodil  ===> Correct Answer 
Buttercup
An error is thrown

Object.freeze will perform a shallow freeze on an object, but will not protect deep properties from being mutated.
In this example, we would not be able to mutate user.age, but we have no problem mutating user.pet.name. If we feel 
we need to protect an object from being mutated "all the way down" we could recursively apply Object.freeze or use 
an existing "deep freeze" library.
*/

/*NOTE: Consider the following object */

const exampleObj = {
  1: 1,
  2: 2,
  3: 3,
};

//Is Object.keys equal to Object.values??

console.log(Object.keys(exampleObj) == Object.values(exampleObj)); //false

/* */
