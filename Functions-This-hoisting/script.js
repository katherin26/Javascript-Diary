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

//--------------------------------------------------//
