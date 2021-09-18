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

/*NOTE: Reduce Object : Consider the following code block. What gets logged?? */

const scrambled = { 2: 'e', 5: 'o', 1: 'h', 4: 'l', 3: 'l' };

const resultS = Object.values(scrambled).reduce((agg, el) => agg + el, '');
console.log(resultS); // hello

/*Object.values iterates through enumerable integer keys starting from 0 in sequential order. This is the reason
why the letters appear to sort themselves correctly. 

The reduce method = takes two arguments: a reducer function and a initial value.

In this case, our reducer function is (agg,el) => agg + el and our initial value is "".

In the reducer function, agg is the aggregator (which starts at the initial value) and el is an element in the array
being iterated over. In this case, as we iterate through the array, we add the current el to the aggregated value.

If our array was ['a','b','c'],then the aggregator would be a after the first iteration, ab the second time, and 
finally would return abc.
*/

/*NOTE: What's the value of output?? */

const output = `Soon we must all choose between what is ${
  [] ? 'right' : 'wrong'
}
 and what is ${(() => false) ? 'difficult' : 'easy'}`;
console.log(output);

/*Soon we must all choose between what is right and what is difficult */

/*NOTE: Which of the following is a valid to delete the property color from the car object? */

const car = {
  make: 'Mercedez Benz',
  year: '2019',
  color: 'black',
};

/*
A) car.delete('color'); 
B) delete car.color; ===> Correct Answer
C) delete car[color];
D) car.color.delete();

You can use the JavaScript delete operator to remove a property from a object.

Both option A and D will give a TypeError, because neither car.delete nor car.color.delete is a function.

Option C will give a ReferenceError because color is not defined. However, delete car['color'] will work -notice
the quotation marks around color.
*/

/*NOTE: Let's display some notifications to our user! What gets logged in the following snippet?? */

const notifications = 1;

console.log(
  `You have ${notifications} notification${notifications !== 1 && 's'}`
);

/*You have 1 notification false =
Unfortunately, our short-circuit evaluation will not work as intended here: notifications !== 1 && 's' evaluates
to false, meaning we will actually be logging you have 1 notificationfalse. If we want out snippet to work correctly,
we could consider the conditional operator: ${notifications === 1 ? '' : 's'}.

*/
