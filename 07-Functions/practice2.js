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

//Factory function.

function createZone(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

let factoryAddress = createZone(`2020 sw 8 ST`, `Miami`, `33225`);
console.log(factoryAddress);

/*NOTE: Create a function and compare the objects literals, log to the console if they are equals or not. */

let object1 = {
  name: 'Ninja',
  lastname: 'Red',
  age: 50,
  city: 'D.C',
};

let object2 = {
  name: 'Nerd',
  lastname: 'pink',
  age: 23,
  city: 'C.D',
};

function checkObj(obj1, obj2) {
  if (obj1 === obj2) {
    console.log(`They are equals`);
  } else {
    console.log(`They are not equals`);
  }
  return;
}

checkObj(object1, object2);

function checkObj2(obj1, obj2) {
  return obj1 === obj2 ? 'Are equals' : 'Not are equals';
}

checkObj2(object1, object2);
