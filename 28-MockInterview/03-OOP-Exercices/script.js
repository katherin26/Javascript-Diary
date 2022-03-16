//OBJECT ORIENTED PROGRAMMING

//NOTE: before OOP:

const product1Name = 'Milk';
const product1Price = 10;
const product1Quantity = 2;

const product2Name = 'Eggs';
const product2Price = 20;
const product2Quantity = 1;

const product3Name = 'Bread';
const product3Price = 10;
const product3Quantity = 2;

const totalPrice =
  product1Price * product1Quantity +
  product2Price * product2Quantity +
  product3Price * product3Quantity;

console.log(`
    ${product1Name} qty ${product1Quantity} $${product1Price}\n
    ${product2Name} qty ${product2Quantity} $${product2Price}\n
    ${product3Name} qty ${product3Quantity} $${product3Price}\n
    ${product4Name} qty ${product4Quantity} $${product4Price}\n

    Total Price : $${totalPrice}\n
    total Quantity : ${totalQuantity}\n
  `);

/*NOTE: 
      State => properties (age, price, color, energy).
      Behaviour => actions(run, calculate, save, delete, sleep).
      Classes => Molde.
      Objects => Materialized class.
*/

//NOTE: Object Literal.

const product1 = {
  name: 'Milk',
  price: 10,
  quantity: 2,
  calculateTotal: function () {
    return this.price * this.quantity;
  },
};

const product2 = {
  name: 'Eggs',
  price: 20,
  quantity: 2,
  calculateTotal: function () {
    return this.price * this.quantity;
  },
};

const product3 = {
  name: 'Bread',
  price: 10,
  quantity: 3,
  calculateTotal: function () {
    return this.price * this.quantity;
  },
};

const invoice = {
  products: [product1, product2, product3],
  calculatePrice: function () {
    return (
      this.products[0].price * this.products[0].quantity +
      this.products[1].price * this.products[1].quantity +
      this.products[2].price * this.products[2].quantity
    );
  },
  calculateTotalQuantity: function () {
    return (
      this.products[0].quantity +
      this.products[1].quantity +
      this.products[2].quantity
    );
  },

  printInvoice: function () {
    return `
      ${this.products[0].name} qty ${this.products[0].quantity} $${
      this.products[0].price
    }\n
      ${this.products[1].name} qty ${this.products[1].quantity} $${
      this.products[1].price
    }\n
      ${this.products[2].name} qty ${this.products[2].quantity} $${
      this.products[2].price
    }\n

      Total Price : $${this.calculatePrice()}\n
      Total Quantity: ${this.calculateTotalQuantity()}
      `;
  },
};

console.log(invoice.printInvoice());
