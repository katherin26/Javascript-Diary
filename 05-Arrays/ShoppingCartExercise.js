/*NOTE: Create a function that creates an invoice for a an order at a super market, the function should 
look at the products in the shopping cart and, then look up the price of the product in the products 
array, then calculate the total amount multiplying by the quantity. At the the invoice should include 
the total amount of all the products. */

const products = [
  { sku: '101', name: 'Banana', unitPrice: 1 },
  { sku: '102', name: 'Apple', unitPrice: 1.5 },
  { sku: '103', name: 'Snuggle', unitPrice: 5 },
  { sku: '104', name: 'Milk', unitPrice: 10 },
  { sku: '105', name: 'Greek Cheese', unitPrice: 7 },
];

const shoppingCart = [
  { sku: '105', quantity: 2 },
  { sku: '103', quantity: 1 },
  { sku: '102', quantity: 3 },
  { sku: '104', quantity: 4 },
  { sku: '101', quantity: 1 },
];

//Empty variables finalTotal and details.

const finalTotal = [];
console.log(finalTotal);
const details = [];

//Calculate unitPrice and quantity.

function calcQuantity(unitPrice, quantity) {
  const total = unitPrice * quantity;
  return total;
}

//Iteration over products and shoppingCart.
for (let i = 0; i < products.length; i++) {
  for (let j = 0; j < shoppingCart.length; j++) {
    if (products[j].sku === shoppingCart[i].sku) {
      const result = calcQuantity(
        products[j].unitPrice,
        shoppingCart[i].quantity
      );

      let objTotal = {
        product: products[j].name,
        unitPrice: products[j].unitPrice,
        quantity: shoppingCart[i].quantity,
        total: result,
      };
      finalTotal.push(result);
      details.push(objTotal);
    }
  }
}

//CalcTotal(obj).

function calcTotal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

//Print the results :

console.log(calcTotal(finalTotal));
console.log(details);

//Print the receipt.

let receipt = {
  total: calcTotal(finalTotal),
  details: details,
};

console.log(receipt);
