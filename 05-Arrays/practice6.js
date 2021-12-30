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

//Destructuring and assigning to new variables names and providing default values.

const { a: aa = 10, b: bb = 15 } = { a: 13 };

console.log(aa); // 13
console.log(bb); // 15

//Destructuring objects : Unpacking fields from objects passed as a function parameter.

const user = {
  id: 42,
  displayName: 'Lola',
  fullName: {
    firstName: 'Lucrecia',
    lastName: 'Doe',
  },
};

function userId({ id }) {
  return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(userId(user)); //42
console.log(whois(user)); //Lola is Lucrecia.

//Destructuring objects : Setting a function parameter's default value.

function drawChart({
  size = 'big',
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
}); // big{x: 18, y:30} 30
