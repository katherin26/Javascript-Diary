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

//NOTE: OBJECTS USING FUNCTION (CONSTRUCTOR FUNCTIONS):

//CONSTRUCTOR FUNCTION
function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

//METHODS:
//We need add prototype always:

Product.prototype.calculateTotal = function () {
  return this.price * this.quantity;
};

//CONSTRUCTOR FUNCTION
function Invoice() {
  this.products = [];
}

//METHODS:
Invoice.prototype.addProduct = function (product) {
  this.products.push(product);
  return this;
};

//METHODS:
Invoice.prototype.calculatetotalPrice = function () {
  return (
    this.products[0].quantity +
    this.products[1].quantity +
    this.products[2].quantity
  );
};

//METHODS:
Invoice.prototype.printInvoice = function () {
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

        Total Price : $${this.calculatetotalPrice()}\n
        Total Quantity : ${this.calculateTotalQuantity()}\n
        
    `;
};

const product1 = new Product('Milk', 10, 2);
const product2 = new Product('Eggs', 20, 2);
const product3 = new Product('Bread', 30, 2);
const invoice = new invoice();

invoice.addProduct(product1).addProduct(product2).addProduct(product3);

console.log(invoice.printInvoice());

//NOTE: CLASSES

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotal() {
    return this.price * this.quantity;
  }
}

class Invoice {
  #products;
  constructor() {
    this.#products = [];
  }

  addProduct(product) {
    this.#products.push(product);
  }

  calculatetotalPrice() {
    return (
      this.#products[0].price * this.#products[0].quantity +
      this.#products[1].price * this.#products[1].quantity +
      this.#products[2].price * this.#products[2].quantity
    );
  }

  calculateTotalQuantity() {
    return (
      this.#products[0].quantity +
      this.#products[1].quantity +
      this.#products[2].quantity
    );
  }

  printInvoice() {
    return `
      ${this.#products[0].name} qty ${this.#products[0].quantity} $${
      this.#products[0].price
    }\n
      ${this.#products[1].name} qty ${this.#products[1].quantity} $${
      this.#products[1].price
    }\n
      ${this.#products[2].name} qty ${this.#products[2].quantity} $${
      this.#products[2].price
    }\n

      Total Price: $${this.calculatetotalPrice()}\n
      Total Quantity : ${this.calculateTotalQuantity}
      `;
  }
}

const product1 = new Product('Milk', 10, 2);
const product2 = new Product('Eggs', 20, 1);
const product3 = new Product('Bread', 10, 2);
const invoice = new Invoice();

invoice.addProduct(product1);
invoice.addProduct(product2);
invoice.addProduct(product3);

console.log(invoice.printInvoice());

// Inheritance

class Bird {
  constructor(name) {
    this.name = name;
  }

  fly() {
    console.log('Flying like a bird updated');
  }
}

class Eagle extends Bird {
  constructor(name) {
    super(name);
  }
}
class HummingBird extends Bird {
  constructor(name) {
    super(name);
  }
}
class Parrot extends Bird {
  constructor(name) {
    super(name);
  }
}

const eagle = new Eagle('Proxy');
const hummingbird = new HummingBird('Proxy');
const parrot = new Parrot('Proxy');
eagle.fly();
hummingbird.fly();
parrot.fly();

// Polymorphism

class Human {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log('Hello I am ', this.name);
  }
}

class AmericanHuman extends Human {
  constructor(name) {
    super(name);
  }
}
class ColombianHuman extends Human {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log('Hey parcero ', this.name);
  }
}
class FrenchHuman extends Human {
  constructor(name) {
    super(name);
  }
}
class GermanHuman extends Human {
  constructor(name) {
    super(name);
  }
}

const american = new AmericanHuman('Gringo');
const colombian = new ColombianHuman('parcero');
const french = new FrenchHuman('frenchie');
const german = new GermanHuman('guter');

american.speak();
colombian.speak();
french.speak();
german.speak();
