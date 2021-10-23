/*NOTE: Create an object which contains street, city and zipcode and then create 
a function in which you can iterate over the object and print the key and value. */

let area = {
  street: 'a',
  city: 'b',
  zipCode: 'c',
};

function showAddress(address) {
  for (let key in address) console.log(key, address[key]);
}

showAddress(area);

//With constructor function.

function CreateList(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}

let createList = new CreateList('Var', 'Let', 30);
console.log(createList);
