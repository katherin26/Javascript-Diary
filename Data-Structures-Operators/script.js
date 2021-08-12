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
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    //thu{open:}
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};
*/

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

//NOTE:ahora vamos a hacer un loop por todo el array y luego log to the console = ya sea que el restaurante este abierto o cerrado en cada uno de los dias.

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`Oh ${day}, We open at ${open}`);
}
/*
Oh mon, We open at Closed
Oh tue, We open at Closed
Oh wed, We open at Closed
Oh thu, We open at 12
Oh fri, We open at 11
Oh sat, We open at 0
Oh sun, We open at Closed 
*/

//NOTE:------------------FOR OF AND DESTRUGTURING AND ENTRIES()----------------------------//
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

//NOTE: METHODS
console.log(`METHODSSSSS`);
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//NOTE:ARRAYS
const users = [{ name: 'kat', email: 'Hello@kat.com' }];
console.log(users[0]?.name ?? 'user array empty');
//solo si existe users[0] toma su nombre .name y si no 'user array empty'
//ANTERIORMENTE =
//if(users.length > 0) console.log(user[0].name);
//else console.log(('user array empty'));

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

//TITTLE:-----------------PRACTICAL EXAMPLE WITH RESTAURANT OBJECT--------------------------//
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
restaurant.orderPizza('Mushrooms', 'Onios', 'Olives', 'Spinach');

//TITTLE:--------------------REST PATTERN AND PARAMETERS-----------------------------//
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

//TITTLE:------------------------LOOPING OBJECTS = KEYS,VALUES,ENTRIES------------------//

//NOTE:1)PROPERTY NAMES
const properties = Object.keys(openingHours);
console.log(properties); //['thu','fri','sat']
console.log(`We are open in ${properties.length} days`); //in 3 days
for (const day of Object.keys(openingHours)) {
  console.log(day); //thu,fri,sat
}

//NOTE:
let openStr = `We are open on ${properties.length} days`;
for (const day of properties) {
  openStr += ` ${day},`;
}
console.log(openStr); //We are open on 3 days thu, fri, sat

//NOTE:2)PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values);

/*//[{...}, {...},{...}]
  0: {open:12, close:22}
  1: {open:11, close:23}
  2: {open:0, close:24}
*/

//NOTE:ENTIRE OBJECT, ENTRIES (NAME + VALUE)
const entries = Object.entries(openingHours);
console.log(entries); //[Array(2),Array(2),Array(2)] = Se transforma el object en un array donde esta el key and value.

//NOTE:[KEY,VALUE] DESTRUCTURING
for (const [key, { open, close }] of entries) {
  console.log(key); //thu fri sat
  console.log(`On ${key} we open at ${open} and close at ${close}`); //On thu we open at 12 and close at 22 etc...
}

//TITTLE:------------------------DESTRUCTURING OBJECTS----------------------------------//
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

const [x1, y1, z1] = arr3;
console.log(x1, y1, z1); // 2 3 4
console.log(arr3); //[2,3,4]

let [main, secondary] = restaurant.categories;
// si se quiere sacar el tercer elemento pero no el segundo se agraga el espacio vacio.
console.log(main, secondary); //Italian pizzeria

//SWITCHING VARIABLES
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); //Pizzeria Italian

[main, secondary] = [secondary, main];
console.log(main, secondary); //Italian Pizzeria

//RECEIVE 2 RETURN VALUES FROM A FUNCTION
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); //Garlic Bread Pizza

//NESTED DESTRUCTURING
const nested = [2, 4, [5, 6]];
//const [i , , j] = nested2;
const [i1, , [j, k]] = nested;
console.log(i1, j, k); //2,5,6

//DEFAULT VALUES
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //8 9 1

//TITTLE:-----------------------------SETS----------------------------------------------//
/*SET = es una coleccion de valores unicos , eso significa que un SET nunca puede tener un duplicado
y esa cualidad lo hace unico en determinadas situaciones .
Para escribir un new Set() ==> se debe pasar un Iterable.

//NOTE: SET NO TIENE INDEX Y NO HAY MANERA DE SACAR VALUES
*/

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet); //Set(3) {'Pasta','Pizza','Risotto}
console.log(new Set('Cat')); //Set(3) {"C", "a", "t"}

//NOTE:SET SIZE =
console.log(orderSet.size); //3

//NOTE:SET HAS() ===> METHOD ===> SIMILAR TO INCLUDE IN ARRAYS.
console.log(orderSet.has('Pizza')); //true
console.log(orderSet.has('Bread')); //false

//NOTE:SET ADD
orderSet.add('Garlic Bread'); //Set(4) {'Pasta', 'Pizza', 'Risotto', 'Garlic Bread}
orderSet.delete('Risotto'); //Set(3) {'Pasta','Pizza', 'Garlic Bread'}
//orderSet.clear(); //set(0){}
console.log(orderSet); //Set(3) {"Pasta", "Pizza", "Garlic Bread"}

//NOTE:SET LOOP
for (const order of orderSet) console.log(order); // Pasta Pizza Garlic Bread

//NOTE:SET USOS = "Casi siempre se usa para remover duplicados"
//EXAMPLE=

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
/*const staffUnique = new Set(staff);
console.log(staffUnique);//Set(3) {'Waiter', 'Chef', 'Manager'}*/

const staffUnique = [...new Set(staff)];
console.log(staffUnique); //(3) ["Waiter", "Chef", "Manager"]
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); //3
console.log(new Set('Katoc').size); //5

//TITTLE:-----------------------------MAPS FUNDAMENTALS--------------------------------------------//
//NOTE:Es una estructura de datos que podemos usar para asignar valores a keys.

//NOTE:ASIGNACION

const restMap = new Map();
restMap.set('name', 'Classico Italiano');
restMap.set(1, 'Firenze,Italy');
console.log(restMap.set(2, 'Lisbon,portugal')); //Map(3) {"name" => "Classico Italiano", 1 => "Firenze,Italy", 2 => "Lisbon,portugal"}

restMap
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, `We are open =D`)
  .set(false, `We are closed =(`);
//llamar el set devuelve el map actualizado

console.log(restMap.get('name')); // Classico Italiano
console.log(restMap.get(true)); //We are open =D

const time = 21;
console.log(
  restMap.get(time > restMap.get('open') && time < restMap.get('close')) //We are open =D
);

console.log(restMap.has('Categories')); //true
restMap.delete(2);
//rest.clear();

const arr = [1, 2];
restMap.set(arr, 'Test');
restMap.set(document.querySelector('h1'), 'Heading');
console.log(restMap); // 7: {Array(2) => "Test"} 8: {h1 => "Heading"}

console.log(restMap.size); //9
console.log(restMap.get(arr)); //test

//NOTE: MAPS EXERCISES

const question = new Map([
  ['question', 'What is the best programming language in the world??'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct!!'],
  [false, 'Try again!!'],
]);
console.log(question);

//NOTE: CONVERT OBJECT TO MAP
console.log(Object.entries(openingHours)); //(3) [Array(2), Array(2), Array(2)]
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap); //Map(3) {"thu" => {…}, "fri" => {…}, "sat" => {…}}

//NOTE: ITERATION
console.log(question.get('question')); // What is the best programming language in the world??

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
/* 
Answer 1: C
Answer 2: Java
Answer 3: Javascript
 */

/*const answer = Number(prompt('You answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));*/

console.log(`CONVERT MAP TO ARRAY`);
//NOTE: CONVERT MAP TO ARRAY
console.log([...question]); //unpacking // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
console.log(question.entries()); //MapIterator {"question" => "What is the best programming language in the world??", 1 => "C", 2 => "Java", 3 => "Javascript", "correct" => 3, …}
console.log(...question.keys()); //spread //question 1 2 3 correct true false
console.log(...question.values()); //spread // What is the best programming language in the world?? C Java Javascript 3 Correct!! Try again!!

//NOTE: MORE MAP EXERCISES

const countriesArr = [
  { name: 'US', taxRate: 0.25 },
  { name: 'France', taxRate: 0.4 },
  { name: 'Sweden', taxRate: 0.5 },
  { name: 'Colombia', taxRate: 0.1 },
  { name: 'Peru', taxRate: 0.15 },
];

const usersMap = [
  { country: 'US', salary: 100000 },
  { country: 'US', salary: 90000 },
  { country: 'US', salary: 30000 },
  { country: 'US', salary: 80000 },
  { country: 'US', salary: 34000 },
  { country: 'US', salary: 55000 },
  { country: 'France', salary: 100000 },
  { country: 'France', salary: 90000 },
  { country: 'France', salary: 30000 },
  { country: 'France', salary: 80000 },
  { country: 'France', salary: 34000 },
  { country: 'France', salary: 55000 },
];

for (let user of usersMap) {
  const salary = user.salary;
  let taxRate;

  for (let country of countriesArr) {
    if (country.name === user.country) taxRate = country.taxRate;
  }
  const tax = salary * taxRate;
  console.log(`Salary ${salary} in ${user.country} pays ${tax} in taxes`);
}

//NOTE: SOLUTION WITH OBJECTS

const countriesObj = {
  US: 0.25,
  France: 0.4,
  Sweden: 0.5,
  Colombia: 0.1,
  Peru: 0.15,
};

for (let user of users) {
  const salary = user.salary;
  const tax = salary * countriesObj[user.country];
  console.log(`Salary ${salary} in ${user.country} pays ${tax} in taxes.`);
}

//NOTE: SOLUTION WITH MAPS

//Way 1 to create and initialize a map

const countriesMap = new Map([
  ['US', 0.25],
  ['France', 0.4],
  ['Sweden', 0.5],
  ['Colombia', 0.1],
  ['Peru', 0.15],
]);

//NOTE:WAY 2 , USING MAP METHOD SET

const countriesMap2 = new Map();
countriesMap.set('US', 0.25);
countriesMap.set('France', 0.4);
countriesMap.set('Sweden', 0.5);
countriesMap.set('Colombia', 0.1);
countriesMap.set('Peru', 0.15);

for (let user of users) {
  const salary = user.salary;
  const tax = salary * countriesMap2.get(user.country);
  console.log(`Salary ${salary} in ${user.country} pays ${tax} in taxes`);
}

//ITERATION MAPS
for (let [key, val] of countriesMap2) {
  console.log(`Country ${key} has a tax rate of ${val}`);
}

//TITTLE:-----------------SOURCES OF DATA ----------------------------//

/*FROM THE PROGRAM ITSELF = data written directly in source code (e.g status message).

FROM THE UI = Data input from tdehe user or data written in DOM (e.g tasks in todo app).

FROM EXTERNAL SOURCES : Data fetched for example from web API (e.g recipe objects).

collection of data ===> Data structure

simple list === > Arrays or Sets
Key / value pairs?? ===> Objects or Maps

OTHER BUILT-IN
weakMap
WeakSet

NON-BUILT IN =
stacks
queues
 Linked lists
Tress
Hash tables*/

//TITTLE:----------------------ARRAYS VS SETS AND OBJECTS VS MAPS-----------------------//

/*

NOTE: ARRAYS =

tasks = ['Code','Eat','Code'];
["code","Eat", "Code"];

-Use when your need ordered list of values (might contain duplicates)
-Use when you need to manipulate data  

NOTE: SETS = 
tasks = new Set(['code','Eat','Code']);
{"code","Eat"}

-Use when you need to work with unique values
-Use when high-performance is really important (Operaciones como buscar un elemento o eliminar un elemento del set puede ser 10 vecez mas rapido que en array ).
-Use to remove duplicates from arrays.

//Set no reemplaza a un array solo lo complementa

OBJECTS =
task = {
  task: 'Code',
  date: 'Today',
  repeat: true
};

-More "traditional" Key/Value store ("abused" objects)
-Easier to write and access values with . and [].


NOTE: MAPS=
task = new Map([
  ['Task','Code'],
  ['Date','Today'],
  [false,'Start coding!!']
]);

-Better Performance 
-Keys can have any data type
-Easy to iterate 
-Easy to compute size 

*/

//TITTLE:----------------------WORKING WITH STRING-----------------------//

const airline = 'TAPo Air Moon';
const plane = 'A320';

console.log(plane[0]); //A
console.log(plane[1]); //3
console.log(plane[2]); //2
console.log(plane[3]); //0

console.log('B737'[0]); //B
console.log(airline.length); //13
console.log('B737'.length); //4

console.log(airline.indexOf('o')); //3
console.log(airline.lastIndexOf('o')); //11
console.log(airline.indexOf('Air')); //5

console.log(airline.slice(4)); //Air Moon
console.log(airline.slice(2)); //Po Air Moon
console.log(airline.slice(4, 7)); //Ai
console.log(airline.slice(0, airline.indexOf(' '))); //TAPo
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Moon
console.log(airline.slice(-2)); //on
console.log(airline.slice(1, -1)); //APo Air Moo

console.log(typeof new String('at')); //===> Object

//NOTE: -----------------------------BASIC EXERCISE------------------------------------//

const checkMiddleSeat = function (seat) {
  //B AND E ARE MIDDLE SEATS

  const userSeat = seat.slice(-1);
  if (userSeat === 'B' || userSeat === 'E')
    console.log('You got the middle seat!!');
  else console.log('You got lucky!!');
};

checkMiddleSeat('11B'); //You got the middle seat!!
checkMiddleSeat('23C'); //script.js:773 You got lucky!!
checkMiddleSeat('3E'); // You got the middle seat!!

//NOTE:---------------------------------------------------------------------------------//

console.log(airline.toLowerCase()); // tapo air moon
console.log(airline.toUpperCase()); // TAPO AIR MOON

//NOTE: CAPITALIZACION IN NAME

const passenger = 'tOffIe';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); //Toffie

//NOTE: COMPARING hello@hello.@hello.@hello.
const email = 'hello@hello.com';
const loginEmail = 'HellO@Hello.com\n';
//const lowerEmail = loginEmail.toLowerCase();
//const trimmedEmail = lowerEmail.trim();
//console.log(trimmedEmail);//hello@hello.com

const normalizeEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalizeEmail);
//console.log(email === normalizedEmail);//true

function isEmail(arg1, arg2) {
  return arg1 === arg2;
}
console.log(isEmail(email, normalizeEmail)); //true

//NOTE:-----------------------------------REPLACING--------------------------------//

//NOTE: REPLACE

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); //288.97$

//NOTE: REPLACE ALL
const announcement = `All passengers come to boarding door 23 . Boarding door 23!`;
console.log(announcement.replaceAll('door', 'gate')); //All passengers come to boarding gate 23 , Boarding gate 23!

//NOTE:---------------FIXED THE PROBLEM WITH REGULAR EXPRESSION---------------------//

console.log(announcement.replace(/door/g, 'gate')); //All passengers come to boarding gate 23 . Boarding gate 23!

//NOTE:USING REGEX
const emailRegex = /\w+@\w+\.\w{3}/;
let email1 = 'cat@gooogle.com';
console.log(emailRegex.test(email1)); //true

//NOTE:--------------------------------BOOLEANS-------------------------------------//
const planes = 'A320neo';
console.log(planes.includes('A320')); //true;
console.log(planes.includes('BOeing')); //false
console.log(planes.includes('neo')); //true
console.log(planes.startsWith('A3')); //true

if (planes.startsWith('A') && planes.endsWith('neo')) {
  console.log('Part of the NEW AirBus Family');
} else {
  console.log('Sorry!');
}

//Part of the NEW AirBus Family

//TITTLE:-----------------------------------BASIC EXERCISE-----------------------------------//

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`You are NOT allowed on board!!`);
  } else {
    console.log(`Welcome a board!!`);
  }
};

checkBaggage(`I have a laptop, some food and a pocket Knife.`); // You are NOT allowed on board!!
checkBaggage(`Socks and camera`); // Welcome a board!!
checkBaggage(`Got some snacks and a *gun* for protection`); //You are NOT allowed on board!!

//TITTLE:----------------------------WORKING WITH STRING PART 3-------------------------------//

//NOTE: SPLIT
console.log('a+very+nice+string'.split('+')); //[ 'a', 'very', 'nice', 'string' ]

//NOTE: SPLIT AND DESTRUCTURING
console.log('Catand Dog'.split(' ')); // ["Catand", "Dog"]

const [firstName, lastName] = 'Catand Dog'.split(' ');
console.log(firstName, lastName); //Catand Dog

//NOTE: usando join() unimos todo el array .

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//NOTE: CAPITALIZE NAME AND SPLIT

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('rock scissors paper'); //Rock Scissors Paper
capitalizeName('cat and dog'); //Cat And Dog

//NOTE: PADDING A STRING = Add a number of characters to the string.

const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+')); //++++++Go to gate 23!++++++++++
console.log('Queen'.padStart(20, '+').padEnd(30, '+')); //+++++++++++++++Queen++++++++++

//NOTE: CREDIT CARD NUMBER WITH padStart()

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(542511452215444)); //***********5444
console.log(maskCreditCard(454548444455884)); //***********5884

//NOTE: REPEAT METHOD

const message2 = 'Bad weather... All departures delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'***'.repeat(n)}`);
};

planesInLine(5); //***************
planesInLine(4); //************
