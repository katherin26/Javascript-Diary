'use strict';

//NOTE:------------------ENHANCE OBJECT LITERALS----------------------------//
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

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
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

//NOTE:-------------------OPTIONAL CHAINING (?.)---------------------------//

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
//if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);//11

// WITH OPTIONAL CHAINING = ES UN NUEVO FEATURE QUE SALIO EN ES6 PARA 2020
console.log(restaurant.openingHours.mon?.open); // este funciona , si monday exist entonces la propiedad se leera desde alli
console.log(restaurant.openingHours?.mon?.open);

// OPTIONAL CHAINING WITH FUNCTION
function isOpen(restaurant, day, hour) {
  //SUPER OLD WAY
  // if(restaurant.hasOwnProperty('openingHours') === false) return false;
  // if(restaurant.openingHours.hasOwnProperty(day) === false) return false;
  // if(restaurant.openingHours[day].hasOwnProperty('open')===false)return false;
  // if(restaurant.openingHours[day].hasOwnProperty('close')===false)return false;

  // if(restaurant.hasOwnProperty('openingHours')
  //   && restaurant.openingHours.hasOwnProperty(day)
  //   && restaurant.openingHours[day].hasOwnProperty('open')
  //   && restaurant.openingHours[day].hasOwnProperty('close')
  //   && restaurant.openingHours[day].open <= hour
  //   && restaurant.openingHours[day].close >= hour){
  //     return true;
  //   }else{
  //     return false;
  //  }

  //WITH OPTIONAL CHAINING

  // This checks property 'openingHours' exists before accessing nested object
  // Then checks computed property day exists (could be 'mon', 'tue' etc)
  // then checks property 'open' and 'close' exists
  // Then it checks the hour falls withing the open and close hours
  // Example if hour = 22 and open=10 and close=20, then it returns false because 22 does not fall withing the open  and close hours

  return (
    restaurant?.openingHours?.[day]?.open <= hour &&
    restaurant?.openingHours?.[day]?.close >= hour
  );
}

console.log(isOpen(restaurant, 'thu', 22)); //true

//NOTE:--------------LOOPING ARRAYS " THE FOR OF LOOP"----------------------//
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

//NOTE:------------------THE NULISH COALESCING OPERATOR (??)----------------------------//
//Es parecido al or operator pero funciona con los NULISH VALUES = NULL Y UNDEFINED.
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10; // asigna el valor de la derecha si el valor de la izquierda es un falsy(0, '' etc)
console.log(guests); //10

//NULLISH = NULL AND UNDEFINED (NOT 0 OR '')
const guestCorrect = restaurant.numGuests ?? 10; // asigna el valor de la derecha si el valor de la izquierda es null or undefined
console.log(guestCorrect); //0

//NOTE:-----USE ANY DATA TYPE , RETURN ANY DATA TYPE , SHORT-CIRCUITING----//
console.log('-----OR-----');
console.log(3 || 'Bear'); //3 is a truty value
console.log('' || 'Bear'); //Bear is a truty value
console.log(true || 0); //true is a truty value
console.log(undefined || null); //null --- undefined es un falsy value

//TERNARY OPERATOR AND OR
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
restaurant.orderPizza('Mushrooms', 'Onios', 'Olives', 'Spinach');

//NOTE:--------------------REST PATTERN AND PARAMETERS-----------------------------//
//1) DESCTRUCTURING
//NOTE:SPREAD , BECAUSE ON RIGHT SIDE OF =---------------------//

const arrS = [1, 2, ...[3, 4]];
console.log(arrS); // (4)[1,2,3,4]
//REST , BECAUSE ON LEFT SIDE OF =

const [a, b, ...others] = [1, 2, 3, 4, 5]; //destructuring , guardamos en variable con nombre a y b y despues rest pattern , tiene la misma sintaxis que spread operator.
console.log(a, b, others); // se llama rest porque agrega al final el resto.

//SPREAD OPERATOR
/*In other words 
-Unpack values
-Expand values 
-It extracts values or properties from an array or object and puts the in the destination
*/

//SPREAD OPERATOR WITH ARRAYS
//1)
const arrExample = [1, 2, 4];

function sum(n1, n2, n3) {
  return n1 + n2 + n3;
}

console.log(sum(1, 2, 4)); //7
console.log(sum(arrExample[0], arrExample[1], arrExample[2])); //7
console.log(sum(...arrExample)); //7

//2)
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr); //1,2,7,8,9

//MERGE ARRAYS

const arrExample2 = [7, ...arrExample, 8, 9, 10];
console.log(arrExample2); //[7, 1,  2, 4, 8, 9, 10]

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu); //pizza , pasta , Risotto , Gnocci

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

//CLONE ARRAYS
const cloneArr = [...arrExample2];
console.log(cloneArr); //[7, 1,  2, 4, 8, 9, 10]

// const mainMenuCopy = [...restaurant.mainMenu]; //esto seria una copia superficial.
// console.log(mainMenuCopy); // pizza pasta risotto.

//NOTE: SPREAD OPERATOR //REAL WORLD EXAMPLE

// const ingredients = [
//   prompt("Let's make pasta!!!! INGREDIENT 1??"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3'),
// ];
// console.log(ingredients); //[a,b,c];

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//NOTE: REST AND SPREAD OPERATOR AND DESTRUCTURING
//EN ESTE EJEMPLO AGREGAMOS AL INICIO REST OPERATOR Y EL SPREAD DENTRO DE EL ARRAY QUE SE VA A DESTRUCTURING.
const [pizza, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//al usar rest operator no agrega el vacio solo los strings y
//el other food es === ["Risotto","Focaccia", "Bruschetta", "Garlic Bread", "Cap rese Salad"]

//----------------------------------------------------------//
//NOTE:REST OPERATOR
//REST OPERATOR IN OBJECTS

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //{thu:{...}, fri:{...}}

//DESTRUGTURING AND REST OPERATOR

const pet = { name: 'Pepito', age: '7', breed: 'Poodle' };
const { name, ...rest } = pet;
console.log(name); //Pepito
console.log(rest); //{age:'7',breed:'poodle'}

//NOTE: FUNCTION - DESTRUGTURING AND REST OPERATOR

function greetPet({ name, ...otherProps }) {
  console.log(
    `Hello ${name}, you have this props ${JSON.stringify(otherProps)}`
    //JSON.stringgify = convierte un object en un string.
  );
}

greetPet(pet);

//NOTE: FUNCTIONS -REST OPERATOR
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3); //[2,3] //5
add(5, 3, 7, 2); //[5,3,7,2] //17
add(8, 2, 5, 3, 2, 1, 4); //[8,2,5,3,2,1,4] //25

const x = [23, 5, 7];
add(...x); //[23,5,7] //35

//NOTE: OBJECTS

const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Guiseppe',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristaurante Roma';
console.log(restaurantCopy.name); //Ristaurante Roma
console.log(restaurant.name); //Classico Italiano

//NOTE: WORKING WITH OBJECT RESTAURANT

restaurant.orderDelivery({
  // aqui se llamo la funcion y se agrega al object esta informacion.
  //lo que esperamos es que arriba se haga destructuring de esta informacion.
  time: '22:30',
  address: 'Via del sole,21',
  mainIndex: 2,
  starterIndex: 2,
}); //Order received!!!Garlic Bread and Risotto will be delivered to Via del sole,21 at 22:30

restaurant.orderDelivery({
  address: 'Via del sol,21',
  starterIndex: 1,
}); // Order received!!!Bruschetta and Pizza will be delivered to Via del sol,21 at 20:00

//NOTE:------------------------DESTRUCTURING OBJECTS----------------------------------//
// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

//DEFAULT VALUES
//const { menu = [], starterMenu: starters = [] } = restaurant;
//console.log(menu, starters);

//MUTATING VARIABLES
let d = 111;
let e = 999;
const obj = { d: 23, e: 7, f: 14 };
({ d, e } = obj);
console.log(d, e); //23 7

//NESTED OBJECTS
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); //11 23

//NOTE:------------------------DESTRUCTURING ARRAYS----------------------------------//
const arr3 = [2, 3, 4];
const g = arr3[0];
const h = arr3[1];
const i = arr3[2];

const [x, y, z];
