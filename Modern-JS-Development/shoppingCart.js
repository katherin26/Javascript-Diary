//TITTLE: EXPORTING MODULE
console.log(`Exporting module!!`);

const shippingCost = 10;
export const cart = [];

//We need to use exports when we wanna used the variables (shippingCost and cart). In ES6 there are two types of
//exports : Named Exports and default exports

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

//Change name variable in export module = totalQuantity as tq
export { totalPrice, totalQuantity as tq };

//TITTLE: EXPORT DEFAULT

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
