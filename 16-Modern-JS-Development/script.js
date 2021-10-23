//TITTLE: IMPORTING MODULE
//  Change name variable = totalPrice as price
//  Variable changed alredy = tq
//import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//console.log(`importing module`);
//addToCart('bread', 5);
//console.log(price, tq);
//  Import all the exports of a module at the same time = import * as ShoppingCart from './shopingCart'

//import shoppingCart from './shoppingCart';
/*
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);*/

//TITTLE: Example Import Default
/*
import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
add('pizza', 2);
console.log(price);*/

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 2);
add('apples', 2);
console.log(cart);

/*TITTLE: MODULE PATTERN : The main goal of the module pattern is to encapsulate functionality ti have private data
and to expose a public API and the best way of achieving all that is by simply using a function, because a function
give us private data by default and allow us to return values, which can become our public API*/

/*IIFE =  The reason is because this way we don't have to call it separately and we can also ensure that it's only
called once.*/

//This works for closures, remember allow a function to have access to all the variables that were present at its
//birthplace, so the addToCart function was created in the ShoppingCart2, so therefore this function never loses
//connection to its birthplace when we return the function.
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart(sipping cost is ${shippingCost})`
      //shippingCost is accesible !
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('Pizza', 2);
console.log(ShoppingCart2); //cart: Array(2), totalPrice: 237, totalQuantity: 23, addToCart: ƒ}
console.log(ShoppingCart2.shippingCost); //Undefined */

/*TITTLE: COMMON JS MODULES
AMD MODULES AND COMMONJS MODULES

Recently Modules have actually been implemented in Node.js and this one is a way of running JS on a web server
outside of a browser, Now the big consequence of this, is that almost all the modules in the npm repository that
we can use in our own code still use the CommonJS  module System and the reason for that is that npm was originally
only intended for Node which uses commonJS , Later npm became the standar repository for the whole JS world.*/

/*EXPORT: 
This is not going to work in the browser but it would work in Node.js , So this export keyword here is basically
an object and is important in node.*/
/*
export.addTocart = function(product,quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
};*/

/*IMPORT: 
const {addTocart} = require('./shoppingCart.js)
*/

//TITTLE: INTRODUCTION TO NPM = using libraries in this case Lodash-es for clone an nested object.
/*
COMMANDS:

1.Check if we actually have NPM Installed  = NPM -v 
2.NPM initializing ---> questions in order to create package.json = NPM init 
3.Install a library (example) = NPM install leaflet  or NPM i leaflet
              
                   "dependencies" : {
                     "leaflet" : "^1.6.0"
                   }

LIBRARY = LODASH 

Work with objects, Functions, datos and more...

Special version = Lodash-es 

NPM i lodash-es
*/

//NOTE: Using cloneDeep from lodash

import cloneDeep, { values } from 'lodash-es';

//import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
//import cloneDeep from 'lodash';

const state = {
  cart: [
    { product: 'Bread', quantity: 5 },
    { product: 'Pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

//TITTLE: BUNDLING WITH PARCEL AND NPM SCRIPTS
/*
The goal of using parcel is to bundle these three modules together 

Npm i parcel --save-dev
                     "devDependencies" : {
                       "parcel" : "^1.12.4"
                     }

RUN PARCEL : Npx or Npm scripts

Npx parcel index.html

Example of change the version : npm i parcel@2.00.20

"scripts": {
  "start": "Parcel index.html",
  "build": "Parcel build index.html",
}

*/

if (module.hot) {
  module.hot.accept();
}

/*TITTLE: CONFIGURING BABEL AND POLYFILLING =

Babel works with plugins and presets that can both be configured, A plugin is basically a specific
JavaScript feature that we want to transpile .

For example: we want to convert arrow functions back to ES5 but leave everything else in ES6 ,for 
example const and var declarations.

Usually that doesn't make a lot of sense, because we will want to transpile everything at the same
time and usually instead of using simple plugins for each of these features Babel actually uses 
presets.

Presets is basically a bunch of plugins bundled together, parcel is going to use this preset : 
@babel/preset-env and this will automatically select which JS features should be compiled based on
browser support and again that will all happen automatically and out of the box , babel will convert
all features only browsers that are barely used anymore with the market share of less than 0.25% are 
not going to be supported by the transpiling with this preset.
*/

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const doll = new Person('Annabell');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

/* 
Babel can actually only transpile ES6 syntax like arrow functions, classes, const or the spread ope-
rator .
In this example find and promises are news features in JS, they can simply not be transpiled because
does not have an equivalent way of writing them in ES5.

POLYFILLING : Babel used to do polyfilling out of the box some time ago but recently they started to
simply recommending another library and now we have to manually import data as well : core-js
and then we usually only want to import a part of that library and that's called stable, parcel install
this automatically.

Polyfilling recreate a defined function and make it available in the bundle and the code can then use 
it.
 */

import 'core-js/stable';
import 'core-js/stable/array/find';
import 'core-js/stable/promise';

/*Exist one new feature that is not polyfilled by core-js , we need to install =
NPM install regenerator-runtime : npm i regenerator-runtime */

//Pollyfilling async functions
import 'regenerator-runtime/runtime';
