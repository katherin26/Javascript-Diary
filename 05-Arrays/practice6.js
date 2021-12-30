'use strict';

//NOTE: Destructuring objects

//Destructuring objects.

const user = {
  id: 42,
  isVerified: true,
};

const { id, isVerified } = user;
console.log(id); //42
console.log(isVerified); //true

//Destructuring objects using rest operator.

let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
console.log(a); //10
console.log(b); //20
console.log(rest); //{c:30, d:40}

//Destructuring objects assigning to new variable names.

const o = { p: 42, q: true };
const { p: foo, q: bar } = o;
console.log(foo); //42
console.log(bar); //true

//Destructuring and default values.

const { j = 10, k = 5 } = { j: 3 };
console.log(j); //3
console.log(k); //5
