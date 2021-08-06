'use strict';

//-----------------FUNCTIONS DECLARATIONS-----------------//

function calcAge(birthYear) {
  /*calcAge esta en el global scope = porque esta en el top level code.
  a su vez calcAge crea un scope y ese sera equivalente al entorno.
   */
  const age = 2021 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
  }

  //----------------------BLOCK SCOPE--------------------//
  if (birthYear >= 1981 && birthYear <= 1996) {
    var millenial = true; // var ===> before ES6
    const str = `Oh, and you're a millenial, ${firstName}`;
    console.log(
      str
    ); /*solo se obtiene el resultado imprimiendolo 
    dentro del scope porque es un block scope.*/

    function add(a, b) {
      //solo podemos usar el add function dentro de if que seria un block scope.
      //NOTA = FUNCTION SCOPE SOLO FUNCIONAN EN USE STRICT.
      return a + b;
    }
    console.log(millenial); //imprime porque esta en el global scope. [they are function scope] solo se imprime dentro de printAge.
  }
  printAge();
  return age; //age es accesible en todo calcAge.
}

//---------------------------GLOBAL VARIABLE--------------------------//
const firstName = 'Pepe';
calcAge(1989);

//---------------------------HOISTING--------------------------//
/*HOISTING = makes some types of variables accessible / usable in the code before they are actually declared .
"variables lifted to the top of their scope".
*/

//VARIABLES
console.log(me); //undefined -- las variables var son hoisting pero con el valor de undefined.
//console.log(job); // Porque sigue en el temporal dead zone
//console.log(year); //Cannot acces year before initialization.

var me = 'Valde';
let job = 'teacher'; //cannot access 'job'
const year = 1991; //cannot access 'job'

//---------------------------FUNCTIONS--------------------------//
console.log(addDeclaration(2, 2)); //4
//console.log(addExpression(2, 3)); //cannot access before initialization.
//console.log(addArrow(2, 1)); //cannot access before initialization.

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//-------------------------EXERCISE-------------------------//

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!!!!`);
}

var x = 1;
let y = 2;
const z = 3;

//-----------------------------THIS------------------------------//
/*
THIS  keyword variable = special variable that is created for every execution context (every function)
Takes the value of (points to) the "owner" of the function in which the this keyword is used.

this keyword/variable= special variable that is created for every execution context (every function).
Takes the value of (points to) the "owner" of the function in which the this keyword is used.

THis in NOT static = it depends on how the function is called , and its value in only assigned when the function is actually called,

*/

//-------------------------EXERCISE-------------------------//

//Method this = <Object that is calling the method>// this apunta al object que esta llamando el metodo.

const person = {
  name: 'Umbrella',
  year: 1989,
  calcAge: function () {
    return 2021 - this.year;
    /*
    el metodo seria calcAge porque es una funcion adjunta al objeto person, y dentro del metodo usamos la palabra clave this
    This equivsle a person porque es el objeto que esta llamando al metodo en la ultima linea.
    ademas el objeto person tiene acceso a todas las propiedades .
    si no pones stric mode , this apuntara al global object, que es el browser es el window object.
    */
  },
};
console.log(person.calcAge()); //32

//------------------------THIS IN PRACTICE--------------------------//

console.log(this); //Window {window: Window,...}

const calcAge2 = function (birthYear) {
  console.log(2021 - birthYear); //29
  console.log(this); //undefined
};

calcAge2(1992);
//-------//

const calcAgeArrow2 = birthYear => {
  console.log(2037 - birthYear); //45
  console.log(this); //siempre usa el lexico this keyword. //Window {window: Window,...}
};

calcAgeArrow2(1992);
//-------//

const person2 = {
  year: 1992,
  calcAge2: function () {
    console.log(this); //{year:1992,calcAge: f}
    console.log(2037 - this.year); //45
  },
};

person2.calcAge2();

//-------//

const matilda = {
  year: 2017,
};

matilda.calcAge2 = person2.calcAge2; // aqui se esta copiando el metodo que esta en person2.
console.log(matilda.calcAge2()); //20

//----------------REGULAR FUNCTIONS VS ARROW FUNCTIONS---------------//
console.log(`//----------------------//`);
const human = {
  firstName: 'Humanito',
  year: 1991,
  calcAge3: function () {
    console.log(this); //este this = human object.
    console.log(2037 - this.year); //46

    //---OLD SOLUTION === SELF OR THAT SOLUTION FOR REGULAR FUNCTIONS = UNDEFINED ----
    /*
    const self = this; //self or that.
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996); // self or that para que regular function = no sea undefined.
      // console.log(this.year >= 1981 && this.year <= 1996); // this is undefined = porque es una regular function.
    };
    isMillenial();
  },*/

    //---NEW ES6 SOLUTION ARROW FUNCTION === FUNCIONA PORQUE NO TIENE SU PROPIO THIS KEYWORD

    const isMillenial = () => {
      console.log(this); //{ name: 'Humanito', year: 1991, calcAge3: [Function: calcAge3] }
      console.log(this.year >= 1981 && this.year <= 1996); //This is undefined = porque es un regular function.
    };
    isMillenial();
  },
  greet: () => {
    console.log(`Hey ${firstName}`);
  },
};

human.greet(); //Hey undefined , porque arrow function no tiene su this keyword.
//solamente usara el parent scope del greet que seria human.calcAge();
human.calcAge3();

//----------ARGUMENTS KEYWORD - para tenerlo encuenta pero ya ahi otra solucion mas novedosa------------------//
/*
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);*/

//-------------PRIMITIVES VS OBJECTS IN PRACTICE----------------//
//PRIMITIVE TYPES

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); //Davis Williams

//REFERENCE TYPES

const robot = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedRobot = robot;
marriedRobot.lastName = 'Davis';
console.log('Before Marriage', robot);
console.log('After marriage', marriedRobot);

//COPIA POR REFERENCIA = javaScript para no consumir mas memoria hace una copia por referencia cuando el valor es de tipo compuesto = objects, arrays ..etc.
//por eso modifica el value del primer object.

// RESULT = Before Marriage { firstName: 'Jessica', lastName: 'Davis', age: 27 }
//After marriage { firstName: 'Jessica', lastName: 'Davis', age: 27 }

//-------//

const robot2 = {
  firstName: 'Jessica2',
  lastName: 'Williams2',
  age: 26,
  family: ['Alice', 'Bob'],
};

const robot2Copy = Object.assign({}, robot2); //sale un object nuevo y se guarda en robot2Copy.
robot2Copy.lastName = 'Davis';
console.log(`Before Marriage`, robot2);
console.log(`After marriage:`, robot2Copy);

robot2Copy.family.push('Mary');
robot2Copy.family.push('John');

const robot2Copy = { ...robot2 }; //ASSIGN Y ... agregan y modifican el array de los dos objects.
console.log();
