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

/*NOTE: firstObj and secondObj are different objects with the same firstName property. Are these properties
strictly equal to each other?? */

const firstObj = {
  firstName: 'Bill',
};

const secondObj = {
  firstName: 'BILL',
};

console.log(firstObj.firstName === secondObj.firstName);

/*
true ===> Correct Answer
false

string are primitive values and two identical strings are always equal.
*/

/*NOTE: Consider objects obj1 and obj2. What gets logged??*/

const obj1 = { firstName: 'Joe' };
const obj2 = obj1;
obj2.firstName = 'Pete';
console.log(obj1);

/*
firstName: 'Joe';
firstName: 'Pete'; ===> Correct Asnwer

When we set obj2 = obj1 in the second line, obj2 and obj1 are pointing to the same object in memory. Changing the 
firstName property on obj2 will therefore change the firstName property on the only object in memory, so 
obj1.firstName will reflect this change.
*/

/*NOTE: String Methods
String methods are used to work with string in Javascript. Which method would be used to find a specified value and
return the position of the match??

For example, what method would tell you that 'bird' is at position 4 in the following word string??
*/

const word = 'The bird is blue';
/*
length
indexOf ===> Correct Answer
find 
none*/
