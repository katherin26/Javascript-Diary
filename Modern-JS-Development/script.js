//TITTLE: IMPORTING MODULE
//  Change name variable = totalPrice as price
//  Variable changed alredy = tq
//import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
//console.log(`importing module`);
//addToCart('bread', 5);
//console.log(price, tq);
//  Import all the exports of a module at the same time = import * as ShoppingCart from './shopingCart'

/*
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);*/

//TITTLE: Example Import Default
import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
add('pizza', 2);
console.log(price);

/*TITTLE: MODULE PATTERN : The main goal of the module pattern is to encapsulate functionality ti have private data
and to expose a public API and the best way of achieving all that is by simply using a function, because a function
give us private data by default and allow us to return values, which can become our public API*/

/*IIFE =  The reason is because this way we don't have to call it separately and we can also ensure that it's only
called once.*/

//This works for closures, remember allow a function to have access to all the variables that were present at its
//birthplace, so the addToCart function was created in the ShoppingCart2, so therefore this function never loses
//connection to its birthplace when we return the function.

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
console.log(ShoppingCart2.shippingCost); //Undefined
