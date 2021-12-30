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

//Nested object and array destructuring.

const metadata = {
  title: 'Scratchpad',
  translations: [
    {
      locale: 'de',
      localization_tags: [],
      last_edit: '2014-04-14T08:43:37',
      url: '/de/docs/Tools/Scratchpad',
      title: 'JavaScript-Umgebung',
    },
  ],
};

let {
  title: englishTitle,
  translations: [{ title: localeTitle }],
} = metadata;

console.log(englishTitle); //Scratchpad
console.log(localeTitle); //JavaScript-Umgebung

//Destructuring objects with for if iteration.

const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane S',
      father: 'Harry S',
      sister: 'Samantha S',
    },
    age: 35,
  },

  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah J',
      father: 'Richard J',
      brother: 'Howard J',
    },
    age: 25,
  },
];

for (const {
  name: n,
  family: { father: f },
} of people) {
  console.log('Name: ' + n + ',Father:' + f);
}
//Name: Mike Smith,Father:Harry S
//Name: Tom Jones,Father:Richard J

//Destructuring objects, computed object property names and Destructuring.

//is a dinamic way to search the key in the object.
let key = 'z';
let { [key]: foo } = { z: 'bar', x: 'hhh' };

console.log(foo); //hhh

//Destructuring objects = Invalid Javascript identifier as a property name.

const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); //true

//Destructuring objects and Combined Array .

const props = [
  { id: 1, name: 'Fixx' },
  { id: 2, name: 'Buxx' },
  { id: 3, name: 'FixxBuxx' },
];

const [, , { name }] = props;
console.log(name); //FixxBuxx

//NOTE: Spread OPerator.

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];

console.log(newArr); //[1,2,7,8,9]

const restaurant = {
  name: 'CLassico Italiano',
  location: 'Via Angelo Tavanti 23,Firenze, Italy',
  categories: ['Italian', 'Pizzeria', ' Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

//add a new menu 'gnocci' with spread operator.

const newMenu = [...restaurant.mainMenu, 'gnocci'];
console.log(newMenu); //['Pizza', 'Pasta', 'Risotto', 'gnocci']

//Copy array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); //[ 'Pizza', 'Pasta', 'Risotto' ]

//Join 2 arrays.

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); /*[
  'Focaccia',
  'Bruschetta',
  'Garlic Bread',
  'Caprese Salad',
  'Pizza',
  'Pasta',
  'Risotto'
] */
