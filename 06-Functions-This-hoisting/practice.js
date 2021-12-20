'use strict';

/*NOTE: LOCAL VS GLOBAL SCOPE
When you have the same variable the local scope take precedence over global  variables 
or constants.
*/

//Global scope
const color = 'red';

//Local Scope
function start() {
  const message = 'hi';
  const color = 'blue';
  console.log(color);
}

function stop() {
  const message = 'bye';
}

//NOTE: USING BIND METHOD.

//Let's create and object with name myCar and give it properties name make, model , year

let myCar = new Object();
myCar.make = 'FOrd';
myCar.model = 'Mustang';
myCar.year = 1969;

//console.log(myCar);

////OBJECT INITIALIZER = is comma delimited list of zero or more pairs .
let myCar2 = {
  make: 'ford',
  model: 'Mustang',
  year: 1969,
};

//console.log(myCar2);

//ACCESS AN OBJECT : objects can also be accesed or set using a bracket notation (check on property accessors);

//Syntax
//object.property
//object['property'];

//dot notacion
//bracket notation
//const variable = object[property_name]
//object[property_name]=value;
//PROPERTY NAMES =

//let object = {}
//object['1'] = 'v'
//console.log(object[1]);

// let foo = {unique_prop:1},
//      bar={unique_prop:2},
//      object={};
// object[foo]='value'

// console.log(foo);
// console.log(object[bar]);
// console.log(bar);
// console.log(object[foo]);

//METHOD BINDING
//this does not necessarily refer to the object containing a method . insted , this is "passed" by the function call.

//THIS = a function's this keyword behaves a little differently in Javascript compared to other languages . It also has some differences between stric mode and non-strict mode.

// In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).

//EXAMPLE =
const test = {
  prop: 42,
  func: function () {
    return this.prop;
  },
};

//GLOBAL CONTEXT = in the global context (outside of any function ), this refers to the global object whether in strict mode or not.

//In the browsers , the window object is also the global object.

a = 37;
//console.log(window.a);

this.b = 'MDN';
//-------------------------------------------//
//Function.prototype.bind()
//the bind() method creates a new function that , when called ,has its THIS keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());

//ThisArg
//THe value to be passed as the this parameter to the target function FUNC when the bound function is called.
//the value is ignored if the bound function is constructed using the new operator .

//When using bind to create a function (supplied as a callback) inside a setTimeOut, any primitive value passed as thisArg is converted to object.
//if no arguments are provided to bind , or if the thisArg is null or undefined , the this of the executing scope is treated as the thisArg fir the new function.

//Return value
//A copy of the given function with the specified this value , and initial arguments(if provided).

//EXAMPLES
//CREATING A BOUND FUNCTION

//this.x = 9;    // 'this' refers to global 'window' object here in a browser
//const module = {
//x: 81,
//getX: function() { return this.x; }
//};

//module.getX();
//  returns 81

//const retrieveX = module.getX;
//retrieveX();
//  returns 9; the function gets invoked at the global scope

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
//const boundGetX = retrieveX.bind(module);
//boundGetX();
//  returns 81

//-------------------------------------------
//ACCES A PROPERTY BY USING A STRING VALUE THAT IS STORED IN A VARIABLE.

let propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model1';
myCar[propertyName] = 'Mustang';

//ITERATION WITH A FOR IN
var myCar3 = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969,
};

function showProps(obj, objName) {
  let result = ``;
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}

const result = showProps(myCar3, 'car object');
console.log(result);
