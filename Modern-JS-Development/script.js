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
