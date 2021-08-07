'use strict';

//------------------ENHANCE OBJECT LITERALS----------------------------//
const openingHours = {
  // si se quiere agregar este object en restaurant se coloca opening Hours, dentro de restaurant .
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours, //Enhance objects.

  //ENHANCE EN METODOS = SE BORRA EL FUNCTION , ES LA NUEVA SINTAXIS
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(starterIndex = 1, mainIndex = 0, time = '20:00', address) {
    //aqui se hace el destructuring.
    // console.log(starterIndex, mainIndex, time, address);
    console.log(
      `Order received!!!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//-------------------OPTIONAL CHAINING (?.)---------------------------//

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
//if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);//11

// WITH OPTIONAL CHAINING = ES UN NUEVO FEATURE QUE SALIO EN ES6 PARA 2020
console.log(restaurant.openingHours.mon?.open); // este funciona , si monday exist entonces la propiedad se leera desde alli
console.log(restaurant.openingHours?.mon?.open);

//--------------LOOPING ARRAYS " THE FOR OF LOOP"----------------------//
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

/* for (const item of menu.entries()) {
   //entries saca el indice de cada uno.
  console.log(`${item[0] + 1}: ${item[1]}`); // esto es para que inicie como un menu desde uno y no desde 0;
 }*/
//------------------FOR OF CON DESTRUGTURING----------------------------//
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

//------------------THE NULISH COALESCING OPERATOR (??)----------------------------//
//Es parecido al or operator pero funciona con los NULISH VALUES = NULL Y UNDEFINED.
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); //10

//NULLISH = NULL AND UNDEFINED (NOT 0 OR '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); //0

//-----USE ANY DATA TYPE , RETURN ANY DATA TYPE , SHORT-CIRCUITING----//
console.log('-----OR-----');
console.log(3 || 'Bear'); //3 is a truty value
console.log('' || 'Bear'); //Bear is a truty value
console.log(true || 0); //true is a truty value
console.log(undefined || null); //null --- undefined es un falsy value

restaurant.numGuest = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //10

const guests2 = restaurant.numGuests || 10;
console.log(guests2); //10

console.log('-------AND-------');
console.log(0 && 'Dog'); // retorna 0 porque es el primer falsy value.
console.log(7 && 'Dog'); // cuando los valores son truty , retorna Dog porque es el ultimo'
console.log('Hello' && 23 && null && 'Dog'); // null = falsy value.

//----------------------PRACTICAL EXAMPLE-------------------------------------//
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//--------------------REST PATTERN AND PARAMETERS-----------------------------//
//1) DESCTRUCTURING
//SPREAD , BECAUSE ON RIGHT SIDE OF =---------------------//

const arrS = [1, 2, ...[3, 4]];
console.log(arrS); // (4)[1,2,3,4]
//REST , BECAUSE ON LEFT SIDE OF =

const [a, b, ...others] = [1, 2, 3, 4, 5]; //destructuring , guardamos en variable con nombre a y b y despues rest pattern , tiene la misma sintaxis que spread operator.
console.log(a, b, others); // se llama rest porque agrega al final el resto.
